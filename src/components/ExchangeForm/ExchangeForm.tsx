import { FC, useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import changeService from '../../services/api/change'
import { Currency } from '../../services/api/change.types'
import Button from '../Button'
import CurrencyInput from '../CurrencyInput'
import Input from '../Input'
import { AddressInputWrapper, CurrencyInputsWrapper, ExchangeFormWrapper } from './ExchangeForm.styles'
import useDebounce from '../../hooks/useDebounce'

const ExchangeForm: FC = () => {
  const [fromCurrency, setFromCurrency] = useState<Currency>()
  const [fromAmount, setFromAmount] = useState(0)
  const [toCurrency, setToCurrency] = useState<Currency>()
  const [address, setAddress] = useState('')

  const debouncedFromAmount = useDebounce(fromAmount, 300)

  const isRequestsForMinAndEstAmountEnabled = !!fromCurrency?.ticker && !!toCurrency?.ticker

  const { data: allCurrencies = [] } = useQuery({
    queryKey: ['get-all-currencies'],
    queryFn: () => changeService.getAllAvailableCurrencies({}),
  })

  const { data: minimalFromAmount } = useQuery({
    queryKey: ['minimal-exchange-from-amount', fromCurrency, toCurrency],
    queryFn: () =>
      changeService.getMinimaxExchangeAmount({
        fromCurrency: fromCurrency?.ticker as string,
        toCurrency: toCurrency?.ticker as string,
        fromNetwork: fromCurrency?.network,
        toNetwork: toCurrency?.network,
      }),
    enabled: isRequestsForMinAndEstAmountEnabled,
  })

  const isInvalidValue = useDebounce(!!minimalFromAmount?.minAmount && fromAmount < minimalFromAmount?.minAmount, 300)

  const { data: estimatedAmount } = useQuery({
    queryKey: ['estimated-exchange-to-amount', fromCurrency, toCurrency, debouncedFromAmount],
    queryFn: () =>
      changeService.getEstimatedExchangeAmount({
        fromCurrency: fromCurrency?.ticker as string,
        toCurrency: toCurrency?.ticker as string,
        fromAmount: fromAmount,
        fromNetwork: fromCurrency?.network,
        toNetwork: toCurrency?.network,
      }),
    enabled: isRequestsForMinAndEstAmountEnabled && !!debouncedFromAmount && !isInvalidValue,
  })

  const isDisabledPair =
    (!!minimalFromAmount && !minimalFromAmount?.minAmount) || (!!estimatedAmount && !estimatedAmount?.toAmount)

  useEffect(() => {
    if (minimalFromAmount?.minAmount) setFromAmount(minimalFromAmount?.minAmount)
  }, [minimalFromAmount])

  return (
    <ExchangeFormWrapper>
      <h1>Crypto Exchange</h1>
      <h5>Exchange fast and easy</h5>
      <CurrencyInputsWrapper>
        <CurrencyInput
          options={allCurrencies}
          activeCurrency={fromCurrency}
          amount={fromAmount.toString()}
          setAmount={setFromAmount}
          setActiveCurrency={setFromCurrency}
          errorMessage={isInvalidValue ? 'Amount is less than minimum' : ''}
        />
        <img src='/swap.svg' />
        <CurrencyInput
          options={allCurrencies}
          activeCurrency={toCurrency}
          amount={isInvalidValue ? '-' : (estimatedAmount?.toAmount ?? 0).toString()}
          setActiveCurrency={setToCurrency}
          disabledAmountInput
        />
      </CurrencyInputsWrapper>
      <AddressInputWrapper>
        <Input label='Your Ethereum address' value={address} setValue={setAddress} />
        <Button title='Exchange' errorMessage={isDisabledPair ? 'This pair is disabled now' : ''} />
      </AddressInputWrapper>
    </ExchangeFormWrapper>
  )
}

export default ExchangeForm

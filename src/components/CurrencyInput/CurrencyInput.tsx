import { ChangeEventHandler, FC, useEffect, useMemo, useRef, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { Currency } from '../../services/api/change.types'
import { CurrencyInputProps } from './Currency.input.types'
import {
  ActiveItem,
  ActiveItemWrapper,
  CurrencyInputWrapper,
  DropdownWrapper,
  InputErrorMessage,
  SearchInputWrapper,
} from './CurrencyInput.styles'

const CurrencyInput: FC<CurrencyInputProps> = ({
  activeCurrency,
  amount,
  options,
  setActiveCurrency,
  setAmount,
  placeholder = 'Choose currency',
  errorMessage,
  disabledAmountInput = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchText, setSearchText] = useState('')

  const ref = useRef<HTMLDivElement>(null)

  const debouncedSearchText = useDebounce(searchText, 300)

  const handleAmountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAmount?.(+e.target.value)
  }

  const handleSearchTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value)
  }

  const handleChangeActiveCurrency = (currency: Currency) => {
    setActiveCurrency(currency)
    setIsOpen(false)
  }

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  const clearSearch = () => {
    setSearchText('')
    setIsOpen(false)
  }

  const filteredOption = useMemo(
    () => options.filter((option) => option.name.toLowerCase().includes(debouncedSearchText.toLowerCase())),
    [options, debouncedSearchText]
  )

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onClick = (e: any): void => {
      if (!ref.current!.contains(e.target)) clearSearch()
    }

    if (isOpen) {
      document.addEventListener('click', onClick)
    } else document.removeEventListener('click', onClick)

    return () => document.removeEventListener('click', onClick)
  }, [isOpen])

  return (
    <CurrencyInputWrapper isOpen={isOpen} ref={ref}>
      {!isOpen && <input type='text' disabled={disabledAmountInput} value={amount} onChange={handleAmountChange} />}
      {isOpen && (
        <SearchInputWrapper>
          <input type='text' value={searchText} onChange={handleSearchTextChange} />
          <button type='button' onClick={clearSearch}>
            <img src='/Close.svg' />
          </button>
        </SearchInputWrapper>
      )}
      <DropdownWrapper isOpen={isOpen}>
        <ActiveItemWrapper isOpen={isOpen} onClick={toggleDropdown}>
          {activeCurrency ? (
            <ActiveItem>
              <img src={activeCurrency?.image} />
              <div>{activeCurrency?.ticker}</div>
            </ActiveItem>
          ) : (
            <div>{placeholder}</div>
          )}

          <img src='/Arrow down.svg' />
        </ActiveItemWrapper>

        <ul>
          {filteredOption.map((option) => (
            <li onClick={() => handleChangeActiveCurrency(option)} key={`${option.name}${option.network}`}>
              <img src={option.image} />
              <p>{option.ticker}</p>
              <p>{option.name}</p>
            </li>
          ))}
        </ul>
      </DropdownWrapper>
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </CurrencyInputWrapper>
  )
}

export default CurrencyInput

import { Currency } from '../../services/api/change.types'

export type CurrencyInputProps = {
  amount: string
  setAmount: (value: number) => void
  activeCurrency?: Currency
  setActiveCurrency: (value: Currency) => void
  options: Currency[]
  placeholder?: string
  errorMessage?: string
}

export type DropdownWrapperProps = {
  isOpen: boolean
}

export type CurrencyInputWrapperProps = DropdownWrapperProps

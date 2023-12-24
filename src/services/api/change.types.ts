export type Currency = {
  ticker: string
  name: string
  image: string
  hasExternalId: boolean
  isFiat: boolean
  featured: boolean
  isStable: boolean
  supportsFixedRate: boolean
  network: string
  tokenContract: string | null
  buy: boolean
  sell: boolean
  legacyTicker: string
}

export type ExchangeFlow = 'standard' | 'fixed-rate'

export type ExchangeDirection = 'direct' | 'reverse'

export type BaseGetExchangeAmountParams = {
  fromCurrency: string
  toCurrency: string
  fromNetwork?: string
  toNetwork?: string
  flow?: ExchangeFlow
}

export type BaseGetExchangeAmountResponse = {
  fromCurrency: string
  fromNetwork: string
  toCurrency: string
  toNetwork: string
  flow: ExchangeFlow
}

export type GetAvailableCurrenciesRequestParams = Partial<{
  active: boolean
  flow: ExchangeFlow
  buy: boolean
  sell: boolean
}>

export type GetMinimalExchangeAmountRequestParams = BaseGetExchangeAmountParams

export type GetEstimatedExchangeAmountRequestParams = BaseGetExchangeAmountParams & {
  fromAmount?: number
  toAmount?: number
  type?: ExchangeDirection
  useRateId?: boolean
  isTopUp?: boolean
}

export type GetAvailableCurrenciesResponse = Currency[]

export type GetMinimalExchangeAmountResponse = BaseGetExchangeAmountResponse & {
  minAmount: number
}

export type GetEstimatedExchangeAmountResponse = BaseGetExchangeAmountResponse & {
  type: ExchangeDirection
  rateId: string | null
  validUntil: string | null
  transactionSpeedForecast: string | null
  warningMessage: string | null
  depositFee: number
  withdrawalFee: number
  userId: number
  fromAmount: number
  toAmount: number
}

export type GetAvailableCurrenciesFunc = (
  params: GetAvailableCurrenciesRequestParams
) => Promise<GetAvailableCurrenciesResponse>

export type GetMinimalExchangeAmountFunc = (
  params: GetMinimalExchangeAmountRequestParams
) => Promise<GetMinimalExchangeAmountResponse>

export type GetEstimatedExchangeAmountFunc = (
  params: GetEstimatedExchangeAmountRequestParams
) => Promise<GetEstimatedExchangeAmountResponse>

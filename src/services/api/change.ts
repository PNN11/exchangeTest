import { axiosInstance } from '../axios'
import {
  GetAvailableCurrenciesFunc,
  GetEstimatedExchangeAmountFunc,
  GetMinimalExchangeAmountFunc,
} from './change.types'

class ChangeService {
  getAllAvailableCurrencies: GetAvailableCurrenciesFunc = async (params) => {
    const response = await axiosInstance.get('/v2/exchange/currencies', { params })

    return response.data
  }
  getMinimaxExchangeAmount: GetMinimalExchangeAmountFunc = async (params) => {
    const response = await axiosInstance.get('v2/exchange/min-amount', { params })

    return response.data
  }
  getEstimatedExchangeAmount: GetEstimatedExchangeAmountFunc = async (params) => {
    const response = await axiosInstance.get('v2/exchange/estimated-amount', { params })

    return response.data
  }
}

const changeService = new ChangeService()

export default changeService

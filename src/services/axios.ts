import axios from 'axios'

const BASE_URL = 'https://api.changenow.io'

const API_KEY = 'c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'x-changenow-api-key': API_KEY },
})

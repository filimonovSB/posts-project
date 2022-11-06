import axios from 'axios'

export const requestAPI = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: { 'Content-Type': 'application/json' },
})

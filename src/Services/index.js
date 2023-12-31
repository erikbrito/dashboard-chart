import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'https://jsonplaceholder.typicode.com/',
  headers: {
    'content-type': 'application/json'
  }
})

export default api
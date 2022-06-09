import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:8080/api"
})

export const apiLogin = async (email, password) => {
  return api.post('/login', {email, password})
    .then(response => {
      return {
        success: true,
        data: response.data
      }
    })
    .catch(error => ({
      success: false,
      message: error.response.data.message
    }))
}

export const apiProfile = async () => {
  const token = localStorage.getItem('access_token')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  return api.get('/profile', config)
    .then(response => {
      return {
        success: true,
        data: response.data
      }
    })
    .catch(error => ({
      success: false,
      message: error.response.data.message
    }))
}
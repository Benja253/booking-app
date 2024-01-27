import axios from "axios"
import { useNavigate } from "react-router-dom"

const axiosInstance = axios.create({
  baseURL: 'https://hotels-api.academlo.tech'
})

const useAuth = () => {

  const navigate = useNavigate()

  const loginUser = (data) => {
    axiosInstance.post('/users/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  const registerUser = (data) => {
    axiosInstance.post('/users', data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return { registerUser, loginUser }
}

export default useAuth
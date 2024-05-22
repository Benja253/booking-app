import axios from "axios"
import { useNavigate } from "react-router-dom"
import { closeNotifications, showNotifications } from "../store/slices/notifications.slice"
import { useDispatch } from "react-redux"

const axiosInstance = axios.create({
  baseURL: 'https://hotels-api.academlo.tech'
})

const useAuth = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const loginUser = (data, message) => {
    axiosInstance.post('/users/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        navigate('/')
        dispatch(showNotifications({
          message,
          isShow: true,
          isBgColorGreen: true
        }))
        setTimeout(() => {
          dispatch(closeNotifications())
        }, 3000);
      })
      .catch(err => console.log(err))
  }

  const registerUser = (data, message) => {
    axiosInstance.post('/users', data)
      .then(res => {
        console.log(res.data)
        dispatch(showNotifications({
          message,
          isShow: true,
          isBgColorGreen: true
        }))
        setTimeout(() => {
          dispatch(closeNotifications())
        }, 3000);
      })
      .catch(err => console.log(err))
  }

  return { registerUser, loginUser }
}

export default useAuth
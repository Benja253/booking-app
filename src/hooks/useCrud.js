import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"
import { showNotifications, closeNotifications } from "../store/slices/notifications.slice"
import { useDispatch } from "react-redux"

const axiosInstance = axios.create({
  baseURL: 'https://hotels-api.academlo.tech'
})

const useCrud = () => {
  
  const [infoApi, setInfoApi] = useState([])

  const dispatch = useDispatch()

  const getApi = (path) => {
    axiosInstance.get(path, getConfigToken())
      .then(res => setInfoApi(res.data))
      .catch(err => {
        console.log(err)
        localStorage.clear()
      })
  }

  const postApi = (path, data, message) => {
    axiosInstance.post(path, data, getConfigToken())
      .then(res => {
        console.log(res.data)
        setInfoApi([...infoApi, res.data])
        dispatch(showNotifications({
          message,
          isShow: true,
          isBgColorGreen: true
        }))
        setTimeout(() => {
          dispatch(closeNotifications())
        }, 3000);
      })
      .catch(err => {
        console.log(err)
        localStorage.clear()
      })
  }

  const deleteApi = (path, id, message) => {
    axiosInstance.delete(`${path}/${id}`, getConfigToken())
      .then(res => {
        console.log(res.data)
        setInfoApi(infoApi.filter(e => e.id !== id))
        dispatch(showNotifications({
          message,
          isShow: true,
          isBgColorGreen: true
        }))
        setTimeout(() => {
          dispatch(closeNotifications())
        }, 3000);
      })
      .catch(err => {
        console.log(err)
        localStorage.clear()
      })
  }

  const updateApi = (path, id, data) => {
    axiosInstance.put(`${path}/${id}`, data, getConfigToken())
      .then(res => {
        console.log(res.data)
        setInfoApi(infoApi.map(e => e.id === id ? res.data : e))
      })
      .catch(err => {
        console.log(err)
        localStorage.clear()
      })
  }

  return [ infoApi, getApi, postApi, deleteApi, updateApi ]

}

export default useCrud
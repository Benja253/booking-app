import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"

const axiosInstance = axios.create({
  baseURL: 'https://hotels-api.academlo.tech'
})

const useCrud = () => {
  
  const [infoApi, setInfoApi] = useState([])

  const getApi = (path) => {
    axiosInstance.get(path, getConfigToken())
      .then(res => setInfoApi(res.data))
      .catch(err => console.log(err))
  }

  const postApi = (path, data) => {
    axiosInstance.post(path, data, getConfigToken())
      .then(res => {
        console.log(res.data)
        setInfoApi([...infoApi, res.data])
      })
      .catch(err => console.log(err))
  }

  const deleteApi = (path, id) => {
    axiosInstance.delete(`${path}/${id}`, getConfigToken())
      .then(res => {
        console.log(res.data)
        setInfoApi(infoApi.filter(e => e.id !== id))
      })
      .catch(err => console.log(err))
  }

  const updateApi = (path, id, data) => {
    axiosInstance.put(`${path}/${id}`, data, getConfigToken())
      .then(res => {
        console.log(res.data)
        setInfoApi(infoApi.map(e => e.id === id ? res.data : e))
      })
      .catch(err => console.log(err))
  }

  return [ infoApi, getApi, postApi, deleteApi, updateApi ]

}

export default useCrud
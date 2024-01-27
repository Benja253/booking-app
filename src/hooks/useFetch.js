import axios from "axios"
import { useState } from "react"

const axiosInstance = axios.create({
  baseURL: 'https://hotels-api.academlo.tech'
})

const useFetch = () => {
  
  const [infoApi, setInfoApi] = useState()

  const getApi = (path) => {
    axiosInstance.get(path)
      .then(res => setInfoApi(res.data))
      .catch(err => console.log(err))
  }

  return [ infoApi, getApi ]

}

export default useFetch
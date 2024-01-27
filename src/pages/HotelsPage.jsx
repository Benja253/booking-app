import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"
import HotelInfo from "../components/HotelsPage/HotelInfo"

const HotelsPage = () => {

  const { id } = useParams()

  const [ hotel, getHotel ] = useFetch()

  useEffect(() => {
    getHotel(`/hotels/${id}`)
  }, [id])

  return (
    <div>
      <HotelInfo 
        hotel={hotel}
      />
    </div>
  )
}

export default HotelsPage
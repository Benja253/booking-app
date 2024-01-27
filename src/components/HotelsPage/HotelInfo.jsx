import { SlLocationPin } from 'react-icons/sl'
import { Map, Marker } from "pigeon-maps"
import StarRating from '../shared/StarRating'
import FormReservation from './FormReservation'
import SliderPhoto from './SliderPhoto'
import './styles/HotelInfo.css'
import { useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import Hotel from '../HomePage/Hotel'

const HotelInfo = ({ hotel }) => {

  const [ otherHotels, getOtherHotels ] = useFetch()

  useEffect(() => {
    if(hotel) {
      getOtherHotels(`https://hotels-api.academlo.tech/hotels?cityId=${hotel?.city.id}`)
    }
  }, [hotel])

  console.log(otherHotels)

  return (
    <section className='hotel'>
      <header className='hotel__name'>
        <h2 className='hotel__name__value'>{hotel?.name}</h2>
        <StarRating rating={hotel?.rating} />
      </header>
      <SliderPhoto hotel={hotel} />
      <div className='hotel__map'>
        {
          hotel && (
            <Map defaultWidth={320} height={300} defaultCenter={[+hotel.lat, +hotel.lon]} defaultZoom={13}>
              <Marker width={50} anchor={[+hotel.lat, +hotel.lon]} />
            </Map>
          )
        }
      </div>
      <section className='hotel__info'>
        <h3 className='hotel__country'>{hotel?.city.name}, {hotel?.city.country}</h3>
        <div className='hotel__direction'>
          <SlLocationPin />
          <span className='hotel__direction__value'>{hotel?.address}</span>
        </div>
        <p className='hotel__description'>{hotel?.description}</p>
      </section>
      <section className='hotel__reservation'>
        <h3 className='hotel__reservation__title'>Reservation</h3>
        <FormReservation hotel={hotel} />
      </section>
      <section className='otherhotel'>
        <h3 className='otherhotel__title'>Other Hotels in <span className='otherhotel__title__country'>{hotel?.city.country}</span></h3>
        <div className='otherhotel__container'>
          {
            otherHotels?.results.filter(hotelOt => hotelOt.id !== hotel.id).map(hotelOt => (
              <Hotel key={hotelOt.id} hotelInfo={hotelOt} />
            ))
          }
        </div>
      </section>
    </section>
  )
}

export default HotelInfo
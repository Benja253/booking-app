import { useNavigate } from "react-router-dom"
import StarRating from "../shared/StarRating"
import './styles/Hotel.css'

const Hotel = ({ hotelInfo }) => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/hotels/${hotelInfo.id}`)
  }

  // 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg'

  return (
    <article className="hotel-card">
      <header className="hotel-card__header">
        <img className="hotel-card__image" src={hotelInfo.images[0].url} alt="hotel" />
      </header>
      <section className="hotel-card__body">
        <h3 className="hotel-card__name">{hotelInfo.name}</h3>
        <div className="hotel-card__rating">
          <StarRating rating={hotelInfo.rating} />
          {
            hotelInfo.rating === null
              ? <span className="hotel-card__no-rating" >No Rating</span>
              : <span className="hotel-card__rating-value">{hotelInfo.rating}</span>
          }
        </div>
        <div className="hotel-card__country">{hotelInfo.city.name}, {hotelInfo.city.country}</div>
        <p className="hotel-card__price">{hotelInfo.price}</p>
        <button className="hotel-card__btn" onClick={handleNavigate}>See more...</button>
      </section>
    </article>
  )
}

export default Hotel
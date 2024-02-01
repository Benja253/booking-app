import getDaysFromDates from "../../services/getDaysFromDates"
import './styles/RerserveSelected.css'

const ReserveSelected = ({ reserve }) => {

  const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut)

  return (
    <article className="reserveSelected">
      <header className="reserveSelected__header">
        <img className="reserveSelected__img" src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section className="reserveSelected__info">
        <h3 className="reserveSelected__name">{reserve.hotel.name}</h3>
        <div className="reserveSelected__location">{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
      </section>
      <section className="reserveSelected__days__price">
        <div className="reserveSelected__days">
          <span className="reserveSelected__days__label">Reservation Days</span>
          <span className="reserveSelected__days__value">{reservationsDays}</span>
        </div>
        <div className="reserveSelected__subtotal">
          <span className="reserveSelected__subtotal__label">subtotal Price</span>
          <span className="reserveSelected__subtotal__value">{reservationsDays* Number(reserve.hotel.price)}</span>
        </div>
      </section>
    </article>
  )
}

export default ReserveSelected
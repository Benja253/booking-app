import getDaysFromDates from "../../services/getDaysFromDates"
import "./styles/ReserveCard.css"

const ReserveCard = ({ reserve, deleteReservation, setReserveSelected }) => {

  const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut)

  const handleDelete = () => {
    deleteReservation('/bookings', reserve.id, 'Reserve Selected! ❌')
  }

  const handleSelectReserve = () => {
    setReserveSelected(reserve)
  }

  return (
    <article className="reserve">
      <header className="reserve__header">
        <img className="reserve__img" src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section className="reserve__info">
        <h3 className="reserve__name">{reserve.hotel.name}</h3>
        <div className="reserve__location">{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div onClick={handleSelectReserve} className="reserve__comment">Rate and comment this visit...</div>
      </section>
      <section className="reserve__days__price">
        <div className="reserve__days">
          <span className="reserve__days__label">Reservation Days</span>
          <span className="reserve__days__value">{reservationsDays}</span>
        </div>
        <div className="reserve__subtotal">
          <span className="reserve__subtotal__label">subtotal Price</span>
          <span className="reserve__subtotal__value">{reservationsDays* Number(reserve.hotel.price)}</span>
        </div>
      </section>
      <button className="reserve__delete" onClick={handleDelete}>
        <i className='bx bx-trash'></i>
      </button>
    </article>
  )
}

export default ReserveCard
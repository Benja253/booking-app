import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationPage/ReserveCard"
import './styles/ReservationPage.css'
import FormReviews from "../components/ReservationPage/FormReviews"
import { Link } from "react-router-dom"

const ReservationPage = () => {

  const [reserveSelected, setReserveSelected] = useState()

  const [ reservation, getReservation, , deleteReservation ] = useCrud()

  useEffect(() => {
    getReservation('/bookings')
  }, [])

  return (
    <div className="reservations">
      <h2 className="reservations__title">Reservations</h2>
      <FormReviews
        reserveSelected={reserveSelected}
        setReserveSelected={setReserveSelected}
      />
      {
        reservation.length
          ? (
            <div className="reservations__container">
              {
                reservation.map(reserve => (
                  <ReserveCard
                    key={reserve.id}
                    reserve={reserve}
                    deleteReservation = {deleteReservation}
                    setReserveSelected={setReserveSelected}
                  />
                ))
              }
            </div>
          )
          : <p>😞 No hay reservaciones activas. Para escoger un hotel y reservar <Link className="reservations__link" to='/'>ir a Home</Link></p>
      }
    </div>
  )
}

export default ReservationPage
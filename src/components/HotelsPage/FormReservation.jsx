import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import './styles/FormReservation.css'

const FormReservation = ({ hotel }) => {

  const { handleSubmit, reset, register } = useForm()

  const [ ,, createBooking ] = useCrud()

  const submit = data => {
    data.hotelId = hotel.id
    createBooking('/bookings', data, 'Reservations Created! 😄')
    reset({
      checkIn: '',
      checkOut: ''
    })
  }

  return (
    <form className="form-reservation" onSubmit={handleSubmit(submit)}>
      <div className="form-reservation__fields">
        <label className="form-reservation__field">
          <span className="form-reservation__label">Check-in</span>
          <input className="form-reservation__input" {...register('checkIn')} type="date" id='checkin' />
        </label>
        <label className="form-reservation__field">
          <span className="form-reservation__label">Check-out</span>
          <input className="form-reservation__input" {...register('checkOut')} type="date" id='chackout' />
        </label>
      </div>
      <button className="form-reservation__btn">Submit</button>
    </form>
  )
}

export default FormReservation
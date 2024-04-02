import { useForm } from "react-hook-form";
import ReserveSelected from "./ReserveSelected";
import './styles/FormReviews.css'
import useCrud from "../../hooks/useCrud";

const FormReviews = ({ reserveSelected, setReserveSelected }) => {

  const [,,createReviews] = useCrud()

  const { reset, handleSubmit, register } = useForm()

  const submit = data => {
    const obj = {
      ...data,
      hotelId: +reserveSelected?.hotelId || 1,
      rating: +data.rating
    }
    createReviews('/reviews', obj)
    setReserveSelected()
  }

  return (
    <div className={`reserve ${reserveSelected || 'reserve__close'}`}>
      <form className="reserve__form" onSubmit={handleSubmit(submit)}>
        <div onClick={() => setReserveSelected()} className="reserve__x">x</div>
        <h3 className="reserve__title">reserve</h3>
        {
          reserveSelected &&
          <ReserveSelected
            reserve={reserveSelected}
          />
        }
        <label className="reserve__label reserve__label__rating">
          <span className="reserve__label__name">Rating</span>
          <select className="reserve__rating" {...register('rating')}>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="1">⭐️</option>
          </select>
        </label>
        <label className="reserve__label">
          <span className="reserve__label__name">Comments</span>
          <textarea className="reserve__value reserve__comment__value" {...register('comment')} />
        </label>
        <button className="reserve__btn">Submit</button>
      </form>
    </div>
  );
};

export default FormReviews;

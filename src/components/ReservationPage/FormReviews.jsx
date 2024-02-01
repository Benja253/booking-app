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
    <div className={`reviews ${reserveSelected || 'reviews__close'}`}>
      <form className="reviews__form" onSubmit={handleSubmit(submit)}>
        <div onClick={() => setReserveSelected()} className="reviews__x">x</div>
        <h3 className="reviews__title">Reviews</h3>
        {
          reserveSelected &&
          <ReserveSelected
            reserve={reserveSelected}
          />
        }
        <label className="reviews__label reviews__label__rating">
          <span className="reviews__label__name">Rating</span>
          <select className="reviews__rating" {...register('rating')}>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="1">⭐️</option>
          </select>
        </label>
        <label className="reviews__label">
          <span className="reviews__label__name">Comments</span>
          <textarea className="reviews__value reviews__comment__value" {...register('comment')} />
        </label>
        <button className="reviews__btn">Submit</button>
      </form>
    </div>
  );
};

export default FormReviews;

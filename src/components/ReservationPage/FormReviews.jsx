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
    createReviews('/reviews', obj, 'Review Created! ✅')
    setReserveSelected()
  }

  return (
    <div className={`reserve__form-container ${reserveSelected || 'reserve__form__close'}`}>
      <form className="reserve__form" onSubmit={handleSubmit(submit)}>
        <div onClick={() => setReserveSelected()} className="reserve__form__x">x</div>
        <h3 className="reserve__form__title">reserve</h3>
        {
          reserveSelected &&
          <ReserveSelected
            reserve={reserveSelected}
          />
        }
        <label className="reserve__form__label reserve__label__rating">
          <span className="reserve__form__label__name">Rating</span>
          <select className="reserve__form__rating" {...register('rating')}>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="1">⭐️</option>
          </select>
        </label>
        <label className="reserve__form__label">
          <span className="reserve__form__label__name">Comments</span>
          <textarea className="reserve__form__value reserve__form__comment__value" {...register('comment')} />
        </label>
        <button className="reserve__form__btn">Submit</button>
      </form>
    </div>
  );
};

export default FormReviews;

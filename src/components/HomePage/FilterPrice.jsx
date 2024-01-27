import { useForm } from "react-hook-form";
import "./styles/FilterPrice.css"

const FilterPrice = ({ setFromTo }) => {

  const { handleSubmit, reset, register } = useForm()

  const submit = data => {
    setFromTo({
      from: data.from ? +data.from : 0,
      to: data.to ? +data.to : Infinity
    })
  }

  return (
    <form className="price" onSubmit={handleSubmit(submit)}>
      <h3 className="price__title">Price</h3>
      <div className="price__field">
        <label className="price__label" htmlFor="from">From</label>
        <input className="price__input" {...register('from')} type="number" id="from" />
      </div>
      <div className="price__field">
        <label className="price__label" htmlFor="to">To</label>
        <input className="price__input" {...register('to')} type="number" id="to" />
      </div>
      <button className="price__btn">Search</button>
    </form>
  );
};

export default FilterPrice;

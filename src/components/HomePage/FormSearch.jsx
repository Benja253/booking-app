import { useRef } from "react"
import './styles/FormSearch.css'

const FormSearch = ({ setNameInput, setIsOpenForm }) => {

  const inputValue = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setNameInput(inputValue.current.value.trim().toLowerCase())
  }

  const handleOpenFilter = () => {
    setIsOpenForm(true)
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input className="search__input" type="text" ref={inputValue} />
      <button className="search__btn">Search</button>
      <div onClick={handleOpenFilter} className="homepage__filter__icon">
        <i className='bx bx-filter-alt filter__icon'></i>
      </div>
    </form>
  )
}

export default FormSearch
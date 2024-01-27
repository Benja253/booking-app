import { useRef } from "react"
import './styles/FormSearch.css'

const FormSearch = ({ setNameInput }) => {

  const inputValue = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setNameInput(inputValue.current.value.trim().toLowerCase())
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input className="search__input" type="text" ref={inputValue} />
      <button className="search__btn">Search</button>
    </form>
  )
}

export default FormSearch
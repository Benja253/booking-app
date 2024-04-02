import FilterCountry from "./FilterCountry"
import FilterPrice from "./FilterPrice"
import './styles/FilterSection.css'

const FilterSection = ({ setFromTo, setCountrySelected, setIsOpenForm, isOpenForm }) => {

  const handleExit = () => {
    setIsOpenForm(false)
  }

  return (
    <section className={`filters ${isOpenForm || 'filter__close'}`}>
      <header className="filters__header">
        <h2 className="filters__title">Filters</h2>
        <div onClick={handleExit} className="filters__exit">x</div>
      </header>
      <FilterPrice
        setFromTo={setFromTo}
      />
      <FilterCountry
        setCountrySelected={setCountrySelected}
      />
    </section>
  )
}

export default FilterSection
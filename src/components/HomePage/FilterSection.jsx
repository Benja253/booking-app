import FilterCountry from "./FilterCountry"
import FilterPrice from "./FilterPrice"
import './styles/FilterSection.css'

const FilterSection = ({ setFromTo, setCountrySelected }) => {
  return (
    <section className="filters">
      <h2 className="filters__title">Filters</h2>
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
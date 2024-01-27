import { useEffect, useRef } from "react"
import useFetch from "../../hooks/useFetch"
import "./styles/FilterCountry.css"

const FilterCountry = ({ setCountrySelected }) => {

  const [ countries, getCountries ] = useFetch()

  useEffect(() => {
    getCountries('/cities')
  }, [])

  const handleClick = countryId => {
    setCountrySelected(countryId)
  }

  return (
    <section className="filter-country">
      <h3 className="filter-country__title">Cities</h3>
      <ul className="filter-country__list">
        <li onClick={() => handleClick('allCities')} className="filter-country__item">All Cities</li>
        {
          countries?.map(country => (
            <li onClick={() => handleClick(country.id)} className="filter-country__item" key={country.id}>{country.name}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default FilterCountry
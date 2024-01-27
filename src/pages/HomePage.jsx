import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHotelsThunk } from "../store/slices/hotels.slice"
import Hotel from "../components/HomePage/Hotel"
import FormSearch from "../components/HomePage/FormSearch"
import FilterSection from "../components/HomePage/FilterSection"
import './styles/HomePage.css'

const HomePage = () => {

  const [nameInput, setNameInput] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })
  const [countrySelected, setCountrySelected] = useState('allCities')

  const hotels = useSelector(store => store.hotels)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotelsThunk())
  }, [])

  const filterCb = hotel => {
    const nameFilter = hotel.name.toLowerCase().includes(nameInput)
    const priceFilter = +hotel.price >= fromTo.from && +hotel.price <= fromTo.to
    const cityFilter = countrySelected === 'allCities' ? true : hotel.cityId === +countrySelected
    return nameFilter && priceFilter && cityFilter
  }

  return (
    <div className="homepage">
      <FilterSection 
        setFromTo={setFromTo}
        setCountrySelected={setCountrySelected}
      />
      <FormSearch
        setNameInput={setNameInput}
      />
      <div className="homepage__card-container">
        {
          hotels?.results.filter(filterCb).map(hotelInfo => (
            <Hotel
              key={hotelInfo.id}
              hotelInfo={hotelInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomePage
import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import ReviewItem from "./ReviewItem"
import axios from "axios"

const ReviewsHotel = ({ hotel }) => {

  const [reviews, setReviews] = useState()
  const [perPage, setPerPage] = useState(0)

  useEffect(() => {
    if(hotel) {
      const url = `https://hotels-api.academlo.tech/reviews?hotelId=${hotel.id}&perPage=5&offset=${5 * perPage}`
      axios.get(url)
        .then(res => {
          if(reviews) {
            setReviews(e => [...e, ...res.data.results])
          } else {
            setReviews(res.data.results)
          }
        })
        .catch(err => console.log(err))
    }
  }, [hotel, perPage])

  const handleShowMore = () => {
    setPerPage(e => e + 1)
  }

  return (
    <article className="reviews">
      <h2 className="reviews__title">Comments</h2>
      <div className="reviews__container">
        {
          reviews?.map(review => (
            <ReviewItem 
              key={review.id}
              review={review}
            />
          ))
        }
      </div>
      <button className="" onClick={handleShowMore}>Show more</button>
    </article>
  )
}

export default ReviewsHotel
import StarRating from "../shared/StarRating"
import './styles/ReviewItem.css'

const ReviewItem = ({ review }) => {
  return (
    <article className="review">
      <header className="review__header">
        <h3 className="review__user">{review.user.firstName} {review.user.lastName}</h3>
        <div className="review__rate">
          <StarRating rating={review.rating} />
          <span className="review__rate__value">{review.rating}</span>
        </div>
      </header>
      <section className="comment">
        <p className="comment__paragraph">{review.comment}</p>
      </section>
    </article>
  )
}

export default ReviewItem
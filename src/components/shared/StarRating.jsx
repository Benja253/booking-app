import { MdOutlineStarBorder, MdOutlineStarHalf, MdOutlineStar } from 'react-icons/md'

const stars = [1, 2, 3, 4, 5]

const StarRating = ({ rating = null }) => {
  return (
    <div>
      {
        stars.map(number => {
          if(rating === null) return <MdOutlineStarBorder key={number} />
          
          const rest = (rating - Math.floor(rating)).toFixed(1)
          if(number <= rating) {
            return <MdOutlineStar key={number} />
          } else {
            if(rest >= 0.3 && rest <= 0.9 && number + +rest - 1 === rating) {
              return <MdOutlineStarHalf key={number} />
            } else if(rest > 0.9 && rest < 1 && number + +rest - 1 === rating) {
              return <MdOutlineStar key={number} />
            } else {
              return <MdOutlineStarBorder key={number} />
            }
          }
        })
      }
    </div>
  )
}

export default StarRating
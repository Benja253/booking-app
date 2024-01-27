import { useState } from 'react'
import './styles/SliderPhoto.css'

const SliderPhoto = ({ hotel }) => {

  const [imgSelected, setImgSelected] = useState(0)

  const objStyle = {
    transform: `translateX(calc(-${imgSelected}/8 * 100%))`
  }

  const handlePrev = () => {
    if(imgSelected - 1 > 0) {
      setImgSelected(imgSelected - 1)
    } else {
      setImgSelected(7)
    }
  }

  const handleNext = () => {
    if(imgSelected + 1 <= 7) {
      setImgSelected(imgSelected + 1)
    } else {
      setImgSelected(0)
    }
  }

  console.log(hotel)

  return (
    <div className="slider-container">
      <div className="slider">
        <button onClick={handlePrev} className='slider__btn'>&lt;</button>
        <div className='slider__interior__container'>
          <div style={objStyle} className="slider__interior">
            {
              hotel?.images.map(imgInfo => (
                <div key={imgInfo.url} className="slider__img-container">
                  <img className="slider__img" src={imgInfo.url} alt="" />
                </div>
              ))
            }
          </div>
        </div>
        <button onClick={handleNext} className='slider__btn slider__btn__next'>&gt;</button>
      </div>
      <div className="slider-footer">
        
      </div>
    </div>
  )
}

export default SliderPhoto
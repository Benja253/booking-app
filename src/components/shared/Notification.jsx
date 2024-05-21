
const Notification = ({message, isShow, isBgColorGreen}) => {

  const objStyles = {
    backgroundColor: isBgColorGreen ? 'rgb(19, 138, 15)' : 'rgb(250, 64, 64)'
  }
  
  return (
    <div style={objStyles} className={`app__notifications ${isShow || 'closeNotification'}`}>
      <p className="app__notifications__message">{message}</p>
    </div>
  )
}

export default Notification
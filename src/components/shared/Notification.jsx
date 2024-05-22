
const Notification = ({message, isShow, isBgColorGreen}) => {

  const objStyles = {
    backgroundColor: isBgColorGreen ? 'rgba(19, 138, 15, 0.5)' : 'rgba(250, 64, 64, 0.5)'
  }
  
  return (
    <div style={objStyles} className={`app__notifications ${isShow || 'closeNotification'}`}>
      <p className="app__notifications__message">{message}</p>
    </div>
  )
}

export default Notification
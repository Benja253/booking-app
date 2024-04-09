import { useNavigate } from "react-router-dom"
import './styles/UserLogged.css'

const UserLogged = ({ user }) => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <article className="loginpage user">
      <header className="user__header">
        {
          <img
            className="user__image"
            src={`/images/${user.gender}.png`} 
            alt={`${user.gender} male`}
          />
        }
      </header>
      <h2 className="user__welcome">Welcome, <span className="user__name">{user.firstName} {user.lastName}</span></h2>
      <button className="user__btn" onClick={handleLogout}>Logout</button>
    </article>
  )
}

export default UserLogged
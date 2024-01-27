import { Link } from "react-router-dom";
import './styles/HeaderShared.css'
import { useState } from "react";

const HeaderShared = () => {

  const [navIsClosed, setNavIsClosed] = useState(true)

  const handleNavToggle = () => {
    setNavIsClosed(!navIsClosed)
  }

  return (
    <header className="header">
      <h1 className="header__logo">
        <Link to="/">Booking<span className="header__app">App</span></Link>
      </h1>
      <div onClick={handleNavToggle} className='header__menu'>
        <i className='bx bx-menu'></i>
      </div>
      <nav className={`header__nav ${navIsClosed && 'nav__close'}`}>
        <ul className="header__list">
          <li className="header__item">
            <Link to="/">Reservation</Link>
          </li>
          <li className="header__item">
            <Link to="/register">Register</Link>
          </li>
          <li className="header__item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderShared;

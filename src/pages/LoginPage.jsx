import './styles/LoginPage.css'
import { useState } from "react";
import FormUser from "../components/LoginPage/FormUser";
import UserLogged from '../components/LoginPage/UserLogged';

const LoginPage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  return (
    <div className='loginpage-container'>
      {
        user
          ? <UserLogged user={user} />
          : <FormUser />
      }
    </div>
  );
};

export default LoginPage;

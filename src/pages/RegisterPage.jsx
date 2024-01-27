import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import './styles/RegisterPage.css'

const RegisterPage = () => {

  const { handleSubmit, reset, register } = useForm()
  const { registerUser } = useAuth()

  const submit = data => {
    registerUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: ''
    })
  }

  return (
    <div className="register">
      <h2 className="register__title">Register</h2>
      <form className="form-register" onSubmit={handleSubmit(submit)}>
        <div className="form-register__field">
          <label className="form-register__label" htmlFor="firstname">First Name</label>
          <input className="form-register__input" {...register('firstName')} type="text" id="firstname" />
        </div>
        <div className="form-register__field">
          <label className="form-register__label" htmlFor="lastname">Last Name</label>
          <input className="form-register__input" {...register('lastName')} type="text" id="lastname" />
        </div>
        <div className="form-register__field">
          <label className="form-register__label" htmlFor="email">Email</label>
          <input className="form-register__input" {...register('email')} type="email" id="email" />
        </div>
        <div className="form-register__field">
          <label className="form-register__label" htmlFor="password">Password</label>
          <input className="form-register__input" {...register('password')} type="password" id="password" />
        </div>
        <div className="form-register__field">
          <select className="form-register__select" {...register('gender')} defaultValue='unknown'>
            <option className="form-register__option" value="unknown">unknown</option>
            <option className="form-register__option" value="male">male</option>
            <option className="form-register__option" value="female">female</option>
            <option className="form-register__option" value="other">other</option>
          </select>
        </div>
        <button className="form-register__btn">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;

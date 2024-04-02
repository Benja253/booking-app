import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

const FormUser = () => {

  const { handleSubmit, reset, register} = useForm()
  const { loginUser } = useAuth()

  const submit = data => {
    loginUser(data)
  }

  return (
    <article className="loginpage">
      <header className="loginpage__header">
        <img className="loginpage__img" src="/images/user.png" alt="" />
      </header>
      <form className="login" onSubmit={handleSubmit(submit)}>
        <h2 className="loginpage__title">User</h2>
        <div className="login__field">
          <label className="login__label" htmlFor="email">Email</label>
          <input className="login__input" {...register('email')} type="email" id="email" />
        </div>
        <div className="login__field">
          <label className="login__label" htmlFor="password">Password</label>
          <input className="login__input" {...register('password')} type="password" id="password" />
        </div>
        <button className="login__btn">Submit</button>
      </form>
    </article>
  )
}

export default FormUser
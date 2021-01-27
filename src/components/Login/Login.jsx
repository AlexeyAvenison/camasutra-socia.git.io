import React from 'react';
import { reduxForm } from 'redux-form';
import s from "./Login.module.css"
import LoginForm from './Form';


const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData)
   }
   return (
      <div className={s.wrapper}>
         <h2>Login</h2>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}

export default Login;
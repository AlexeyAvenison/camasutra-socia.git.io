import React from 'react';
import { reduxForm } from 'redux-form';
import s from "./Login.module.css"
import LoginForm from './Form';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm);

const Login = (props) => {

   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe);
      // console.log(formData);
   }

   if(props.isAuth) {
      return <Redirect to={'profile'}/>
   }
   
   return (
      <div className={s.wrapper}>
         <h2>Login</h2>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, { login }) (Login);
import React from 'react';
import s from "./Login.module.css";
import { Field } from 'redux-form';

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={"input"} name={"Login"} placeholder={"Login"} type="text" />
         </div>
         <div>
            <Field component={"input"} name={"Password"} placeholder={"Password"} type="text" />
         </div>
         <div>
            <Field component={"input"} name={"checkbox"} placeholder={"checkbox"} type="checkbox" /> remember me
         </div>
         <button>Login</button>
      </form>
   )
}

export default LoginForm;
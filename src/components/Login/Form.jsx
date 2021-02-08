import React from 'react';
import { Field } from 'redux-form';
import { maxLengthCreator } from '../../utils/validators/validator';
import {FormsCreator } from './../../comons/FormsControl';
import { required } from './../../utils/validators/validator';


let maxLength40 = maxLengthCreator(40);
const Input = FormsCreator("input");

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Input}
               validate={[required, maxLength40]}
               name={"email"}
               placeholder={"Login"}
               type="text" />
         </div>
         <div>
            <Field component={Input}
               validate={[required, maxLength40]}
               name={"password"}
               placeholder={"Password"}
               type="password" />
         </div>
         <div>
            <Field component={Input}
               name={"rememberMe"}
               type="checkbox" /> remember me
         </div>
         <button>Login</button>
      </form>
   )
}

// const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

// const Login = (props) => {

//    const onSubmit = (formData) => {
//       props.login(formData.email, formData.password, formData.rememberMe)
//    }
   
//    return (
//       <div className={s.wrapper}>
//          <h2>Login</h2>
//          <LoginReduxForm onSubmit={onSubmit}/>
//       </div>
//    )
// }

export default LoginForm;
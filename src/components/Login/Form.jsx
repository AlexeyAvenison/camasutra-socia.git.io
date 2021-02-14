import React from 'react';
import { Field } from 'redux-form';
import { maxLengthCreator } from '../../utils/validators/validator';
import { FormsCreator } from './../../comons/FormsControl';
import { required } from './../../utils/validators/validator';
import s from './../../comons/FormsControl.module.css';


let maxLength40 = maxLengthCreator(40);
const Input = FormsCreator("input");

const LoginForm = (props) => {
   return (
      <div>
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
            <div className={s.errorMessage} >{props.error}</div>
            <div>
               <Field component={Input}
                  name={"rememberMe"}
                  type="checkbox" /> remember me
         </div>
            <button>Login</button>
         </form>

      </div>

   )
}

export default LoginForm;
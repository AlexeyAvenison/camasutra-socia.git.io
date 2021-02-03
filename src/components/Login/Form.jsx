import React from 'react';
import { Field } from 'redux-form';
import { maxLengthCreator } from '../../utils/validators/validator';
import {FormsCreator } from './../../comons/FormsControl';
import { required } from './../../utils/validators/validator';


let maxLength20 = maxLengthCreator(20);
const Input = FormsCreator("input");

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Input}
               validate={[required, maxLength20]}
               name={"Login"}
               placeholder={"Login"}
               type="text" />
         </div>
         <div>
            <Field component={Input}
               validate={[required, maxLength20]}
               name={"Password"}
               placeholder={"Password"}
               type="text" />
         </div>
         <div>
            <Field component={Input}
               name={"checkbox"}
               placeholder={"checkbox"}
               type="checkbox" /> remember me
         </div>
         <button>Login</button>
      </form>
   )
}

export default LoginForm;
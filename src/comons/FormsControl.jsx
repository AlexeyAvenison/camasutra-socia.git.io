import React from 'react';
import s from './FormsControl.module.css'



// export const TextArea = ({ input, meta, ...props }) => {
//    let hasError = meta.touched && meta.error;
//    return (
//       <div className={s.formControl + " " + (hasError ? s.error: "")}>
//          <textarea  {...props} {...input} />
//          {hasError ? <span className={s.errorMassage}>{meta.error}</span> : ""}
//       </div>
//    )
// }

// export const Input = ({ input, meta, ...props }) => {
//    let hasError = meta.touched && meta.error;
//    return (
//       <div className={s.formControl + " " + (hasError ? s.error: "")}>
//          <input  {...props} {...input} />
//          {hasError ? <span className={s.errorMassage}>{meta.error}</span> : ""}
//       </div>
//    )
// }

export const FormsCreator = (Element) => ({ input, meta, ...props }) => {
   let hasError = meta.touched && meta.error;
   return (
      <div className={s.formControl + " " + (hasError ? s.error: "")}>
         <Element  {...props} {...input} />
         {hasError ? <span className={s.errorMassage}>{meta.error}</span> : ""}
      </div>
   )
}

export default FormsCreator;
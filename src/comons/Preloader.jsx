import React from 'react'
import preloader from './../assets/25.svg'

const Preloader = (props) => {
   return (
      <div >
         <img alt={'isfetching'} src={preloader} />
      </div>
   )
}
export default Preloader;
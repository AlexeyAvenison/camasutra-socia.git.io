import React, { useState } from 'react';
import s from './Users.module.css';

const Pagination = (props) => {
   let pagesCount = Math.ceil(props.totalCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   let portionCount = Math.ceil(pagesCount / props.pagePortionSize);
   const [portionNumber, setPortionNumber] = useState(1);
   let leftPageNumber = (portionNumber - 1) * props.pagePortionSize + 1;
   let rightPageNumber = portionNumber * props.pagePortionSize;
   return (
      <div className={s.pagination}>
         <button className={s.paginationBtn} onClick={() => portionNumber === 1
            ? setPortionNumber(portionCount)
            : setPortionNumber(portionNumber - 1)} >Prev</button>

         <div className={s.selectedPageWrap}>
            {pages.filter(p => p >= leftPageNumber && p <= rightPageNumber)
               .map(p => {
                  return <div className={props.currentPage === p && s.selectedPage}
                     key={p}
                     onClick={(e) => { props.onPageChanged(p) }} >{p}</div>
               })}
         </div>

         <button className={s.paginationBtn} onClick={() => portionNumber === portionCount 
            ? setPortionNumber(portionCount = 1) 
            : setPortionNumber(portionNumber + 1) } >Next</button>
      </div>
   )
}

export default Pagination;
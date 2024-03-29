import React from 'react';
import { NavLink } from 'react-router-dom';
import Pagination from './Pagination';
import s from './Users.module.css';

const Users = (props) => {
   return (
      <div className={s.wrapp}>
         <div>
            <Pagination totalCount={props.totalCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}
               onPageChanged={props.onPageChanged}
               pagePortionSize={props.portionSize} />
         </div>
      
         {
            props.users.map(u => <div className={s.usersItem} key={u.id}>
               <div className='s.usersItem-ava'>
                  <div className={s.wrapImg}>
                     <NavLink to={'/profile/' + u.id}>
                        <img alt={'ava'} src={u.photos.small != null ? u.photos.small : "https://pngimg.com/uploads/face/face_PNG5669.png"} />
                     </NavLink>
                  </div>
                  {u.sub
                     ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => { props.unfollow(u.id) }}
                        className={s.usersItemBtn}>Unfollow</button>

                     : <button disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => { props.follow(u.id) }}
                        className={s.usersItemBtn}>Follow</button>}
               </div>
               <div className={s.info}>
                  <div className={s.infoWrap}>
                     <span className={s.name}>{u.name}</span>
                     <span className={s.status}>{u.status}</span>
                  </div>

                  <div className={s.infoWrap}>
                     <span className={s.country}>{"u.location.country"}</span>
                     <span className={s.sity}>{"u.location.sity"}</span>
                  </div>
               </div>
            </div>)
         }
      </div>
   )
}

export default Users;
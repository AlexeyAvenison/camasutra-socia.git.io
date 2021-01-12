import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
      <div className={s.wrapp}>
         <div className={s.selectedPageWrap}>
            {pages.map(p => {
               return (
                  <div className={props.currentPage === p && s.selectedPage}
                     onClick={(e) => { props.onPageChanged(p) }} >{p}</div>
               )
            })}

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
                     ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toogleFollowingInProgress(true, u.id);
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                           withCredentials: true,
                           headers : {
                              "API-KEY": "4d2cf2d1-aa6d-4471-bfce-e89bac64f124"
                           }
                        })
                           .then(response => {
                              if(response.data.resultCode === 0) {
                                 props.unfollow(u.id)
                              }
                              props.toogleFollowingInProgress(false, u.id);
                           });
                        

                     }} className={s.usersItemBtn}>Unfollow</button>
                     : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toogleFollowingInProgress(true, u.id);
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                           withCredentials: true,
                           headers : {
                              "API-KEY": "4d2cf2d1-aa6d-4471-bfce-e89bac64f124"
                           }
                        })
                           .then(response => {
                              if(response.data.resultCode === 0) {
                                 props.follow(u.id)
                              }
                              props.toogleFollowingInProgress(false, u.id);
                           });

                     }} className={s.usersItemBtn}>Follow</button>}
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
import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';



const Users = (props) => {
   if (props.users.length === 0) {
      axios.get("").then(response => {
         props.setUsers(response.data.items)
      });
      props.setUsers(
         [
            { id: 1, ava: 'https://pngimg.com/uploads/face/face_PNG5669.png', name: "Dima", location: { sity: "Minsk", country: "Belarus" }, status: "I am lookking", sub: false },
            { id: 2, ava: 'https://pngimg.com/uploads/face/face_PNG5669.png', name: "Ivan", location: { sity: "Moscow", country: "Russia" }, status: "I am working", sub: false },
            { id: 3, ava: 'https://pngimg.com/uploads/face/face_PNG5669.png', name: "Anna", location: { sity: "Kiev", country: "Ukraine" }, status: "I am a boss", sub: true },
            { id: 4, ava: 'https://pngimg.com/uploads/face/face_PNG5669.png', name: "Bob", location: { sity: "Dnipro", country: "Ukraine" }, status: "I sub boss", sub: false }
         ]
      )
   }
   return (
      <div className={s.wrapp}>
         {
            props.users.map(u => <div className={s.usersItem} key={u.id}>
               <div className='s.usersItem-ava'>
                  <div className={s.wrapImg}>
                     <img src={u.ava} />
                  </div>
                  {u.sub
                     ? <button onClick={() => { props.unfollow(u.id) }} className={s.usersItemBtn}>Unfollow</button>
                     : <button onClick={() => { props.follow(u.id) }} className={s.usersItemBtn}>Follow</button>}
               </div>
               <div className={s.info}>
                  <div className={s.infoWrap}>
                     <span className={s.name}>{u.name}</span>
                     <span className={s.status}>{u.status}</span>
                  </div>

                  <div className={s.infoWrap}>
                     <span className={s.country}>{u.location.country}</span>
                     <span className={s.sity}>{u.location.sity}</span>
                  </div>
               </div>
            </div>)
         }
      </div>
   )
}


export default Users;
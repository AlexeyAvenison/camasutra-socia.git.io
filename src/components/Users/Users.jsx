import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
   constructor(props) {
      super(props);
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         this.props.setUsers(response.data.items)
      });
   }

   // getUsers = () => {
   //    if (this.props.users.length === 0) {
   //       axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
   //          this.props.setUsers(response.data.items)
   //       });
   //    }
   // }

   render() {
      return (
         <div className={s.wrapp}>
            {
               this.props.users.map(u => <div className={s.usersItem} key={u.id}>
                  <div className='s.usersItem-ava'>
                     <div className={s.wrapImg}>
                        <img alt={'ava'} src={u.photos.small != null ? u.photos.small : "https://pngimg.com/uploads/face/face_PNG5669.png"} />
                     </div>
                     {u.sub
                        ? <button onClick={() => { this.props.unfollow(u.id) }} className={s.usersItemBtn}>Unfollow</button>
                        : <button onClick={() => { this.props.follow(u.id) }} className={s.usersItemBtn}>Follow</button>}
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
}

// const Users = (props) => {
//    let getUsers = () => {
//       if (props.users.length === 0) {
//          axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//             props.setUsers(response.data.items)
//          });
//       }
//    }


//    return (

//       <div className={s.wrapp}>
//          <button onClick={getUsers} className={s.usersItemBtn}>Get Users</button>
//          {
//             props.users.map(u => <div className={s.usersItem} key={u.id}>
//                <div className='s.usersItem-ava'>
//                   <div className={s.wrapImg}>
//                      <img src={u.photos.small != null ? u.photos.small : "https://pngimg.com/uploads/face/face_PNG5669.png"} />
//                   </div>
//                   {u.sub
//                      ? <button onClick={() => { props.unfollow(u.id) }} className={s.usersItemBtn}>Unfollow</button>
//                      : <button onClick={() => { props.follow(u.id) }} className={s.usersItemBtn}>Follow</button>}
//                </div>
//                <div className={s.info}>
//                   <div className={s.infoWrap}>
//                      <span className={s.name}>{u.name}</span>
//                      <span className={s.status}>{u.status}</span>
//                   </div>

//                   <div className={s.infoWrap}>
//                      <span className={s.country}>{"u.location.country"}</span>
//                      <span className={s.sity}>{"u.location.sity"}</span>
//                   </div>
//                </div>
//             </div>)
//          }
//       </div>
//    )
// }


export default Users;
import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   };

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
         });
   };

   render() {

      let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }


      return (
         <div className={s.wrapp}>
            <div className={s.selectedPageWrap}>
               {pages.map(p => {
                  return (
                     <div className={this.props.currentPage === p && s.selectedPage}
                        onClick={(e) => { this.onPageChanged(p) }} >{p}</div>
                  )
               })}

            </div>
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
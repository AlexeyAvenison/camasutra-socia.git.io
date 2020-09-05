import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    let avaName = props.sitebar.friends.map( a => (<Friend name={a.name} src={a.ava}/>))

    return (
        <nav className={s.nav}>
            <div className={`${s.item}`}>
                <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
            </div>

            <div className={s.itemFriends}>
                <NavLink activeClassName={s.active} to="/friends">Users</NavLink>
                <div className={s.wrapp}>
                    {avaName}
                </div>
            </div>
        </nav>
    )
}

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.avatar}>
                <NavLink activeClassName={s.active} to="/#">
                    <img src={props.src}/>
                </NavLink>
            </div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}
export default Navbar;
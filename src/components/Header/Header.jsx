import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/Sabine.png'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return <header className={s.header}>
        <img src={logo} />
        <div className={s.login}>
            { props.isAuth === true ? 
            <div className={s.logout}>
                {props.login}
                <button onClick={props.logout}>Log out</button>
            </div>
            : <NavLink to={'login'}>Login</NavLink> }
        </div>
        

    </header>
}

export default Header;
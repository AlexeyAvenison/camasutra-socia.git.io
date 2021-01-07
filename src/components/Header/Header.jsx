import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/Sabine.png'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return <header className={s.header}>
        <img src={logo} />
        <div className={s.login}>
            { props.isAuth ? props.login 
            : <NavLink to={'login'}>Login</NavLink> }
        </div>

    </header>
}

export default Header;
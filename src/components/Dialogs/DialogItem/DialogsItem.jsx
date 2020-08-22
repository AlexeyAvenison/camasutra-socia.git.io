import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;

    // let Avatar = props.state.dialogs.map( avatar => (<img className={s.avatar} src={avatar.ava}/>));

    return (
        <div className={s.dialogsItem + '  ' + s.active}>
            <img className={s.avatar} src={props.avatar}/>
            <NavLink className={s.linkFriend} to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogsItem;
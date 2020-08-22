import React from "react";
import s from "./../Dialogs.module.css"

const Message = (props) => {
    return (
        <div>
            <div className={s.wrappFlex}>
                <div className={s.wrappMessages}>
                    <div className={`${s.avatar} ${s.avatarMessages}`}>
                        <img src="https://s00.yaplakal.com/pics/pics_original/4/6/4/10101464.jpg" alt="ava"/>
                    </div>
                    <div className={`${s.messages} ${s.myMessages} `}>{props.messages}</div>
                </div>
            </div>
        </div>
    )
}

export default Message;
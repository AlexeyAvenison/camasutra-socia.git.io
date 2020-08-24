import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { messageChangeCreator, postMessageChangeCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialogs => (<DialogsItem avatar={dialogs.ava} name={dialogs.name} id={dialogs.id} />));
    let messagesItem = props.dialogsPage.messages.map(messages => (<Message messages={messages.messages} />));


    let postMessage = () => {
        let action = postMessageChangeCreator();
        props.dispatch(action);
    }


    let onMessagesChanges = (e) => {
        let text = e.target.value;
        let action = messageChangeCreator(text)
        props.dispatch(action);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>

            <div className={s.dialogsMassages}>
                <div>{messagesItem}</div>
                <div>
                    <textarea onChange={onMessagesChanges} className={s.textMessages}></textarea>
                    <button onClick={postMessage} className={s.postMessage}>Post</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;
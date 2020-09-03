import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialogs => (<DialogsItem avatar={dialogs.ava} key={dialogs.id} name={dialogs.name} id={dialogs.id} />));
    let messagesItem = props.messages.map(messages => (<Message messages={messages.messages} key={messages.id} />));
    let messageBody = props.textMessages;

    let onPostMessage = () => {
        props.postMessage();
    }

    let messagesChanges = (e) => {
        let text = e.target.value;
        props.onMessagesChanges(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>

            <div className={s.dialogsMassages}>
                <div>{messagesItem}</div>
                <div>
                    <textarea onChange={messagesChanges} value={messageBody} className={s.textMessages}></textarea>
                    <button onClick={onPostMessage} className={s.postMessage}>Post</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;
import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { FormsCreator } from './../../comons/FormsControl';
import { maxLengthCreator } from "../../utils/validators/validator";


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialogs => (<DialogsItem avatar={dialogs.ava} key={dialogs.id} name={dialogs.name} id={dialogs.id} />));
    let messagesItem = props.messages.map(messages => (<Message messages={messages.messages} key={messages.id} />));
    

    let addNewMessage = (value) => {
        props.postMessage(value.messageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>

            <div className={s.dialogsMassages}>
                <div>{messagesItem}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>

            </div>
        </div>
    )
}

let maxLength50 = maxLengthCreator(50);
const TextArea = FormsCreator("textarea");

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Write your message" name="messageBody" validate={[maxLength50]} component={TextArea} className={s.textMessages}></Field>
            <button className={s.postMessage}>Post</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm)

export default Dialogs;
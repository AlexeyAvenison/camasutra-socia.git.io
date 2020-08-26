import React from "react";
import { messageChangeCreator, postMessageChangeCreator } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let postMessage = () => {
        let action = postMessageChangeCreator();
        props.store.dispatch(action);
    }

    let onMessagesChanges = (text) => {
        let action = messageChangeCreator(text)
        props.store.dispatch(action);
    }

    debugger;
    return (
        <Dialogs postMessage={postMessage} onMessagesChanges={onMessagesChanges} 
        dialogs={state.dialogsPage.dialogs} 
        messages={state.dialogsPage.messages} />
    )
}

export default DialogsContainer;
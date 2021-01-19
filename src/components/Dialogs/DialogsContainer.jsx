import { messageChangeCreator, postMessageChangeCreator } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textMessages: state.dialogsPage.textMessages,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        postMessage: () => {
            let action = postMessageChangeCreator();
            dispatch(action);
        },
        onMessagesChanges: (text) => {
            let action = messageChangeCreator(text)
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
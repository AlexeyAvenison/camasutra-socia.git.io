import { messageChangeCreator, postMessageChangeCreator } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hok/withAuthRedired";



let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textMessages: state.dialogsPage.textMessages,
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);



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



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
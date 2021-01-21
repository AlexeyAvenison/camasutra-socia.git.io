import { messageChangeCreator, postMessageChangeCreator } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hok/withAuthRedired";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textMessages: state.dialogsPage.textMessages,
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
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
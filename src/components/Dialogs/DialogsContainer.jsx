import { postMessage } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hok/withAuthRedired";
import { compose } from "redux";
import { reduxForm } from "redux-form";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textMessages: state.dialogsPage.textMessages,
    }
}


export default compose(
    connect(mapStateToProps, {postMessage}),
    withAuthRedirect
)(Dialogs);
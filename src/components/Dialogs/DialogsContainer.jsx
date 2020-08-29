import { messageChangeCreator, postMessageChangeCreator } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from "react-redux";


// const DialogsContainer = (props) => {
//     let state = props.store.getState();

//     let postMessage = () => {
//         let action = postMessageChangeCreator();
//         props.store.dispatch(action);
//     }

//     let onMessagesChanges = (text) => {
//         let action = messageChangeCreator(text)
//         props.store.dispatch(action);
//     }

//     debugger;
//     return (
//         <Dialogs postMessage={postMessage} onMessagesChanges={onMessagesChanges}
//             dialogs={state.dialogsPage.dialogs}
//             messages={state.dialogsPage.messages} />
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
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
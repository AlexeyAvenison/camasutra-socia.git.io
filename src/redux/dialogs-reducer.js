const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const POST_MESSAGE_TEXT = 'POST-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

   if (action.type === UPDATE_MESSAGE_TEXT) {
      state.textMessages = action.messageText;
   }
   else if (action.type === POST_MESSAGE_TEXT) {
      let text = state.textMessages;
      let newMessages = {
         id: 1,
         messages: text
      }
      state.messages.push(newMessages);
      text = '';
   }

   return state;
}

export default dialogsReducer;
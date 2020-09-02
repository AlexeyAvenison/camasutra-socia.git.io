const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const POST_MESSAGE_TEXT = 'POST-MESSAGE-TEXT';

let initialState = {
   dialogs: [
      { id: 1, name: 'Andrew', ava: 'https://cdnimg.rg.ru/img/content/132/44/35/vliianie_kofe_d_850.jpg' },
      { id: 2, name: 'Alina', ava: 'https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg' },
      { id: 3, name: 'Dima', ava: 'https://i.lb.ua/093/06/5eafcd0924b16.jpeg' },
      { id: 4, name: 'Ivan' },
      { id: 5, name: 'Konstantin' },
      { id: 6, name: 'Vlad' }
   ],
   messages: [
      { id: 1, messages: 'Hi' },
   ],
   textMessages: ''
};

const dialogsReducer = (state = initialState, action) => {

   let stateCopy = { 
      ...state,
      messages: [...state.messages]
   };

   switch (action.type) {
      case UPDATE_MESSAGE_TEXT: {
         let stateCopy = { ...state };
         stateCopy.textMessages = action.messageText;
         return stateCopy;
      }
      case POST_MESSAGE_TEXT: {
         let newMessages = {
            id: 1,
            messages: state.textMessages
         }
         let stateCopy = { ...state };
         stateCopy.messages.push(newMessages);
         stateCopy.textMessages = '';
         return stateCopy;
      }
      default:
         return state;
   }
};

export const messageChangeCreator = (text) => {
   return {
      type: 'UPDATE-MESSAGE-TEXT',
      messageText: text
   }
}

export const postMessageChangeCreator = () => {
   return {
      type: 'POST-MESSAGE-TEXT'
   }
};

export default dialogsReducer;
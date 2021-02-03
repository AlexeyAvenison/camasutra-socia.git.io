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
   ]
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case POST_MESSAGE_TEXT:
         return {
            ...state,
            messages: [...state.messages, { id: 1, messages: action.messageBody }],
         };
      default:
         return state;
   }
};


export const postMessage = (messageBody) => {
   return {
      type: POST_MESSAGE_TEXT, messageBody
   }
};

export default dialogsReducer;
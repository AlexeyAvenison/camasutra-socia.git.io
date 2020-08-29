const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
   postsData: [
      { id: 1, messages: 'Hi, how are you?', likesCount: 5 },
      { id: 2, messages: 'Hi, it\'s my first post.', likesCount: 12 },
      { id: 3, messages: 'Hi, it\'s my first post.', likesCount: 12 },
      { id: 4, messages: 'Hi, it\'s my first post.', likesCount: 12 },
      { id: 5, messages: 'Hi, it\'s my first post.', likesCount: 12 }
   ],
   newPostText: ''
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            messages: state.newPostText,
            likesCount: 0
         };
         state.postsData.push(newPost);
         state.newPostText = '';
         return state;
      case UPDATE_NEWPOST_TEXT:
         state.newPostText = action.postText;
         return state;
      default:
         return state;
   }
};

export const addPostActionCreator = () => {
   return {
      type: 'ADD-POST'
   }
}

export const onPostChangeActionCreator = (text) => {
   return {
      type: 'UPDATE-NEWPOST-TEXT',
      postText: text
   }
}

export default profileReducer;
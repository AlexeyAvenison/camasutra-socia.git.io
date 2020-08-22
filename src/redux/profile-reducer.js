const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {


   if (action.type === ADD_POST) {
      let newPost = {
         id: 5,
         messages: state.newPostText,
         likesCount: 0
      };
      state.postsData.push(newPost);
   }
   else if (action.type === UPDATE_NEWPOST_TEXT) {
      state.newPostText = action.postText;
   }

   return state;
}

export default profileReducer;
import profileReducer, { addPost, deletePost } from "./profile-reducer";



it('adding new post', () => {
   let state = {
      postsData: [
         { id: 1, messages: "hello", likesCount: 0 }
      ]
   };

   let action = addPost('lalalla')

   let newState = profileReducer(state, action);

   expect(newState.postsData.length).toBe(2);
   expect(newState.postsData[1].messages).toBe('lalalla');

});

it('deletting posts', () => {
   let state = {
      postsData: [
         { id: 1, messages: "hello", likesCount: 0 },
         { id: 2, messages: "hellfwefo", likesCount: 0 },
         { id: 3, messages: "wefwo", likesCount: 0 }
      ]
   };

   let action = deletePost(1)

   let newState = profileReducer(state, action);

   expect(newState.postsData.length).toBe(2);
});
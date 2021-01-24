import { profileAPI, usersAPI } from './../api/api';


const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   postsData: [
      { id: 1, messages: 'Hi, how are you?', likesCount: 5 },
      { id: 2, messages: 'Hi, it\'s my first post.', likesCount: 12 },
      { id: 3, messages: 'Hi, it\'s my first post.', likesCount: 12 },
      { id: 4, messages: 'Hi, it\'s my first post.', likesCount: 12 },
      { id: 5, messages: 'Hi, it\'s my first post.', likesCount: 12 }
   ],
   newPostText: '',
   profile: null,
   status: null
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            messages: state.newPostText,
            likesCount: 0
         };
         return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''
         };
      }
      case UPDATE_NEWPOST_TEXT: {
         return {
            ...state,
            newPostText: action.postText
         };
      }
      case SET_USER_PROFILE: {
         return {
            ...state, profile: action.profile
         };
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         };
      }
      default:
         return state;
   }
};

export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({ type: UPDATE_NEWPOST_TEXT, postText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => (dispatch) => {
   usersAPI.getProfile(userId)
      .then(data => {
         dispatch(setUserProfile(data));
      });
}
export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId)
      .then(response => {
         
         dispatch(setUserStatus(response.data));
      });
}
export const updateStatus = (status) => (dispatch) => {
   profileAPI.uptadeStatus(status)
      .then(response => {
         
         if (response.data.resultCode === 0){
            dispatch(setUserStatus(status));
         }
      });
}

export default profileReducer;
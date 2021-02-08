import { profileAPI, usersAPI } from './../api/api';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   postsData: [
      {id: 1, messages: "hello", likesCount: 0 }
   ],
   profile: null,
   status: null
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            messages: action.myPostProfile,
            likesCount: 0
         };
         return {
            ...state,
            postsData: [...state.postsData, newPost],
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

export const addPost = (myPostProfile) => ({ type: ADD_POST, myPostProfile })
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
import { profileAPI, usersAPI } from './../api/api';


const ADD_POST = 'social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILE';
const SET_STATUS = 'social-network/profile/SET_STATUS';
const DELETE_POST = 'social-network/profile/DELETE_POST';

let initialState = {
   postsData: [
      { id: 1, messages: "hello", likesCount: 0 }
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
      case DELETE_POST: {
         return {
            ...state, postsData: state.postsData.filter(p => p.id != action.idPost)
         };
      }
      default:
         return state;
   }
};

export const addPost = (myPostProfile) => ({ type: ADD_POST, myPostProfile })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (idPost) => ({ type: DELETE_POST, idPost })

export const getProfile = (userId) => async (dispatch) => {
   let data = await usersAPI.getProfile(userId);
   dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId);
   dispatch(setUserStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
   let response = await profileAPI.uptadeStatus(status);
   if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
   }
}

export default profileReducer;
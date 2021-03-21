import { stopSubmit } from 'redux-form';
import { authAPI } from './../api/api';

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state;
   }
};

export const setUserData = (userId, email, login, isAuth) => {
   return {
      type: SET_USER_DATA, payload: { userId, email, login, isAuth }
   }
}


export const getAuthData = () => async (dispatch) => {
   let response = await authAPI.authMe();
   if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setUserData(id, email, login, true));
   }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
   let response = await authAPI.login(email, password, rememberMe);

   if (response.data.resultCode === 0) {
      dispatch(getAuthData());
   } else {
      let messages = response.data.messages.length > 0
         ? response.data.messages[0]
         : "You filled out the form incorrectly!!!"
      dispatch(stopSubmit("login", { _error: messages }))
   }
}

export const logout = () => async (dispatch) => {
   let response = await authAPI.logout();
   
   if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
   }
}


export default authReducer;
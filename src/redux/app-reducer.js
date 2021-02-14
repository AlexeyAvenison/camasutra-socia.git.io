import { getAuthData } from './auth-reducer';

const SET_INITIALIZED_APP = 'SET_INITIALIZED_APP'

let initialState = {
   initialized: false
};

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_INITIALIZED_APP:
         return {
            ...state,
            initialized: true
         }
      default:
         return state;
   }
};

export const initializedApp = () => {
   return {
      type: SET_INITIALIZED_APP
   }
}

export const initializedData = () => (dispatch) => {
   let promise = dispatch(getAuthData());
   promise.then(() => {
      dispatch(initializedApp());
   })
}

export default appReducer;
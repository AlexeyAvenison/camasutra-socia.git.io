import { usersAPI } from "../api/api";
import { uptadeOрj } from "../utils/objHelpers";

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'social-network/users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IS_PROGRESS = 'social-network/users/TOGGLE_FOLLOWING_IS_PROGRESS';



let initialState = {
   users: [],
   pageSize: 4,
   totalCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, sub: true }
               }
               return u
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: uptadeOрj(state.users, "id", action.userId, {sub: false})
         }
      case SET_USERS: {
         return { ...state, users: action.users }
      }
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage }
      }
      case SET_TOTAL_COUNT: {
         return { ...state, totalCount: action.count }
      }
      case TOGGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching }
      }
      case TOGGLE_FOLLOWING_IS_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : [state.followingInProgress.filter(id => id != action.userId)]
         }
      }
      default:
         return state;
   }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_COUNT, count })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching })
export const toogleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IS_PROGRESS, isFetching, userId })


export const requestUsers = (currentPage, pageSize) => {
   return async (dispatch) => {
      dispatch(toggleIsFetching(true));

      let data = await usersAPI.getUsers(currentPage, pageSize);

      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
   }
}

export const onPageChanged = (pageNumber, pageSize) => {
   return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(pageNumber));

      let data = await usersAPI.onPageChanged(pageNumber, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
   }
}

export const followUnfollowToggle = async (dispatch, usersId, apiMethod, actionCreator) => {
   dispatch(toogleFollowingInProgress(true, usersId));
   let response = await apiMethod(usersId);
   if (response.data.resultCode === 0) {
      dispatch(actionCreator(usersId))
   }
   dispatch(toogleFollowingInProgress(false, usersId));
}

export const follow = (usersId) => {
   return async (dispatch) => {
      followUnfollowToggle(dispatch, usersId, usersAPI.followIsSucces.bind(usersAPI), followSuccess);
   }
}

export const unfollow = (usersId) => {
   return async (dispatch) => {
      followUnfollowToggle(dispatch, usersId, usersAPI.followIsSucces.bind(usersAPI), unfollowSuccess);
   }
}




export default usersReducer;
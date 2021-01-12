const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IS_PROGRESS = 'TOGGLE_FOLLOWING_IS_PROGRESS';



let initialState = {
   users: [   ],
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
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, sub: false }
               }
               return u
            })
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
         : [state.followingInProgress.filter(id => id != action.userId)] }
      }
      default:
         return state;
   }
}

export const follow = (userId) => ({ type: FOLLOW, userId })

export const unfollow = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_COUNT, count })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching })

export const toogleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IS_PROGRESS, isFetching, userId })


export default usersReducer;
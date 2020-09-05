const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



let initialState = {
   users: [
      // { id: 1, ava: 'https://pngimg.com/uploads/face/face_PNG5669.png', name: "Dima", location: { sity: "Minsk", country: "Belarus" }, status: "I am lookking", sub: false },
      // { id: 2, ava: 'https://pngimg.com/uploads/face/face_PNG5669.png', name: "Ivan", location: { sity: "Moscow", country: "Russia" }, status: "I am working", sub: false },
      // { id: 3, ava: 'https://pngimg.com/uploads/face/face_PNG5669.png', name: "Anna", location: { sity: "Kiev", country: "Ukraine" }, status: "I am a boss", sub: true },
      // { id: 4, ava: 'https://pngimg.com/uploads/face/face_PNG5669.png', name: "Bob", location: { sity: "Dnipro", country: "Ukraine" }, status: "I sub boss", sub: false }
   ]
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
      case SET_USERS:
         return {
            ...state,
            users: {...state, users: [...state.users, ...action.users]}
         }
      default:
         return state;
   }

}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer;
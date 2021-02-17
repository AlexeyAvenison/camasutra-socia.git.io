import { createSelector } from 'reselect'


export const getUsers = (state) => {
   return state.usersPage.users;
}

export const getPageSize = (state) => {
   return state.usersPage.pageSize;
}

export const getTotalCount = (state) => {
   return state.usersPage.totalCount;
}

export const getСurrentPage = (state) => {
   return state.usersPage.сurrentPage;
}

export const getIsFetching = (state) => {
   return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
   return state.usersPage.followingInProgress;
}
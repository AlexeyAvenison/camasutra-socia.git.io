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
   return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
   return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
   return state.usersPage.followingInProgress;
}

export const getPagePortionSize = (state) => {
   return state.usersPage.pagePortionSize;
}
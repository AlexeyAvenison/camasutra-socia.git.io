import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
      "API-KEY": "4d2cf2d1-aa6d-4471-bfce-e89bac64f124"
   }
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 4) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
      }).then(response => response.data)
   },

   onPageChanged(pageNumber, pageSize) {
      return instance.get(`users?page=${pageNumber}&count=${pageSize}`, {
      }).then(response => response.data)
   },

   unfollowIsSucces(userId) {
      return instance.delete(`follow/${userId}`)
   },

   followIsSucces(userId) {
      return instance.post(`follow/${userId}`)
   },

   getProfile(userId) {
      console.warn('Obsolete method, please use prolifeAPI')
      return profileAPI.getProfile(userId)
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/`+ userId, {
      }).then(response => response.data)
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`)
   },
   uptadeStatus(status) {
      return instance.put(`profile/status/`, {status: status})
   }
}

export const authAPI = {
   authMe() {
      return instance.get(`auth/me`).then(response => response.data)
   }
}
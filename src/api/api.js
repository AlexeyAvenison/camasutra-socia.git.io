import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
      "API-KEY": "4d2cf2d1-aa6d-4471-bfce-e89bac64f124"
   }
});

export const usersAPI = {
   getUsers (currentPage = 1, pageSize = 4) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
      }).then(response => response.data)
   },

   onPageChanged (pageNumber, pageSize) {
      return instance.get(`users?page=${pageNumber}&count=${pageSize}`, {
      }).then(response => response.data)
   }
}
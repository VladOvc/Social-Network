import * as axios from "axios";
import {setUsersProfile} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1f5434e2-19c0-479a-8c8b-cdb7c8c0f7a1"
    },
})

const instanceWp = axios.create({
    withCredentials: true,
    baseURL: 'http://my-wp/',
    // headers: {
    //     "X-WP-Nonce": "bpRestApi.nonce"
    // },
})

export const userAPI = {
    userMe (formData) {
        return instanceWp.post(`wp-json/jwt-auth/v1/token`, {formData}).then(response => {
            console.log(response)
            return response
        })
    },

    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow (userId){
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    unfollow (userId){
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    getMe (){
        return instance.get(`auth/me`).then(response => {
                return response.data
            })
    },
    getProfile (userId){
        console.log("Old version, please use profileAPI object")
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile (userId){
        return instance.get(`profile/${userId}`).then(response =>{
            return response.data
        })
    },
    getStatus (userId) {
        return instance.get(`/profile/status/` + userId).then(response =>{
            return response.data
        })
    },
    updateStatus (status) {
        return instance.put(`/profile/status`, { status: status }).then(response => {
            return response
        })
    }
}

export const loginAPI = {
    login (formData){
        return instance.post(`/auth/login`, {formData}).then(response => {
            return response
        })
    }
}




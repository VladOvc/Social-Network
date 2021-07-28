import axios from "axios";
import {profileAPI, userAPI} from "../api/api";

let ON_CHANGE_POST = "ON_CHANGE_POST";
let ADD_POST = "ADD_POST";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    posts: [
        {id: "1", message: "Idi vo Vladivastok", likesCount: "14"},
        {id: "2", message: "Ushol", likesCount: "132"},
        {id: "3", message: "Zadraste", likesCount: "47"},
    ],
    newPostText: "",
    profile: null,
    status: "1",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "5",
                message: state.newPostText,
                likesCount: "0",
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }

        case ON_CHANGE_POST:
            return {
                ...state,
                newPostText: action.message
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST})
export const onChangePost = (message) => ({type: ON_CHANGE_POST, message})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(data =>
        dispatch(setUsersProfile(data))
    );
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data =>
        dispatch(setUserStatus(data))
    )
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        }
    )
}


export default profileReducer
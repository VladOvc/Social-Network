import {loginAPI, userAPI} from "../api/api";

let SET_USER_DATA = "SET_USER_DATA"
let SET_AUTH_USER_LOGIN = "SET_AUTH_USER_LOGIN"
let SET_ME_USER_LOGIN = "SET_ME_USER_LOGIN"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

    token: null,
    user_display_name: null,
    user_email: null,
    user_nicename: null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ME_USER_LOGIN:
            return {
                ...state,
                token: action.token,
                user_display_name: action.user_display_name,
                user_email: action.user_email,
                user_nicename: action.user_nicename,
                isAuth: true
            }
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_AUTH_USER_LOGIN:
            return{
                ...state,
                userId: action.userId,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const setAuthUserLogin = (userId) => ({type:SET_AUTH_USER_LOGIN, userId})

export const setMeUserLogin = (token, user_display_name, user_email, user_nicename) => ({type:SET_ME_USER_LOGIN, token, user_display_name, user_email, user_nicename})

export const userMe = (formData) => (dispatch) => {
    userAPI.userMe(formData).then(data => {
        let {token, user_display_name, user_email, user_nicename} = data
        dispatch(setMeUserLogin(token, user_display_name, user_email, user_nicename))
    })
}

export const getMe = () => (dispatch) => {
    userAPI.getMe().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export const login = (formData) => (dispatch) => {
    loginAPI.login(formData).then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserLogin(data.data.userId))
        }
    })
}

export default authReducer
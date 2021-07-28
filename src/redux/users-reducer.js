import {userAPI} from "../api/api";

let FOLLOWED = "FOLLOWED";
let UNFOLLOWED = "UNFOLLOWED";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let TOTAL_COUNT = "TOTAL_COUNT";
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOWED:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOWED:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const followAccept = (userId) => ({type: FOLLOWED, userId })
export const unfollowAccept = (userId) => ({type: UNFOLLOWED, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalCount = (totalCount) => ({type: TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))

    return userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
    })
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    userAPI.follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followAccept(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    })
}
export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    userAPI.unfollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowAccept(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    })
}

// export const follow =

export default usersReducer
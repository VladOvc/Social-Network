import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        DialogsPage: {
            dialogs: [
                {id: '1', name: 'Alina'},
                {id: '2', name: 'Yulia'},
                {id: '3', name: 'Darina'},
            ],
            messages: [
                {id: "1", message: "Hi", whose: "you"},
                {id: "2", message: "How are you lerning?", whose: "you"},
                {id: "3", message: "Debilina.ua", whose: "me"},
            ],
            newMessageText: "",
        },
        ProfilePage: {
            posts: [
                {id: "1", message: "Idi vo Vladivastok", likesCount: "14"},
                {id: "2", message: "Ushol", likesCount: "132"},
                {id: "3", message: "Zadraste", likesCount: "47"},
            ],
            newPostText: "",
        },
    },
    _callSubscriber() {
        console.log("state change")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store
window.store = store
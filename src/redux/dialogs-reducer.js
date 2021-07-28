let ADD_MESSAGE = "ADD-MESSAGE";
let ON_CHANGE_MESSAGE = "ON-CHANGE-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: "4",
                message: state.newMessageText,
                whose: "me"
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            }

        case ON_CHANGE_MESSAGE:
            return {
                ...state,
                newMessageText: action.newText,
            }

        default:
            return state
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (message) =>
    ({type: ON_CHANGE_MESSAGE, newText: message })

export default dialogsReducer
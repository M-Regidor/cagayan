import { deleteSession, postSession } from "../utils/session_api_util"
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, receiveCurrentUser, removeCurrentUser } from "./userReducer"



export const loginUser = user => async (dispatch) => {
    const res = await postSession(user)
    
    if(res.ok){
        const data = res.json()
        sessionStorage.setItem("currentUser", JSON.stringify(data.user))
        dispatch(receiveCurrentUser(user))
    }
}


export const logoutUser = userId => async (dispatch) => {
    const res = await deleteSession()

    if (res.ok){
        sessionStorage.removeItem("currentUser")
        dispatch(removeCurrentUser(userId))
    }
}

const sessionReducer = (state = {currentUserId: null}, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState.currentUserId = action.user.id
            return newState
        case REMOVE_CURRENT_USER:
            newState.currentUserId = null;
            return newState
        default:
            return state
    }
}

export default sessionReducer

import { postUser } from "../utils/user_api_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER"

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const removeCurrentUser = userId => ({
    type: REMOVE_CURRENT_USER,
    userId
})

export const createUser = user => async (dispatch) => {
    const res = await postUser(user)

    if (res.ok) {
        const data = res.json()
        sessionStorage.setItem("currentUser", JSON.stringify(data.user));
        return dispatch(receiveCurrentUser(data.user))
    } else {
        console.log("something went wrong")
    }
}

const userReducer = (state = {}, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState
        case REMOVE_CURRENT_USER:
            delete newState[action.userId]
            return newState
        default:
            return state
    }

}

export default userReducer
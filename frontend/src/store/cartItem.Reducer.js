import { createSelector } from "reselect"
import { deleteCartItem, getCartItems, postCartItem } from "../utils/cartItem_api_util"

export const RECEIVE_CARTITEM = "RECEIVE_CARTITEM"
export const RECEIVE_CARTITEMS = "RECEIVE_CARTITEMS"
export const REMOVE_CARTITEM = "REMOVE_CARTITEM"

export const receiveCartItem = cartItem => ({
    type: RECEIVE_CARTITEM,
    cartItem
})

export const receiveCartItems = cartItems => ({
    type: RECEIVE_CARTITEMS,
    cartItems
})

export const removeCartItem = cartItemId => ({
    type: REMOVE_CARTITEM,
    cartItemId
})

export const fetchCartItems = (userId) => async(dispatch) => {
    const res = await getCartItems(userId)
    let data;

    if (res.ok){
        data = await res.json()
        dispatch(receiveCartItems(data))
    } else {
        console.log("cart items issues")
    }

}

export const addCartItem = (cartItem) => async (dispatch) =>{
    const res = await postCartItem(cartItem)
    let data;

    if (res.ok){
        data = await res.json()
        dispatch(receiveCartItem(data.cartItem))
    } else {
        console.log("add cart issue")
    }
}

export const removeItem = cartItemId => async(dispatch) => {
    const res = await deleteCartItem(cartItemId)
    let data;

    if (res.ok) {
        dispatch(removeCartItem(cartItemId))
    } else (
        console.log("something went wrong")
    )
}


const selectCartItems = state => state.cartItems

export const selectCartItemsArray = createSelector(selectCartItems, cartItem =>
    Object.values(cartItem)
)




const cartItemsReducer = (state = {}, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CARTITEM:
            newState[action.cartItem.id] = action.cartItem
            return newState
        case RECEIVE_CARTITEMS:
            return action.cartItems
        case REMOVE_CARTITEM:
            delete newState[action.cartItemId]
            return newState
        default:
            return state
    }
}

export default cartItemsReducer
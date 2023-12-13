import { createSelector } from "reselect"
import { deleteCartItem, destroyUserCart, getCartItems, postCartItem } from "../utils/cartItem_api_util"

export const RECEIVE_CARTITEM = "RECEIVE_CARTITEM"
export const RECEIVE_CARTITEMS = "RECEIVE_CARTITEMS"
export const REMOVE_CARTITEM = "REMOVE_CARTITEM"
export const REMOVE_ALL_CARTITEMS = "REMOVE_ALL_CARTITEMS"

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

export const removeAllCartItems = (emptyCart = {}) => ({
    type: REMOVE_ALL_CARTITEMS,
    emptyCart
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
    } else {
        data = res.json()
        console.log(data)
    }
}

export const checkoutUser = userId => async(dispatch) => {
    const res = await destroyUserCart(userId)
    
    if (res.ok){
        dispatch(removeAllCartItems())
    }
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
        case REMOVE_ALL_CARTITEMS:
            return action.emptyCart
        default:
            return state
    }
}

export default cartItemsReducer
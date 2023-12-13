import { crsfFetch } from "./csrf";

export const getCartItems = userId => (
    crsfFetch(`/api/users/${userId}/cart_items`)
)

export const postCartItem = cartItem => (
    crsfFetch('/api/cart_items',{
        method: "POST",
        body: JSON.stringify(cartItem)
    })
)

export const deleteCartItem = cartItemId => (
    crsfFetch(`/api/cart_items/${cartItemId}`,{
        method: "DELETE"
    })
)
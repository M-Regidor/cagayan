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

export const destroyUserCart = userId => (
    crsfFetch(`/api/users/${userId}/cart_items/checkout`,{
        method: "DELETE"
    })
)

export const updateCart = (cartItemId, quantity) => (
    crsfFetch(`/api/cart_items/${cartItemId}`, {
        method: "PATCH",
        body: JSON.stringify(quantity)
    })
)
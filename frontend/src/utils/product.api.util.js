import { crsfFetch } from "./csrf";

export const getProducts = category => {
    if (category){
        return crsfFetch(`/api/products?category=${category}`)
    } else {
        return crsfFetch("/api/products")
    }
}


export const getProduct = productId => (
    crsfFetch(`/api/products/${productId}`)
)
import { crsfFetch } from "./csrf";

export const getProducts = () => (
    crsfFetch("/api/products")
)

export const getProduct = productId => (
    crsfFetch(`/api/products/${productId}`)
)
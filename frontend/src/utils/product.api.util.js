import { crsfFetch } from "./csrf";

export const getProducts = () => (
    crsfFetch("/api/products")
)
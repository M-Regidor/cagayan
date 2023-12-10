import { crsfFetch } from "./csrf";

export const getReviews = productId => (
    crsfFetch(`/api/products/${productId}/reviews`)
)
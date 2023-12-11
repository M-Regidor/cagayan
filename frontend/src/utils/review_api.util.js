import { crsfFetch } from "./csrf";

export const getReviews = productId => (
    crsfFetch(`/api/products/${productId}/reviews`)
)

export const postReview = (review) => (
    crsfFetch(`/api/products/${review.productId}/reviews`,{
        method: "POST",
        body: JSON.stringify(review)
    })
)
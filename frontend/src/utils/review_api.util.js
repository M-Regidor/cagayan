import { crsfFetch } from "./csrf";

export const getReviews = productId => (
    crsfFetch(`/api/products/${productId}/reviews`)
)

export const getReview = reviewId => (
    crsfFetch(`/api/reviews/${reviewId}`)
)

export const postReview = (review) => (
    crsfFetch(`/api/reviews`,{
        method: "POST",
        body: JSON.stringify(review)
    })
)

export const deleteReview = review => (
    crsfFetch(`/api/reviews/${review.id}`,{
        method: "DELETE",
    })
)

export const updateReview = review => (
    crsfFetch(`/api/reviews/${review.id}`, {
        method: "PATCH",
        body: JSON.stringify(review)
    })
)
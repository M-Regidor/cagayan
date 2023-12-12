import { deleteReview, getReview, getReviews, postReview, updateReview } from "../utils/review_api.util"
import { createSelector } from 'reselect';



export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const selectReview = reviewId => state => state.reviews[reviewId]

export const selectReviews = state => state.reviews

export const selectReviewsArray = createSelector(selectReviews, review => 
    Object.values(review)
);

export const fetchReviews = productId => async(dispatch) => {
    const res = await getReviews(productId);
    let data;

    if (res.ok){
        data = await res.json()
        dispatch(receiveReviews(data))
    } else {
        data = await res.json()
    }
}

export const fetchReview = reviewId => async(dispatch) => {
    const res = await getReview(reviewId);
    let data;

    if (res.ok){
        data = await res.json()
        dispatch(receiveReview(data.review))
    }
}

export const createReview = (review, productId) => async(dispatch) =>{
    const res = await postReview(review, productId);
    let data;

   
    if (res.ok){
        data = await res.json()
        dispatch(receiveReview(data.review))
    } else {
        data = await res.json()
        throw data
    }
}

export const editReview = (review) => async(dispatch) => {
    const res = await updateReview(review)
    let data;

    if (res.ok){
        data = await res.json()
        dispatch(receiveReview(data))
    } else {
        data = await res.json()
        throw data
    }
}

export const userReviewDelete = review => async(dispatch) => {
    console.log(review)
    const res = await deleteReview(review)

    if (res.ok){
        dispatch(removeReview(review.id))
    }
}

const reviewReducer = (state = {}, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState
        default:
            return state
    }
}

export default reviewReducer
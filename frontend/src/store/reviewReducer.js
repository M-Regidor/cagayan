import { getReviews, postReview } from "../utils/review_api.util"
import { createSelector } from 'reselect';



export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

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

export const createReview = review => async(dispatch) =>{
    const res = await postReview(review);
    let data;

   
    if (res.ok){
        data = await res.json()
        dispatch(receiveReview(data.review))
    } else {
        data = await res.json()
        
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
        default:
            return state
    }
}

export default reviewReducer
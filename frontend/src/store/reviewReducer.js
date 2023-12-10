import { getReviews } from "../utils/review_api.util"


export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const fetchReviews = productId => async(dispatch) => {
    const res = await getReviews(productId);
    let data;

    if (res.ok){
        data = await res.json()
        dispatch(receiveReviews(data))
    } else {
        console.log("something went wrong")
    }
}

const reviewReducer = (state = {}, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return {...newState, ...action.reviews}
        default:
            return state
    }
}

export default reviewReducer
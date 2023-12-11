import { useDispatch, useSelector } from "react-redux"
import { fetchReviews, selectReviewsArray } from "../../store/reviewReducer"
import { useEffect } from "react"
import "./ReviewIndex.css"
import ReviewIndexItem from "./ReviewIndexItem"
import { useNavigate } from "react-router-dom"

const ReviewIndex = ({productId}) => {
    const dispatch = useDispatch()
    const reviews = useSelector(selectReviewsArray)
    const navigate = useNavigate()

    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })

    useEffect(()=> {
        dispatch(fetchReviews(productId))
    },[productId,dispatch])


    const handleClick = () => {
        if (currentUser){
            navigate(`/products/${productId}/create-review`)
        } else {
            navigate("/login")
        }
    }


    return (
        <div className="review-container">
            <div>
                <h3>Review this product</h3>
                <p>Share your thoughts with other customers</p>
                <button onClick={handleClick} >Write a customer review</button>
            </div>
            <ul className="review-details">
                <h2>Customer Reviews</h2>
                {reviews.map(review => 
                    <ReviewIndexItem
                        key={review.id}
                        review={review}
                    />    
                )}
            </ul>
        </div>
     

       
    )
}

export default ReviewIndex
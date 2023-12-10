import { useDispatch, useSelector } from "react-redux"
import { fetchReviews, selectReviewsArray } from "../../store/reviewReducer"
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import "./ReviewIndex.css"
import { formatDate } from "../../utils/dateUtil"

const ReviewIndex = ({productId}) => {
    const dispatch = useDispatch()
    const reviews = useSelector(selectReviewsArray)


    useEffect(()=> {
        dispatch(fetchReviews(productId))
    },[productId,dispatch])

    return (
        <div>
            <h2>Customer Reviews</h2>
            <ul className="review-details">
                {reviews.map(review => 
                    <li key={review.id}>
                        <div className="review-details-author">
                            <FontAwesomeIcon className="review-author-icon" icon={faCircleUser}/>
                            <h3>{review.authorName}</h3>
                        </div>
                        <p>Rating: {review.rating} {review.title}</p>
                        <p>Reviewed on {formatDate(review.createdAt)}</p>
                        <p>{review.body}</p>
                        <button>Helpful</button>
                    </li>    
                )}
            </ul>
        </div>
       
    )
}

export default ReviewIndex
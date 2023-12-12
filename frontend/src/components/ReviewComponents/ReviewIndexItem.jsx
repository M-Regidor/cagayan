import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { formatDate } from "../../utils/dateUtil"
import "./ReviewIndexItem.css"
import { useDispatch } from 'react-redux'
import { userReviewDelete } from '../../store/reviewReducer'
import { useNavigate } from 'react-router-dom'


const ReviewIndexItem = ({review, currentUser}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <li key={review.id}>
            <div className="review-details-author">
                <FontAwesomeIcon className="review-author-icon" icon={faCircleUser}/>
                <h3>{review.authorName}</h3>
            </div>
            <p>Rating: {review.rating} {review.title}</p>
            <p>Reviewed on {formatDate(review.createdAt)}</p>
            <p>{review.body}</p>
            <div className='review-item-buttons'>
                {currentUser? (
                    <>
                        <button onClick={()=> dispatch(userReviewDelete(review))}>Delete</button>
                        <button onClick={() => navigate(`/products/${review.productId}/edit-review/${review.id}`)}>Edit</button>
                    </>
                ):(
                    <button>Helpful</button>
                    )}
            </div>
    </li> 
    )
}

export default ReviewIndexItem
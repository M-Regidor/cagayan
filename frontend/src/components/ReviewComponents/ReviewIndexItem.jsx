import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { formatDate, rating } from "../../utils/dateUtil"
import "./ReviewIndexItem.css"
import { useDispatch } from 'react-redux'
import { userReviewDelete } from '../../store/reviewReducer'
import { useNavigate } from 'react-router-dom'


const ReviewIndexItem = ({review, currentUser}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isCurrentUser = currentUser && currentUser.id === review.authorId;


    return (
        <li key={review.id}>
            <div className="review-details-author">
                <FontAwesomeIcon className="review-author-icon" icon={faCircleUser}/>
                <h3>{review.name}</h3>
            </div>
            <p>{rating(review.rating)} {review.title}</p>
            <p>Reviewed on {formatDate(review.createdAt)}</p>
            <p className='review-body'>{review.body}</p>
            <div className='review-item-buttons'>
                {isCurrentUser ? (
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
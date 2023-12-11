import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { formatDate } from "../../utils/dateUtil"
import "./ReviewIndexItem.css"


const ReviewIndexItem = ({review}) => {

    return (
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
    )
}

export default ReviewIndexItem
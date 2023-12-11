import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { fetchProduct, selectProduct } from "../../store/productReducer";
import { createReview } from "../../store/reviewReducer";
import "./ReviewForm.css"

const ReviewForm = () => {
    const {productId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector(selectProduct(productId));

    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })

    const authorId = currentUser.id

    useEffect(()=>{
        if (!currentUser) {
            navigate("/")
        } else {
            dispatch(fetchProduct(productId))
        }
    },[dispatch,productId,currentUser,navigate])

    const [rating, setRating] = useState(null);
    const [body, setBody] = useState("")
    const [title, setTitle] = useState("")
    const [authorName, setAuthorName] = useState(currentUser.name)

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value, 10));
    };

    const handleSubmit = e => {
        e.preventDefault()
        const payload = {
            title,
            author_name: authorName,
            body,
            rating,
            author_id: authorId,
            productId
        }
   
        dispatch(createReview(payload))

    }

    if (product){
        return (
            <div className="create-review-container">
                <form onSubmit={handleSubmit}>
                    <h2>Create Review</h2>
                    <div className="create-review-product-details">
                        <img src={product.imgUrls[2]} alt="" />
                        <p>{product.name}</p>
                    </div>
                    <label>
                        <h3>Overall rating</h3>
                        <input
                            type="radio"
                            name="rating"
                            value={1}
                            checked={rating === 1}
                            onChange={handleRatingChange}
                            />{' '}
                            1
                        <input
                            type="radio"
                            name="rating"
                            value={2}
                            checked={rating === 2}
                            onChange={handleRatingChange}
                            />{' '}
                            2
                        <input
                            type="radio"
                            name="rating"
                            value={3}
                            checked={rating === 3}
                            onChange={handleRatingChange}
                            />{' '}
                            3
                        <input
                            type="radio"
                            name="rating"
                            value={4}
                            checked={rating === 4}
                            onChange={handleRatingChange}
                            />{' '}
                            4
                        <input
                            type="radio"
                            name="rating"
                            value={5}
                            checked={rating === 5}
                            onChange={handleRatingChange}
                            />{' '}
                            5
                        </label>
                        <label>
                            <h3>Headline</h3>
                            <input 
                            type="text"
                            placeholder="What about this product stuck out to you the most"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            />
                        </label>
                        <label>
                            <h3>add a written review</h3>
                            <textarea 
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            ></textarea>
                        </label>
                        <label>
                            <h3>Choose your public name</h3>
                            <p>{"This is how you'll appear to other customers"}</p>
                            <div>
                                <FontAwesomeIcon className="review-author-icon" icon={faCircleUser}/>
                                <input
                                type="text"
                                value={authorName}
                                onChange={e => setAuthorName(e.target.value)}
                                />
                            </div>
                        </label>
                        <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm
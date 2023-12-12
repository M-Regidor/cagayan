import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { fetchProduct, selectProduct } from "../../store/productReducer";
import { createReview, editReview, fetchReview, selectReview } from "../../store/reviewReducer";
import "./ReviewForm.css"

const ReviewForm = () => {
    const {productId, reviewId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector(selectProduct(productId));
    let review = useSelector(selectReview(reviewId))
    
    const formType = review ? "Edit Review" : "Create Review"

    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })
    
    if (formType === "Create Review"){
        review = {
            title: "",
            body: "",
            author_name: currentUser.name,
            authorId: currentUser.id,
            rating: null,
            productId,
        }
    }
    // console.log(review)

    useEffect(()=>{
        if (!currentUser) {
            navigate("/")
        } else {
            dispatch(fetchProduct(productId))
        }
    },[dispatch,productId,currentUser,navigate])

    useEffect(()=> {
        if (reviewId){
            dispatch(fetchReview(reviewId))
        }
    }, [reviewId,dispatch])


    const [rating, setRating] = useState(review.rating);
    const [body, setBody] = useState(review.body)
    const [title, setTitle] = useState(review.title)
    const [authorName, setAuthorName] = useState(review.authorName)
    const [authorId, setAuthorId] = useState(review.authorId)
    const [errors, setErrors] = useState({})

    const handleError = field => {
        switch (field) {
            case "rating":
                if (errors.rating){
                    return <p>{`! ${errors.rating}`}</p>
                }
                break
            case "title":
                if (errors.title){
                    return <p>{`! ${errors.title}`}</p>
                }
                break
            case "body":
                if (errors.body){
                    return <p>{`! written review ${errors.body}`}</p>
                }
                break
            case "name":
                if (errors.author_name){
                    return <p>{`! ${errors.author_name}`}</p>
                }
                break
            default:
                break;
        }
    }

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value, 10));
    };

    const handleSubmit = e => {
        e.preventDefault()
        review = {
            ...review, 
            rating, 
            body,
            title,
            author_name: authorName,
            author_id: authorId
        }
        console.log(review)
 
        if (formType === "Create Review"){
            dispatch(createReview(review)).then(() => {
                navigate(`/products/${productId}`);
            }).catch(msg => {
                console.log(msg)
                setErrors(msg);
            });
        } else {
            dispatch(editReview(review)).then(() => {
                navigate(`/products/${productId}`);
            }).catch(msg => {
                console.log(msg)
                setErrors(msg);
            });
        }
    }

    if (product){
        return (
            <div className="create-review-container">
                <div className="create-review-form">
                    <h2>{formType}</h2>
                    <div className="create-review-product-details">
                        <img src={product.imgUrls[2]} alt="" />
                        <p>{product.name}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                            {handleError("rating")}
                            <label className="headline">
                                <h3>Headline</h3>
                                <input className="create-headline-input"
                                type="text"
                                placeholder="What about this product stuck out to you the most"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                />
                            </label>
                                {handleError("title")}
                            <label>
                            <h3>{formType === "Edit Review" ? "Edit written review" : "Add written review"}</h3>
                                <textarea className="create-body-input"
                                value={body}
                                onChange={e => setBody(e.target.value)}
                                ></textarea>
                            </label>
                                {handleError("body")}
                            <label>
                                <h3>Choose your public name</h3>
                                <p>{"This is how you'll appear to other customers"}</p>
                                <div className="create-display-name">
                                    <FontAwesomeIcon className="create-author-icon" icon={faCircleUser}/>
                                    <input className="create-display-name-input"
                                    type="text"
                                    value={authorName}
                                    onChange={e => setAuthorName(e.target.value)}
                                    />
                                </div>
                                    {handleError("name")}
                            </label>
                            <div>
                                <button>Submit</button>
                            </div>
                    </form>
                </div>
                </div>

        )
    }
}

export default ReviewForm
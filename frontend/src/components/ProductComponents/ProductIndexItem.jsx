import { Link } from "react-router-dom"
import "./ProductIndexItem.css"
import { rating } from "../../utils/dateUtil"
import { useDispatch, useSelector } from "react-redux"
import { addCartItem } from "../../store/cartItem.Reducer"


const ProductIndexItem = ({product}) => {
    const dispatch = useDispatch()
    const currentDate = new Date()
    const futureDate = new Date()
    const randomDays = Math.floor(Math.random() * 6) + 5;

    futureDate.setDate(currentDate.getDate() + randomDays)

    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })

    const formattedDate = futureDate.toLocaleDateString("en-US",{
        month: "long",
        day: "numeric"
    })

    const handleClick = () => {
        const payload = {
            product_id: product.id,
            user_id: currentUser.id,
            quantity: 1
        }

        dispatch(addCartItem(payload))
    }
    
    return (
        <li className="product-info-container" key={product.id}>
            <Link to={`/products/${product.id}`} className="product-info-top">                            
                <img src={product.imgUrls} alt="" />
            </Link>
            <div className="product-info-bottom">
                <h3><Link className="product-title" to={`/products/${product.id}`}>{product.name}</Link></h3>
                <div>
                    <div className="product-category">{product.category}</div>
                    <div className="product-rating">{rating(product.rating)}</div> 
                    <div className="product-price">
                        <p>$</p>
                        <h3>{product.price}</h3>
                    </div>
                    <div className="product-delivery">estimated delivery date: {formattedDate}</div>
                </div>
                <div className="product-cart">
                    <button onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
        </li>
    )
}

export default ProductIndexItem
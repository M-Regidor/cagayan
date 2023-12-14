import { Link } from "react-router-dom"
import "./ProductIndexItem.css"
import { rating } from "../../utils/dateUtil"
const ProductIndexItem = ({product}) => {
    const currentDate = new Date()
    const futureDate = new Date()
    const randomInt = Math.floor(Math.random() * 5) + 1;
    const randomDays = Math.floor(Math.random() * 6) + 5;

    futureDate.setDate(currentDate.getDate() + randomDays)

    const formattedDate = futureDate.toLocaleDateString("en-US",{
        month: "long",
        day: "numeric"
    })
    
    return (
        <li className="product-info-container" key={product.id}>
            <Link to={`/products/${product.id}`} className="product-info-top">                            
                <img src={product.imgUrls} alt="" />
            </Link>
            <div className="product-info-bottom">
                <Link className="product-title" to={`/products/${product.id}`}>{product.name}</Link>
                <div className="product-category">{product.category}</div>
                <div className="product-rating">{rating(randomInt)}</div> 
                <div className="product-price">${product.price}</div>
                <div className="product-delivery">estimated delivery date: {formattedDate}</div>
            </div>
        </li>
    )
}

export default ProductIndexItem
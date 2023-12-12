import { Link } from "react-router-dom"
import "./ProductIndexItem.css"
const ProductIndexItem = ({product}) => {

    return (
        <li className="product-info-container" key={product.id}>
            <Link to={`/products/${product.id}`} className="product-info-top">                            
                <img src={product.imgUrls} alt="" />
            </Link>
            <div className="product-info-bottom">
                <Link className="product-title" to={`/products/${product.id}`}>{product.name}</Link>
                <div className="product-category">{product.category}</div>
                <div className="product-rating">Rating: {product.rating}</div> 
                <div className="product-price">${product.price}</div>
                <div className="product-delivery">estimated delivery date: Someday or never</div>
            </div>
        </li>
    )
}

export default ProductIndexItem
import { Link } from "react-router-dom"

const ProductIndexItem = ({product}) => {

    return (
        <li className="product-info-container" key={product.id}>
            <div className="product-info-top">                            
                <Link to={`products/${product.id}`} > 
                    <div className="product-img"><img src={product.imgUrls} alt="" /></div>
                </Link>
            </div>
            <div className="product-info-bottom">
                <div className="product-name"><Link to={`products/${product.id}`}>{product.name}</Link></div>
                <div className="product-category">{product.category}</div>
                <div className="product-rating">Rating: {product.rating}</div> 
                <div className="product-price">${product.price}</div>
                <div className="product-delivery">estimated delivery date: Someday or never</div>
            </div>
        </li>
    )
}

export default ProductIndexItem
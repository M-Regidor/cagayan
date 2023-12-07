import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchProducts, selectProductsArray } from "../store/productReducer"
import { useEffect } from "react"
import "./ProductIndex.css"



const ProductIndex = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectProductsArray)
    useEffect(()=> {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div className="product-background">
            <ul className="product-container">
                {products.map(product => 
                    <li className="product-info-container" key={product.id}>
                        <div className="product-info-top">                            
                            <Link to={`/${product.id}`} > 
                                <div className="product-img"><img src={product.imgUrl} alt="" /></div>
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
                )}
            </ul>
        </div>
    )
}
export default ProductIndex
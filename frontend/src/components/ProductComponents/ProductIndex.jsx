import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, filterProducts, selectProductsArray } from "../../store/productReducer"
import { useEffect } from "react"
import "./ProductIndex.css"
import ProductIndexItem from "./ProductIndexItem"
import { selectReviewsArray } from "../../store/reviewReducer"



const ProductIndex = ({category, keyword}) => {
    const dispatch = useDispatch()
    const products = useSelector(selectProductsArray)
    
    let title;
    
    if (category) {
        title = category
    } else if (keyword){
        title = `Results for ${keyword}` 
    } else {
        title = "All Products"
    }

    useEffect(()=> {
        if (category){
            dispatch(fetchProducts(category))
        } else if (keyword){
            dispatch(filterProducts(keyword))
        } else {
            dispatch(fetchProducts())
        }
    }, [dispatch, category,keyword])

    return (
        <div className="product-background">
            <div className="product-index-title">
                <h2>{title}</h2>
            </div>
            <ul className="product-container">
                {products.map(product => (
                    <ProductIndexItem
                        key={product.id}
                        product={product}
                    />
                ))}
            </ul>
        </div>
    )
}
export default ProductIndex
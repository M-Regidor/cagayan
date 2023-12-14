import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, filterProducts, selectProductsArray } from "../../store/productReducer"
import { useEffect } from "react"
import "./ProductIndex.css"
import ProductIndexItem from "./ProductIndexItem"



const ProductIndex = ({category, keyword}) => {
    const dispatch = useDispatch()
    const products = useSelector(selectProductsArray)

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
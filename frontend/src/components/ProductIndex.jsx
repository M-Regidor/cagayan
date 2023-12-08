import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, selectProductsArray } from "../store/productReducer"
import { useEffect } from "react"
import "./ProductIndex.css"
import ProductIndexItem from "./ProductIndexItem"



const ProductIndex = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectProductsArray)
    useEffect(()=> {
        dispatch(fetchProducts())
    }, [dispatch])

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
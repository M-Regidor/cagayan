import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, selectProductsArray } from "../../store/productReducer"
import { useEffect } from "react"
import "./ProductIndex.css"
import ProductIndexItem from "./ProductIndexItem"



const ProductIndex = ({category}) => {
    const dispatch = useDispatch()
    const products = useSelector(selectProductsArray)

    useEffect(()=> {
        if (category){
            dispatch(fetchProducts(category))
        } else {
            dispatch(fetchProducts())
        }
    }, [dispatch, category])

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
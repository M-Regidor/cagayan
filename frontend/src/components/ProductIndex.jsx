import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, selectProductsArray } from "../store/productReducer"
import { useEffect } from "react"


const ProductIndex = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectProductsArray)
   
    useEffect(()=> {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <ul>
            {products.map(product => 
                <li key={product.id}>
                    <p>Name {product.name}</p> 
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p>{product.rating}</p>
                </li>
            )}
        </ul>
    )
}
export default ProductIndex
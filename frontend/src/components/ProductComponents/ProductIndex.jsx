import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, filterProducts, selectProductsArray } from "../../store/productReducer"
import { useEffect, useState } from "react"
import "./ProductIndex.css"
import ProductIndexItem from "./ProductIndexItem"




const ProductIndex = ({category, keyword}) => {
    const dispatch = useDispatch()
    let products = useSelector(selectProductsArray)
    const [loading, setLoading] = useState(null)
    
    const shuffleProducts = (arr) => {
        return arr.sort(()=> Math.random() - 0.5);
    }

    if (!category && !keyword) products = shuffleProducts(products)

    let title;
    
    if (category) {
        title = category
    } else if (keyword){
        title = `Results for ${keyword}` 
    } else {
        title = "All Products"
    }

    useEffect(()=> {
        setLoading(true)

        if (category){
            dispatch(fetchProducts(category)).finally(() => setLoading(false))
        } else if (keyword){
            dispatch(filterProducts(keyword)).finally(() => setLoading(false))
        } else {
            dispatch(fetchProducts()).finally(() => setLoading(false))
        }
    }, [dispatch, category,keyword])


        return (
            <div className="product-background">
                {!loading ? 
                <div className="product-index-container">
                    <h2>{title}</h2>
                    {products.length === 0 ? <h3>Sorry nothing found for {keyword}</h3> : null}
                    <ul className="product-container">
                        {products.map(product => (
                            <ProductIndexItem
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </ul>
                </div>
                :
                <h2>loading...</h2>
                }
            </div>
        )
}
export default ProductIndex
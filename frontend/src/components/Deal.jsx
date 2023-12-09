import { Link } from "react-router-dom"
import "./Deal.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct, selectProduct } from "../store/productReducer"
import { useEffect } from "react"


const DealComponent = ({deal}) => {
    const dispatch = useDispatch()
    const dealId = {
        "Hot Deals": 1,
        "You might like": 5,
        "Save on": 6,
        "Trending": 20
    }
    const productId = dealId[deal]
    
    const product = useSelector(selectProduct(productId))

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[dispatch, productId, deal])

    if (product){
        return (
            <div className="deal-container">
                <h3>{deal}</h3>
                <Link className="deal-info" to={`products/${product.id}`}>
                    <img src={product.imgUrls[2]} alt=""/>
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                </Link>
                <Link>See more</Link>
            </div>
        )
    }
}

export default DealComponent
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProduct, selectProduct } from "../../store/productReducer"
import "./ProductShow.css"
import ReviewIndex from "../ReviewComponents/ReviewIndex"
import { addCartItem } from "../../store/cartItem.Reducer"




const ProductShow = () => {
    const dispatch = useDispatch()
    const {productId} = useParams()
    const product = useSelector(selectProduct(productId))

    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[dispatch, productId])
    
    const handleClick = () => {
        const payload = {
            product_id: productId,
            user_id: currentUser.id,
            quantity: 1
        }

        dispatch(addCartItem(payload))
    }
    
    if (product){
        return (
            <div className="show-container">
                <div className="show-ad-container">
                
                </div>
                <div className="show-details-container">
                    <div className="show-details-left">
                        <div className="show-img-container">
                            <div className="show-img-main"><img src={product.imgUrls[0]} alt="" /> </div>
                            <div className="show-img-sub-container">
                                <div className="show-img-sub">
                                    <img src={product.imgUrls[0]} alt="" />
                                </div>
                                <div className="show-img-sub">
                                    <img src={product.imgUrls[1]} alt="" />
                                </div>
                                <div className="show-img-sub">
                                    <img src={product.imgUrls[2]} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="show-details-middle">
                            <div className="show-product-details">
                                <div className="show-details-title">{product.name}</div>
                                <div className="show-details-price">
                                    ${product.price} <br />
                                    Rating: {product.rating}
                                </div>
                                <div className="show-details-description">
                                    About this item <br/>{product?.description}
                                </div>
                            </div>
                    </div>
                    <div className="show-details-right">
                        <div className="show-buy-container">
                            <div className="show-buy-menu-main">
                                <p>${product?.price}</p>
                                <div className="show-buy-buttons">
                                    <button 
                                    className="show-buy-cart"
                                    onClick={handleClick}
                                    >Add to Cart</button>
                                    <button className="show-buy-now">Buy Now</button>
                                </div>
                            </div>
                            <div className="show-buy-menu-sub"></div>
                        </div>
                    </div>
                </div>
                <div className="show-reviews-container">
                    <ReviewIndex productId={product.id}/>
                </div>
            </div>
        )
    }
}

export default ProductShow
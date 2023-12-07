import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProduct, selectProduct } from "../store/productReducer"
import "./ProductShow.css"


const ProductShow = () => {
    const dispatch = useDispatch()
    const {productId} = useParams()
    const product = useSelector(selectProduct(productId))

    const imgOne = product?.imgUrls[0]
    const imgTwo = product?.imgUrls[1]
    const imgThree = product?.imgUrls[2]

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[dispatch, productId])
    

    return (
        <div className="show-container">
            <div className="show-ad-container">
            
            </div>
            <div className="show-details-container">
                <div className="show-details-left">
                    <div className="show-img-container">
                        <div className="show-img-main"><img src={imgOne} alt="" /> </div>
                        <div className="show-img-sub-container">
                            <div className="show-img-sub">
                                <img src={imgOne} alt="" />
                            </div>
                            <div className="show-img-sub">
                                <img src={imgTwo} alt="" />
                            </div>
                            <div className="show-img-sub">
                                <img src={imgThree} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="show-details-middle">
                        <div className="show-product-details">
                            <div className="show-details-title">{product?.name}</div>
                            <div className="show-details-price">
                                ${product?.price} <br />
                                Rating: {product?.rating}
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
                                <button className="show-buy-cart">Add to Cart</button>
                                <button className="show-buy-now">Buy Now</button>
                            </div>
                        </div>
                        <div className="show-buy-menu-sub"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductShow
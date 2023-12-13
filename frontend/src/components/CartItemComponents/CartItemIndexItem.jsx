import { useDispatch, useSelector } from "react-redux"
import { fetchProduct, selectProduct } from "../../store/productReducer"
import { useEffect } from "react"
import "./CartItemIndexItem.css"
import { removeItem } from "../../store/cartItem.Reducer"

const CartItemIndexItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const product = useSelector(selectProduct(cartItem.productId))


    useEffect(()=> {
        dispatch(fetchProduct(cartItem.productId))
    },[cartItem, dispatch])

    if (product) {
        return (
          <li className="cart-item">
            <img className="cart-item-image" src={product.imgUrls[1]} alt="" />
            <div className="cart-item-details">
                <h2>{product.name}</h2>
                <div className="cart-item-menu">
                    <label>QTY:</label>
                        <select id="quantity" name="quantity">
                            {/* <option value="1">{"0 (delete)"}</option> */}
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    <a href="#" onClick={() => dispatch(removeItem(cartItem.id))}>delete</a>
                </div>
            </div>
            <h2>${product.price}</h2>
          </li>
        )
    }
}

export default CartItemIndexItem
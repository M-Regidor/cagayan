import { useDispatch, useSelector } from "react-redux"
import { fetchProduct, selectProduct } from "../../store/productReducer"
import { useEffect, useState } from "react"
import "./CartItemIndexItem.css"
import { removeItem, updateQuantity } from "../../store/cartItem.Reducer"

const CartItemIndexItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const product = useSelector(selectProduct(cartItem.productId))
    const [quantity, setQuantity] = useState(cartItem.quantity)

    useEffect(()=> {
        dispatch(fetchProduct(cartItem.productId))
    },[cartItem, dispatch])

    const handleQuantityChange = e => {
        const quantity = e.target.value
        setQuantity(quantity)
        dispatch(updateQuantity(cartItem.id, {quantity}))
      };

    if (product) {
        return (
          <li className="cart-item">
            <img className="cart-item-image" src={product.imgUrls[1]} alt="" />
            <div className="cart-item-details">
                <h2>{product.name}</h2>
                <div className="cart-item-menu">
                <label>QTY:</label>
                    <select
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    >
                    {[1, 2, 3, 4, 5, 6].map((value) => (
                        <option key={value} value={value}>
                        {value}
                        </option>
                    ))}
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
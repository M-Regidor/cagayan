import { useDispatch, useSelector } from "react-redux"
import Header from "../Header"
import { fetchCartItems, selectCartItemsArray } from "../../store/cartItem.Reducer"
import { useEffect } from "react"
import CartItemIndexItem from "./CartItemIndexItem"
import "./CartItemIndex.css"

const CartItemIndex = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItemsArray)
    console.log(cartItems)

    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })


    useEffect(()=> {
        dispatch(fetchCartItems(currentUser.id))
    },[currentUser.id, dispatch])

    return (
        <>
            <Header/>
            <div className="cart-index-container">
                <ul className="cart-item-container">
                    <h2>Shopping Cart</h2>
                    {cartItems.map(cartItem =>
                    <CartItemIndexItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />    
                    )}
                </ul>
                <div className="cart-total">
                        <p>Subtotal</p>
                </div>
            </div>
        </>
    )
}

export default CartItemIndex
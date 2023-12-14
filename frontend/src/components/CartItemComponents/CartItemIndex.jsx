import { useDispatch, useSelector } from "react-redux"
import Header from "../Header"
import { checkoutUser, fetchCartItems, selectCartItemsArray } from "../../store/cartItem.Reducer"
import { useEffect } from "react"
import CartItemIndexItem from "./CartItemIndexItem"
import "./CartItemIndex.css"

const CartItemIndex = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItemsArray)
    const sumTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalToDollars = sumTotal.toFixed(2)

    const cartTitle = cartItems.length > 0 ?  "Shopping Cart" : "Your Cagayan Cart is empty"
    
    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })
    
    useEffect(()=> {
        if (currentUser){
            dispatch(fetchCartItems(currentUser.id))
        }
    },[currentUser, dispatch])
    

    return (
        <>
            <Header/>
            <div className="cart-index-container">
                <ul className="cart-item-container">
                    <h2>{cartTitle}</h2>
                    {cartItems.map(cartItem =>
                    <CartItemIndexItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />    
                    )}
                </ul>
                <div className="cart-total">
                        <p>Subtotal ({cartQuantity} items) ${totalToDollars}</p>
                        <button onClick={()=> dispatch(checkoutUser(currentUser.id))}>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CartItemIndex
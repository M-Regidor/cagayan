import { useDispatch, useSelector} from "react-redux"
import { Link} from "react-router-dom"
import { logoutUser } from "../store/sessionReducer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import { fetchCartItems, selectCartItemsArray } from "../store/cartItem.Reducer"
import { useEffect } from "react"



const Header = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItemsArray)
    const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);


    
    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })
    
    useEffect(()=> {
        dispatch(fetchCartItems(currentUser.id))
    },[dispatch, currentUser.id])

    return (
        <header className="navbar-container">
            <nav className="navbar-top">
                <div className="navbar-top-left">
                    <Link className="home" to={"/"}>
                        <img className="logo"src="/assets/logo.png" alt="logo" />
                    </Link>
                </div>

                <div className="navbar-top-middle">
                    <form onSubmit={e => e.preventDefault()}>
                        <input type="text"/>
                        <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                    </form>
                </div>

                <div className="navbar-top-right">
                    {currentUser ? (
                            <ul className="user">
                                <li className="user-icon"></li>                 
                                <li><FontAwesomeIcon icon={faUser}/>Hello,<br/> {currentUser.name}
                                    <div className="user-menu">
                                        <Link onClick={() => dispatch(logoutUser(currentUser.id))}>Logout</Link>
                                    </div>
                                </li>
                            </ul> 
                    ): (
                        <ul className="new-menu">              
                            <li>
                                <Link className="new-menu-login" to={"/login"}>Login</Link>
                                <div>
                                    <p>{"Don't have an account?"} <Link to={"/signup"}>Start here</Link></p>
                                </div>
                            </li>
                        </ul> 
                    )}
                    <div className="cart-container">
                        <Link to={"/cart"} className="cart-icon">
                            <FontAwesomeIcon icon={faCartShopping}/>
                        </Link>
                        <p>{cartQuantity}</p>
                    </div>
                </div>
            </nav>
            <nav className="navbar-bottom">
                <div className="navbar-bottom-menu">
                    <Link className="navbar-bottom-button" to={'/products'}>All</Link>
                    <Link className="navbar-bottom-button">Home</Link>
                    <Link className="navbar-bottom-button">Electronics</Link>
                    <Link className="navbar-bottom-button">Clothing</Link>
                    <Link className="navbar-bottom-button">Health and Beauty</Link>
                </div>
            </nav>
        </header>
    )
 }
 export default Header
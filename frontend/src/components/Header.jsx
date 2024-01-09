import { useDispatch, useSelector} from "react-redux"
import { Link, useNavigate} from "react-router-dom"
import { logoutUser } from "../store/sessionReducer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import { fetchCartItems, removeAllCartItems, selectCartItemsArray } from "../store/cartItem.Reducer"
import { useEffect, useState } from "react"



const Header = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItemsArray)
    const navigate = useNavigate()
    let cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const [keyword, setKeyword] = useState("") 
    
    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })

    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/search/${keyword}`)
        setKeyword("")
    }

    
    useEffect(()=> {
        if (currentUser) {
            dispatch(fetchCartItems(currentUser.id))
        }
    },[dispatch, currentUser])

    const handleLogout = () => {
        dispatch(logoutUser(currentUser.id))
        dispatch(removeAllCartItems(currentUser.id))
    }

    return (
        <header className="navbar-container">
            <nav className="navbar-top">
                <div className="navbar-top-left">
                    <Link className="home" to={"/"}>
                        <img className="logo"src="/assets/logo.png" alt="logo" />
                    </Link>
                </div>

                <div className="navbar-top-middle">
                    <div className="search-bar-container">
                        <form onSubmit={handleSubmit}>
                            <input
                            placeholder="Search Cagayn"
                            type="text"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            />
                            <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        </form>
                    </div>
                </div>

                <div className="navbar-top-right">
                    {currentUser ? (
                            <ul className="user">
                                <li className="user-icon"></li>                 
                                <li><FontAwesomeIcon icon={faUser}/>Hello,<br/> {currentUser.name}
                                    <div className="user-menu">
                                        <Link onClick={handleLogout}>Logout</Link>
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
                    <Link className="navbar-bottom-button" to={"/category/Home"}>Home</Link>
                    <Link className="navbar-bottom-button" to={"/category/Electronics"}>Electronics</Link>
                    <Link className="navbar-bottom-button" to={"/category/Clothing"}>Clothing</Link>
                    <Link className="navbar-bottom-button" to={"/category/Health"}>Health and Beauty</Link>
                </div>
            </nav>
        </header>
    )
 }
 export default Header
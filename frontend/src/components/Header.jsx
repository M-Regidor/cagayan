import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logoutUser } from "../store/sessionReducer"
import
import "./Header.css"

 

 const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })
    

    return (
        <nav className="header">
            <Link className="home" to={"/"}>
                <h1>CAGAYAN</h1>
            </Link>
            <div className="options">
                {currentUser ? (
                    <ul>
                        <li><Link>Hello,<br />{currentUser.name}</Link><FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#000000",}} /></li> 
                        <li><Link>Logout</Link></li>
                    </ul>
                    
                ): (
                    <>
                        <button onClick={() => navigate("signup")}>Sign up</button>
                        <button onClick={() => navigate("login")}>login</button>
                    </> 
                )}
                <p>Cart</p>
            </div>

        </nav>
    )
 }
 export default Header
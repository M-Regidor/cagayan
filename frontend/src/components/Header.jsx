import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logoutUser } from "../store/sessionReducer"
import "./Header.css"

 

 const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })
    
    console.log(currentUser)

    return (
        <nav className="header">
            <Link className="home" to={"/"}>
                <h2>cagayan</h2>
            </Link>
            <div className="options">
                {currentUser ? (
                    <>
                    <h4>Hello, {currentUser.name}</h4>
                    <button onClick={()=> dispatch(logoutUser(currentUser.id))}>Logout</button>
                    </>
                    
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
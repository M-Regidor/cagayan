import { useDispatch, useSelector } from "react-redux"
import { Link} from "react-router-dom"
import { logoutUser } from "../store/sessionReducer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

 

 const Header = () => {
    const dispatch = useDispatch()

    const currentUser = useSelector(state => {
        const id = state.session.currentUserId;
        return state.users[id]
    })
    

    return (
        <nav className="header">
            <Link className="home" to={"/"}>
                <img className="logo"src="logo/logo.png" alt="logo" />
            </Link>
            <div className="header-options">
                {currentUser ? (
                        <ul className="user">
                            <li className="user-icon"><FontAwesomeIcon icon={faUser}/></li>                 
                            <li>Hello,<br/> {currentUser.name}
                                <div className="user-menu">
                                    <Link onClick={()=> dispatch(logoutUser(currentUser.id))}>Logout</Link>
                                </div>
                            </li>
                        </ul> 
                    
                ): (
                    <ul className="new-menu">              
                        <li>
                            <Link to={"login"}>Login!</Link>
                            <div>
                                <p>{"Don't have an account?"} <Link to={"signup"}>Start here</Link></p>
                            </div>
                        </li>
                    </ul> 
                )}
            </div>
        </nav>
    )
 }
 export default Header
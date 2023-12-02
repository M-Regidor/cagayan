import { useDispatch, useSelector} from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../store/sessionReducer";
import { useEffect, useState } from "react";
import "./NewSessionForm.css"


const NewSessionForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedIn = useSelector(state => !!state.session.currentUserId)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(false);

    useEffect(()=> {
        if (loggedIn){
            navigate("/")
        }
    }, [navigate,loggedIn])

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(loginUser({email, password})).catch(msg =>{
            setErrors(msg.errors)
        })
    }
    
    const handleError = () => {
        if (errors){
            return <p>! {errors}</p>
        }
    }

    return (
        <div className="login-container">
            <Link className="home" to={"/"}>
                <img className="logo"src="logo/logo.png" alt="logo" />
            </Link>
            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <label>
                    Email
                    <input 
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                     />
                </label>

                <label>
                    Password
                    <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </label>
                {handleError()}
                <button>Sign in</button>
            </form>

            <div className="create-account">
                <p>New to Cagayan</p>
                <button onClick={() => navigate("/signup")}>Create your Cagayan account</button>
            </div>
        </div>
            
        
    )


}

export default NewSessionForm
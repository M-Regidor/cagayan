import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUser } from "../store/userReducer"
import "./NewUserForm.css"
import { Link, useNavigate } from "react-router-dom"



const NewUserForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedIn = useSelector(state => !!state.session.currentUserId)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [errors, setErrors] = useState({});

    
    useEffect(()=>{
        if (loggedIn){
            navigate('/');
        }
    },[loggedIn, navigate])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createUser({email, password, name})).catch(msg => {
            setErrors(msg)
        })
    }

    const handleError = field => {
        switch (field) {
            case "email":
                if (errors.email){
                    return `! ${errors.email}`
                }
                break
            case "password":
                if (errors.password){
                    return `! ${errors.password}`
                }
                break
            case "name":
                if (errors.name){
                    return `! ${errors.name}`
                }
                break
            default:
                break;
        }
    }

    return (
        <div className="signup-container">
                <Link className="home" to={'/'}>
                    <img className="logo"src="logo/logo.png" alt="logo" />
                </Link>
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                    <h2>Create account</h2>
                    <div className="input-container">
                        <label className="signup-label">
                            Your name
                            <input 
                            type="text"
                            placeholder="First and last name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                            {handleError("name")}
                        </label>
                    
                        <label className="signup-label" >
                            Email
                            <input
                            type="text"
                            value={email}
                            onChange={e=> setEmail(e.target.value)} 
                            />
                            {handleError("email")}
                        </label>

                        <label className="signup-label" >
                            Password
                            <input 
                            type="password"
                            placeholder="Must be at least 6 characters"
                            value={password}
                            onChange={e=> setPassword(e.target.value)} 
                            />
                            {handleError("password")}
                        </label>
                        <button>Sign Up</button>
                        <p>Already have an account? <Link to={"/login"}>Sign in </Link></p>
                    </div>
                </form>
            </div>
           
        </div>
            
    )
}

export default NewUserForm
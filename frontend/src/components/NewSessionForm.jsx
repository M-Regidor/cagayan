import { useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/sessionReducer";
import { useState } from "react";


const NewSessionForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(loginUser({email, password}))
    }

    return (
        <div>
            <form onClick={handleSubmit}>
                <label>
                    Sign in
                    <input 
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                     />
                </label>

                <label>
                    Password
                    <input 
                    type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </label>

                <button>Sign in</button>
            </form>
        </div>
            
        
    )


}

export default NewSessionForm
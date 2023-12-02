import { useState } from "react"
import { useDispatch } from "react-redux"
import { createUser } from "../store/userReducer"



const NewUserForm = () => {
    const dispatch = useDispatch()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createUser({email, password}))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Email"
                value={email}
                onChange={e=> setEmail(e.target.value)} 
                />

                <input 
                type="text"
                placeholder="Password"
                value={password}
                onChange={e=> setPassword(e.target.value)} 
                />

                <button>Sign Up</button>
                
            </form>
        </>
    )
}

export default NewUserForm
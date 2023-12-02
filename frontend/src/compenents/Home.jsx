import { Link, Outlet } from "react-router-dom"
import NewUserForm from "./NewUserForm"


const Home = () => {
    return (
        <>
            <h1> Cagayan </h1>
            <Link to={'/signup'}>Sign up</Link>
            <Outlet/>
        </>
        
    )
}

export default Home
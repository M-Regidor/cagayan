import { Outlet } from "react-router-dom"
import Header from "../Header"

const ProductHome = () => {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default ProductHome
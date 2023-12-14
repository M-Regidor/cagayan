import { useNavigate, useParams } from "react-router-dom"
import Header from "../Header"
import ProductIndex from "./ProductIndex"
import { useEffect } from "react"
import Footer from "../Footer"

const CategoryProducts = () => {
    const {category} = useParams()
    const navigate = useNavigate() 
    
    useEffect(()=>{
        const categories = ["Home", "Electronics","Clothing","Health"]
        if (!categories.includes(category)){
            navigate("/")
        }
    },[category,navigate])

    return (
        <>
            <Header/>
            <ProductIndex category={category}/>
            <Footer/>
        </>
    )
}
export default CategoryProducts
import { useNavigate, useParams } from "react-router-dom"
import Header from "./Header"
import ProductIndex from "./ProductComponents/ProductIndex"
import { useEffect } from "react"

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
        </>
    )
}
export default CategoryProducts
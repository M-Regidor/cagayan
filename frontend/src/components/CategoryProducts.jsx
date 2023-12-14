import { useNavigate, useParams } from "react-router-dom"
import Header from "./Header"
import ProductIndex from "./ProductComponents/ProductIndex"
import { useEffect } from "react"

const CategoryProducts = () => {
    const {category} = useParams()
    const categories = ["Home", "Electronics","Clothing","Health"]
    const navigate = useNavigate() 
    
    useEffect(()=>{
        if (!categories.includes(category)){
            navigate("/")
        }
    },[categories,category,navigate])

    return (
        <>
            <Header/>
            <ProductIndex category={category}/>
        </>
    )
}
export default CategoryProducts
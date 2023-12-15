import { useParams, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header";
import ProductIndex from "./ProductIndex"
import Footer from "../Footer";

const SearchProducts = () => {
    const {keyword} = useParams();
    const {category} = useParams()
    const navigate = useNavigate() 
    
    useEffect(()=>{
        const categories = ["Home", "Electronics","Clothing","Health"]
        if (category){
            if (!categories.includes(category)) navigate("/")
        }
    },[category,navigate])
   
    return (
        <>
            <Header/>
            <ProductIndex keyword={keyword} category={category}/>
            <Footer/>
        </>
    )
}

export default SearchProducts
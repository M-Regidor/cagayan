import { useParams } from "react-router-dom"
import Header from "../Header"
import ProductIndex from "./ProductIndex"
import Footer from "../Footer";

const SearchProducts = () => {
    const {keyword} = useParams();
    console.log(keyword)
    
    return (
        <>
            <Header/>
            <ProductIndex keyword={keyword}/>
            <Footer/>
        </>
    )
}

export default SearchProducts
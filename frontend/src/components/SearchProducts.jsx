import { useParams } from "react-router-dom"
import Header from "./Header"
import ProductIndex from "./ProductComponents/ProductIndex"

const SearchProducts = () => {
    const {keyword} = useParams();
    console.log(keyword)
    
    return (
        <>
            <Header/>
            <ProductIndex keyword={keyword}/>
        </>
    )
}

export default SearchProducts
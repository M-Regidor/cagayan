import { useParams } from "react-router-dom"
import Header from "./Header"
import ProductIndex from "./ProductComponents/ProductIndex"

const FilteredProducts = () => {
    const {category} = useParams()

    return (
        <>
            <Header/>
            <ProductIndex category={category}/>
        </>
    )
}
export default FilteredProducts
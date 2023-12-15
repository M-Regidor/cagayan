import { Link } from "react-router-dom"
import "./Deal.css"


const DealComponent = ({deal, product}) => {

    if (product){
        return (
            <div className="deal-container">
                <h3>{deal}</h3>
                <Link className="deal-info" to={`products/${product.id}`}>
                    <img src={product.imgUrls} alt=""/>
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                </Link>
                <Link>See more</Link>
            </div>
        )
    }
}

export default DealComponent
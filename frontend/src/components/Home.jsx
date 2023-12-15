import { Outlet, Link } from "react-router-dom"
import Header from "./Header";
import "./Home.css"
import Deal from "./Deal";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, selectProductsArray } from "../store/productReducer";
import { useEffect } from "react";


const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectProductsArray)

    useEffect(()=>{
        dispatch(filterProducts("random"))
    },[dispatch])

    if (products.length === 9) {
        return (
             <> 
                <Header/>
                <div className="landing-container">
                    <div className="landing-info-container">
                        <div className="landing-ad">
                            <img className="landing-ad-img" src="assets/landing-ad.png" alt="" />
                        </div>
                        <div className="landing-deals-container">
                            <Deal deal={"Hot Deals"} product={products[0]}/>
                            <Deal deal={"You might like"} product={products[1]}/>
                            <Deal deal={"Save on"} product={products[2]}/>
                            <Deal deal={"Trending"} product={products[3]}/>
                        </div>
                        <div className="landing-new-items">
                            <h3>New to Cagayan</h3>
                            <div className="new-items-container">
                                <Link to={`/products/${products[4].id}`} >
                                    <img src={products[4].imgUrls} alt="" />
                                </Link>
                                <Link to={`/products/${products[5].id}`}>
                                    <img src={products[5].imgUrls}  alt="" />
                                </Link>
                                <Link to={`/products/${products[6].id}`}>
                                    <img src={products[6].imgUrls}  alt="" />
                                </Link>
                                <Link to={`/products/${products[7].id}`}>
                                    <img src={products[7].imgUrls}  alt="" />
                                </Link>
                                <Link to={`/products/${products[8].id}`}>
                                    <img src={products[8].imgUrls} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet/>
                <Footer/>
             </>
        )

    }
}

export default Home
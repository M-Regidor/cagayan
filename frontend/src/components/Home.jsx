import { Outlet } from "react-router-dom"
import Header from "./Header";
import "./Home.css"
import Deal from "./Deal";
import Footer from "./Footer";


const Home = () => {
    return (
         <> 
            <Header/>
            <div className="landing-container">
                <div className="landing-info-container">
                    <div className="landing-ad">
                        <img className="landing-ad-img" src="assets/landing-ad.png" alt="" />
                    </div>
                    <div className="landing-deals-container">
                        <Deal deal={"Hot Deals"}/>
                        <Deal deal={"You might like"}/>
                        <Deal deal={"Save on"}/>
                        <Deal deal={"Trending"}/>
                    </div>
                </div>
            </div>
            <Outlet/>
            <Footer/>
         </>
    )
}

export default Home
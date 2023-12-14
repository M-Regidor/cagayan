import { Link } from "react-router-dom"
import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="link-icons">
                <Link to={"https://github.com/integgy"}><img src="/assets/icons8-github-256.png" alt="" /></Link>
                <Link to={"https://www.linkedin.com/in/matthew-regidor-74a5a9259/"}><img src="/assets/icons8-linkedin-150.png" alt="" /></Link>
            </div>
        </footer>
    )
}

export default Footer
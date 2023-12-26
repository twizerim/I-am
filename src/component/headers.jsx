
import {Link} from "react-router-dom"
import Login from "../pages/login"

function Header(){

    return (
        <nav>
            <div className="log">
                <p>T<span>W Gedeon</span></p>
            </div>
            <div className="links-contant">
                <ul className="link">
                <li><Link to="/back" className="links">Welcome</Link></li>
                <li><Link to="/" className="links">I'am</Link></li>
                <li><Link to="/" className="links">My skills</Link></li>
                <li><Link to="/contact" className="links">Contact-me</Link></li>
                <li><Link to="/" className="links">Blogs</Link></li>
                <li><Link to="/login" className="linkss">Log-In</Link></li>
                    
                </ul>
            </div>
        </nav>
    )
}
export default Header
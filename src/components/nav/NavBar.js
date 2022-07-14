import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link color="orange" className="navbar__link" to="/home">home</Link>
            </li>
            <li className="navbar__item active">
                <Link color="orange" className="navbar__link" to="/locations">Location</Link>
            </li>
            <li className="navbar__item active">
                <Link color="orange" className="navbar__link" to="/products">All Products</Link>
            </li>
                
            <li className="navbar__item navbar__logout">
                <Link color="orange" className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        
    </ul>

    )
}


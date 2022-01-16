import "./navbar.css"
import { Link } from "react-router-dom"
const Navbar=()=>{
    return(
        <div>
            <nav className="mainContainer">
                <div    className="logoContainer">
                    <h1>LMS</h1>
                </div>
                <div className="menu">
                    <ul>
                        <Link  className="link"  to = "/"><li>home</li></Link>
                        
                        <Link className="link" to = "/teacher"><li>Teacher</li></Link>
                        <Link className="link" to = "/student"><li>Student</li></Link>
                        <Link className="link" to = "/admin/admin-login"><li>Admin</li></Link>
                        
                                               
                    </ul>
                </div>
            </nav>
        
        </div>
    )
}
export default Navbar
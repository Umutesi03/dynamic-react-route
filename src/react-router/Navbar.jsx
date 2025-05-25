import React from "react"
import  {Link} from "react-router-dom"


function Navbar(){
    return(
        <nav>
            <Link to="/">Home</Link>|{""}
            <Link to="/about">About</Link>|{""}
            <Link to="/users/1">User 1</Link>|{""}
            <Link to="/users/2">User 2</Link>|{""}
            <Link to ="/users/3">User 3</Link>|{""}
            <Link to="/login">Login</Link>|{""}
            <Link to="/dashboard">Dashboard</Link>
        </nav>
    );
}
export default Navbar;
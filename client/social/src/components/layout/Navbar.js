import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
        return (
            <nav className="navbar bg-dark">
                <h1><a href="index.html"><i className="fas fa-code"></i>DevConnector</a></h1>
                <ul>
                    <Link to='/'>
                        <i className="fas fa-code">DevConnector</i>
                    </Link>
                    <Link to='/developers'>
                        <i className="fas fa-code">Developers</i>
                    </Link>
                    <Link to='/login'>
                        <i className="fas fa-code">Login</i>
                    </Link>
                    <Link to='/register'>
                        <i className="fas fa-code">Register</i>
                    </Link>
                </ul>
            </nav>
        )
}
export default Navbar;
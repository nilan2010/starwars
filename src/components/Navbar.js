import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

 const Navbar = ()=>{
    const favourites = useSelector(state => state);
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Starwars</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Characters</Link></li>
                        <li><Link to="/favourite">Favourites({favourites.length})</Link></li>
                      
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;
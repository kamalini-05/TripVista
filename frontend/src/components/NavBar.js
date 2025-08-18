import React from 'react'
import'./NavBar.css'
import{FiMenu,FiX} from 'react-icons/fi'
import{Link} from 'react-router-dom'
const NavBar = () => {
  
  return (
    <div>
        <nav className="navbar">  
     <Link to='/' className='nav-logo'>Trip Vista</Link> 
     <div className="nav-icons">
     <FiX/>
     <FiMenu/>
     </div>
     <ul className= {'nav-links'}>
        <li>
          <Link to='/Holidays' className="nav-link">Holidays</Link></li>
        <li><Link to='/Packages' className="nav-link">Packages</Link></li>
        <li><Link to='/Transport' className="nav-link">Transport</Link></li>
        <li><Link to='/Homestay' className="nav-link">Hotels/Homestay</Link></li>
        <li><Link to='/EventsFestivals' className="nav-link">Events&Festivals</Link></li>
        <li><Link to='/Offer' className="nav-link">Offer</Link></li>
        <li><Link to='/More' className="nav-link">More</Link></li>
     </ul>
      </nav>
    </div>
  )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom';
import { FaCocktail } from "react-icons/fa";
const Header  = () => {
  return (
    <>
 
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <div className='container'>
  <Link className="navbar-brand" to="/">
    <FaCocktail color="blue"></FaCocktail>
    Cocktail Website
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ms-auto mb-2 mt-lg-0">
      {/* <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/help">Help</Link>
      </li> */} */
    </ul>
  </div>
  </div>
</nav>

    </>
  )
}

export default Header ;
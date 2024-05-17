import React from 'react';
import { FaApple, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light gap-3  "  >
      <div className=" container gap-5">
     <Link to={"/"}> <a className="navbar-brand text-light" href="#home">
          <FaApple size={30} />
        </a></Link>  
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav gap-5">
            <li className="nav-item">
            <Link to={"/store"}> <a className="nav-link text-light" href="#store">Store</a></Link> 
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#mac">Mac</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#ipad">iPad</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#watch">Watch</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#airpod">AirPods</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#tv-home">TV & Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#entertainment">Entertainment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#support">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#search">
                <FaSearch size={20} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#bag">
                <FaShoppingBag size={20} />
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;

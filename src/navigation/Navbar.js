import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div id="menu">
      <div><h1><Link to="/">Hashbuckets</Link></h1></div>
      <div>
        <ul>
          <li>
            <Link to="/cart"><FaShoppingCart /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import style from  './Navbar.module.css';  

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div>ParkScape Adventures</div>
      <ul>
        <li>ABOUTCAMP</li>
        <li>EVENTS </li>
        <li>SIGNIN</li>
      </ul>
    </div>
  );
}

export default Navbar;
import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/image/NetflixLogo.svg";
 
function Header() {
  return (
    <div className="header_outer_container"> 
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              {" "}
              <img src= {NetflixLogo}  alt="Netflix Logo svg" width = " 100 "/>
              </li>
            <li>Home</li>
            <li>Tvshow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by Languges</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

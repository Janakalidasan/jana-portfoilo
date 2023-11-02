import React from "react";
import ReactDOM from "react-dom";
import { useRef } from "react"; 
import './Header.css'
import logo from "../../asstes/Home/logos.png"
function Header() {
 const navref = useRef();

 const shownav = () => {
    navref.current.classList.toggle("responsive_nav")
 }

  return (
   <header>
    <img src={logo} className="log" ></img>
    <nav ref={navref} >
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#project">Project</a>
        <a href="#contacts">Contact</a>
        
        <a href="" className="">
        </a>
        <button className="nav-btn nav-close-btn" onClick={shownav}>
        <i class='bx bx-window-close' ></i>
        </button>
    </nav>
    <button className="nav-btn" onClick={shownav}>
    <i class='bx bx-menu' ></i>
    </button>
   </header>
  );
}

export default Header;

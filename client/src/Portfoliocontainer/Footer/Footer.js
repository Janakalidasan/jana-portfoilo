import React from "react";
import ReactDOM from "react-dom";
import './Footer.css'
import logo from "../../asstes/Home/logos.png"
function Footer() {
  return (
 <div className="container-fluid foot">
    <div className="container heds">
    <img src={logo} style={{height:"115px"}}></img>
    <h3>Janakalidasan</h3>
    <div className="colz-1">
            <div className="colz-icon-1">
            <a href="https://www.facebook.com/profile.php?id=61551426507900" target={"_blank"}>
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/dev_jana1/" target={"_blank"}>
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/janakalidasan-t-64b35421b/" target={"_blank"}>
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i class="bx bxl-twitter"></i>
            </a>
            </div>
          </div>
    </div>
    <p style={{color:"#fff"}}>@<a href="#" style={{textDecorationLine:"none",color:"#ff4500"}}>Dev-Janakalidasan 2023</a> | All
rights reserved</p>
 </div>
 
  );
}

export default Footer;

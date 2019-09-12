import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
//import "../navbar.css";

class NavbarPage extends Component {


render() {
  return (
    
        
        <div class="navbar-fixed-top">
        <nav class="main-navigation navbar-static ">
        <div class="navbar-header animated fadeInUp">
            <a class="navbar-brand"  href=""> 
            <img src={require(`../images/logp.jpeg`)} width="50" height="50" alt=""></img>
            </a>
        </div>
        <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
       
        <ul class="nav-list">
            <li class="nav-list-item">
                <a href="" class="nav-link" color={"black"}>Home</a>
            </li>
            <li class="nav-list-item">
                <a href="" class="nav-link">About Us</a>
            </li>
            <li class="nav-list-item">
                <a href="" class="nav-link">Blog</a>
            </li>
            <li class="nav-list-item">
                <a href="" class="nav-link">Works</a>
            </li>
            <li class="nav-list-item">
                <a href="" class="nav-link">Contact</a>
            </li>
        </ul>

    </nav>
    </div>
    
    );
  }
}

export default NavbarPage;
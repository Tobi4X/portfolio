import React from "react";


const List = () => {

  return(

      
      <div className="container d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><a href="#">NAME<span></span></a></h1>
      
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#items">RoadMap</a></li>
          <li><a className="nav-link scrollto" href="#kits">BUY</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li><a className="nav-link scrollto" href="#partners">Partners</a></li>
          <li><a className="nav-link scrollto " href="" target="_blank" rel="noreferrer">Whitepaper EN</a></li>
          <li><a className="nav-link scrollto " href="" target="_blank" rel="noreferrer">Whitepaper ES</a></li>
        </ul>
        <a href="#kits"><i className="bi mobile-nav-toggle bi-list"></i></a>
      </nav>
      
    </div>
  )
}

export default List


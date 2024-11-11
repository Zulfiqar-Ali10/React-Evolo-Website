import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" >
        
        
        <a className="navbar-brand logo-image" href="index.html"><img src="/images/logo.svg" alt="alternative" /></a>
        
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
       

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/" style={{color: "#333"}}>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/services" style={{color: "#333"}}>Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/pricing" style={{color: "#333"}}>Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/request" style={{color: "#333"}}>Request</Link>
                </li>

                      
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle page-scroll" to="/aboutus" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{color: "#333"}}>About</Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/"><span className="item-text" style={{color: "#333"}}>Terms Conditions</span></a>
                        <div className="dropdown-items-divide-hr"></div>
                        <a className="dropdown-item" href="/"><span className="item-text" style={{color: "#333"}}>Privacy Policy</span></a>
                    </div>
                </li>
                

                <li className="nav-item">
                    <a className="nav-link page-scroll" href="/" style={{color: "#333"}}>Contact</a>
                </li>
            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x facebook"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x twitter"></i>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div>
    </nav> 
    </>
  )
}

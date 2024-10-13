import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import logo from './Image/stitch.gif';

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top shadow">
        <div className="container-fluid">
          <a className="navbar-brand me-auto text-white" href="#home">
          <img src={logo} alt="Logo" />
          </a>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1">
                <li className="nav-item">
                  <a className="nav-link text-darke" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#about">About me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#special">Special</a>
                  </li>
              </ul>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
        </>
  )
}

export default Navbar;
import React from 'react';
import "../styles/Footer.css";

const Footer = (props) => {
  return (
    <div>
    	
    	<footer className="footer-20192">
  <div className="site-section">
    <div className="container">

      <div className="cta d-block d-md-flex align-items-center px-5">
        <div>
          <h2 className="font-weight-light">Need assistance?</h2>
          
        </div>
        <div className="ml-auto">
          <a href="#" className="btn btn-dark rounded-0 py-3 px-5">Contact us</a>
        </div>
      </div>
      <div className="row">

        <div className="col-sm">
          <a href="#" className="footer-logo">SP1</a>
          <p className="copyright">
            <small>&copy; 2021</small>
          </p>
        </div>
        
        <div className="col-sm">
          <h3>Company</h3>
          <ul className="list-unstyled links">
            <li><a href="#">About us</a></li>
            
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="col-sm">
          <h3>Further Information</h3>
          <ul className="list-unstyled links">
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer;
// components/Footer.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: "#1b1b1b" }}>
      <div className="container">
        <div className="row">
          {/* Logo & Address */}
          <div className="col-md-4 mb-4">
            <img src="/logo.svg" alt="Kodeo Logo" height="50" className="mb-3" />
            <p className="mb-2">
              Office no.733, Gera Imperium Rise,
              <br />
              Hinjewadi Phase 2, Pune, 411057
            </p>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-github"></i></a>
            </div>
          </div>

          {/* Services */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">Service</li>
              <li className="mb-2">Service</li>
              <li className="mb-2">Service</li>
              <li className="mb-2">Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Contact us</h6>
            <ul className="list-unstyled">
              <li className="mb-2">+971 4 282 2017</li>
              <li className="mb-2">+971 4 282 2017</li>
              <li className="mb-2">Kodeosoftware@gmail.com</li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "#444" }} />

        <div className="text-center small text-secondary">
          © 2025 Kodeosoftwaretechnology. All rights reserved. |{" "}
          <span className="mx-2">Cookies policy</span> |{" "}
          <span className="mx-2">Privacy policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

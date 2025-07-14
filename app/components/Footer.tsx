"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="text-white pt-5 pb-3"
      style={{ backgroundColor: "#111" }}
    >
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Column: Logo, Address, Social */}
          <div className="col-md-6 mb-4">
            <img
              src="/kodeo.svg"
              alt="Kodeo Logo"
              height="50"
              className="mb-3"
            />
            <p className="mb-2">
              Office no.733, Gera Imperium Rise,
              <br />
              Hinjewadi Phase 2, Pune, 411057
            </p>
            <p className="mb-2">info@kodeosoftwaretechnology.com</p>
            <p className="mb-3">+91 89 8445 4565</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Services + Quick Links */}

          <div className="col-md-5 mb-4">
            <div className="row">
              {/* Services */}
              <div className="col-sm-6 mb-3">
                <h6 className="fw-bold mb-3">Services</h6>
                <ul className="list-unstyled">

                       <li className="mb-2">
                    <Link
                      href="/cloud"
                      className="text-white text-decoration-none"
                    >
                      Cloud Computing
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link
                      href="/cyber"
                      className="text-white text-decoration-none"
                    >
                      Cyber Security
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/aiml"
                      className="text-white text-decoration-none"
                    >
                    AI & ML
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/devops"
                      className="text-white text-decoration-none"
                    >
                      DevOps
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/fullstack"
                      className="text-white text-decoration-none"
                    >
                      Software Development
                    </Link>
                  </li>


                </ul>
              </div>

              {/* Quick Links */}
              <div className="col-sm-6 mb-3">
                <h6 className="fw-bold mb-3">Quick Links</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link
                      href="/about"
                      className="text-white text-decoration-none"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/careers"
                      className="text-white text-decoration-none"
                    >
                      Career
                    </Link>
                  </li>

                      <li className="mb-2">
                    <Link
                      href="/contacts"
                      className="text-white text-decoration-none"
                    >
                      Contact Us
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#444" }} />

        <div className="text-center small text-secondary">
          © 2025 Kodeosoftwaretechnology. All rights reserved. |
          <span className="mx-2">Cookies policy</span> |
          <span className="mx-2">Privacy policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import PrivacyModal from "../privacey/page";

import TermsModal from "../terms/page";


import { useState } from "react";

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
            <p className="mb-2">hr@kodeosoftwaretechnology.com</p>
            <p className="mb-3">+91 7378914416</p>
            <div className="d-flex gap-3">
              <a
                href="https://fb.me/Kodeosoftwaretechnology"
                className="text-white fs-5"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/kodeo.soft?igsh=cWZoeXNxMHIxMGpy
 "
                className="text-white fs-5"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/kodeo-software-technology/?originalSubdomain=in"
                className="text-white fs-5"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://t.me/infokodeo" className="text-white fs-5">
                <i className="bi bi-telegram"></i>
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
                      href="/fullstack"
                      className="text-white text-decoration-none"
                    >
                      Full Stack Development
                    </Link>

                  </li>


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
                      href="/devops"
                      className="text-white text-decoration-none"
                    >
                      DevOps
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
                      href="/cyber"
                      className="text-white text-decoration-none"
                    >
                      Cyber Security
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

   
<div className="text-center small text-secondary">
  © 2025 Kodeosoftwaretechnology. All rights reserved. |
  <Link href="/terms" className="mx-2 text-decoration-underline text-primary">
    Terms & Conditions
  </Link>
  |
  <Link href="/privacey" className="mx-2 text-decoration-underline text-primary">
    Privacy Policy
  </Link>
</div>



    
      </div>
    </footer>
  );
};

export default Footer;
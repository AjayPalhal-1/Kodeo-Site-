"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

import { useState } from "react";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
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

        {/* Terms & Conditions Modal */}
        {showTerms && (
          <div className="modal fade show d-block" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Terms & Conditions</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowTerms(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Welcome to Kodeosoftwaretechnology. These terms govern your
                    use of our services...
                  </p>
                  {/* Add full terms here */}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="text-center small text-secondary">
          © 2025 Kodeosoftwaretechnology. All rights reserved. |
          <span
            className="mx-2 text-decoration-underline text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setShowTerms(true)}
          >
            Terms & Conditions
          </span>
          |
          <span
            className="mx-2 text-decoration-underline text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setShowPrivacy(true)}
          >
            Privacy Policy
          </span>
        </div>

        {/* Privacy Policy Modal */}
        {showPrivacy && (
          <div className="modal fade show d-block" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Privacy Policy</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowPrivacy(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    We value your privacy. This policy explains how we handle
                    your data, cookies, and more...
                  </p>
                  {/* Add full privacy content here */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;

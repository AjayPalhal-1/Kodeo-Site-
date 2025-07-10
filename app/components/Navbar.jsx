"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top py-2 px-4"
      style={{
        // background: "rgba(255, 255, 255, 0)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        {/* Left: Logo */}
        <Link className="navbar-brand fw-bold text-white fs-4" href="/">
          Kodeo
        </Link>

        {/* Toggle Button (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right: Nav Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            !isCollapsed ? "show" : ""
          }`}
        >
          <ul className="navbar-nav gap-4">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/cyber">
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/aiml">
                    AI/ML Solutions
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/fullstack">
                    Full Stack Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/cloud">
                    Cloud Consulting
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" href="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" href="/careers">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn"
                href="/contacts"
                style={{
                  backgroundColor: "#ff007f",
                  color: "#fff",
                  borderRadius: "20px",
                  padding: "6px 16px",
                  fontWeight: "500",
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

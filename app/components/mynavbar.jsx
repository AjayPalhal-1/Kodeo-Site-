"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Ensure Bootstrap JS is working for toggler (only for client-side)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top px-4"
      style={{
        background: "rgba(255, 255, 255, 0.39)", // Slight white background for contrast
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
        zIndex: 100,
        borderRadius: "10px", // Add rounded corners to make it look like a card
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow for a card effect
      }}
    >
      {/* Left Logo */}
      <Link className="navbar-brand fw-bold text-black fs-3" href="/">
        Kodeo
      </Link>

      {/* Mobile Toggler */}
      <button
        className="navbar-toggler border-0"
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Main Nav Links */}
      <div className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}>
        <ul className="navbar-nav mx-auto gap-4">
          {/* What We Do Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link text-black dropdown-toggle"
              href="#"
              id="navbarDropdown1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              What We Do
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li>
                <Link className="dropdown-item text-black" href="/cyber">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-black" href="/our-contact">
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-black" href="/our-contact">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-black" href="/our-contact">
                  Cloud Consulting
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-black" href="/our-contact">
                  DevOps Engineering
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-black" href="/our-contact">
                  Blockchain Solutions
                </Link>
              </li>
            </ul>
          </li>

   

          {/* Who We Are Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link text-black dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Who We Are
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
              <li>
                <Link className="dropdown-item text-black" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-black" href="/contacts">
                  Our Contact
                </Link>
              </li>
            </ul>
          </li>

          {/* Careers */}
          <li className="nav-item">
            <Link className="nav-link text-black" href="/careers">
              Careers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

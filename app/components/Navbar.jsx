"use client";

import Link from "next/link";
import Image from "next/image";

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
        {/* Left: Logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/kodeo.svg"
            alt="Kodeo Logo"
            width={60}
            height={50}
            className="me-2 "
            style={{ objectFit: "cover" }}
          />
          {/* <span className="fw-bold text-white fs-5">Kodeo</span> */}
        </Link>

        {/* Toggle Button (for mobile) */}
        <button
          className="navbar-toggler custom-toggler"
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
                <Link
                  className="dropdown-item"
                  href="/fullstack"
                  onClick={() => setIsCollapsed(true)}
                >
                  Full Stack Development
                </Link>

                <Link
                  className="dropdown-item"
                  href="/cloud"
                  onClick={() => setIsCollapsed(true)}
                >
                  Cloud Computing
                </Link>
                <Link
                  className="dropdown-item" 
                  href="/devops"
                  onClick={() => setIsCollapsed(true)}
                >
                  DevOps
                </Link>
                <Link
                  className="dropdown-item"
                  href="/aiml"
                  onClick={() => setIsCollapsed(true)}
                >
                  AI/ML Solutions
                </Link>
                <Link
                  className="dropdown-item"
                  href="/cyber"
                  onClick={() => setIsCollapsed(true)}
                >
                  Cyber Security
                </Link>
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

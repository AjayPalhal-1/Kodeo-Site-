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
        background: "#000",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        zIndex: 100,
      }}
    >
      {/* Left Logo */}
      <Link className="navbar-brand fw-bold text-white fs-3" href="/">
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
          <li className="nav-item">
            <Link className="nav-link text-white" href="/what-we-do">
              What We Do
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/what-we-think">
              What We Think
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/who-we-are">
              Who We Are
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/careers">
              Careers
            </Link>
          </li>
        </ul>

        {/* Right Side: Search & Location */}
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-search text-white fs-5" role="button"></i>
          <div className="text-white d-flex align-items-center" role="button">
            <i className="bi bi-globe me-1"></i> India{" "}
            <span className="ms-1">⌄</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

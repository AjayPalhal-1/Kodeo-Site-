// app/cybersecurity/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CybersecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-white text-center py-5" style={{
        background: `url('/bg-circuit.jpg') center/cover no-repeat`,
        minHeight: '60vh'
      }}>
        <div className="container py-5">
          <h1 className="display-4 fw-bold">Cybersecurity<br />Protecting Your Digital World</h1>
          <p className="lead">Reliable protection and AI-enabled monitoring 24/7.</p>
          <Link href="#contact" className="btn btn-danger px-4 py-2 fw-semibold mt-3">Contact Us</Link>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="fw-bold mb-4">Our Cybersecurity Solutions</h2>
          <p>
            We offer AI-enabled, real-time cybersecurity solutions that detect, monitor, and defend against all digital threats. From data breaches to DDoS attacks,
            our tools provide unmatched visibility, control, and protection across cloud, on-prem, and hybrid infrastructures.
          </p>

          {/* Solution Cards */}
          <div className="row mt-4">
            {[1, 2, 3, 4].map((_, idx) => (
              <div className="col-md-3 mb-4" key={idx}>
                <div className="card shadow h-100">
                  <img src="/services/icon1.svg" alt="service" className="card-img-top p-4" height={200} />
                  <div className="card-body">
                    <h5 className="fw-bold">Network Security</h5>
                    <p className="text-muted">
                      AI-driven threat detection and real-time network protection to secure your digital infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-5 bg-white text-dark">
        <div className="container">
          <h3 className="fw-bold mb-4">Development Process</h3>

          {[1, 2, 3, 4].map((_, i) => (
            <div className="mb-4" key={i}>
              <h5 className="fw-bold">Risk Assessment & Analysis</h5>
              <p className="text-muted">
                Proactive risk identification, analysis, and mitigation planning across multiple platforms using AI-driven models.
              </p>
            </div>
          ))}

          {/* Icons Row */}
          <div className="row mt-4">
            {["shield-lock", "graph-up", "search", "bug"]?.map((icon, index) => (
              <div className="col-md-3 text-center" key={index}>
                <i className={`bi bi-${icon} display-4 text-danger`}></i>
                <p className="mt-2">Proactive Testing & Monitoring</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h3 className="fw-bold">Let's Get Started</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows={3} placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-danger px-4">Submit</button>
              </form>
            </div>

            <div className="col-md-6">
              <img src="/projects/project3.jpg" alt="Cybersecurity Visual" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

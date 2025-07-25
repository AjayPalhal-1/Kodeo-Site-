"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ContactPage() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <div className="container-fluid px-0">
      {/* Banner/Header */}
      <div className="contact-hero position-relative d-flex align-items-end">
        {/* Full-page background image */}
        <Image
          src="/Images/Original/Contactus.png"
          alt="Brain Tech Banner"
          layout="fill"
          objectFit="cover"
          quality={90}
          style={{ zIndex: 1, opacity: 0.7 }}
          className="w-100 h-100 position-absolute top-0 start-0"
        />
        {/* Optional: dark overlay for better text contrast */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(10,0,51,0.7)", zIndex: 2 }}
        />
        {/* Text content at left bottom with animation */}
        <div
          ref={textRef}
          className="position-relative text-white"
          style={{
            zIndex: 3,
            maxWidth: 600,
            marginLeft: 60,
            marginBottom: 100, // Adjust this value to move text up from the bottom
            opacity: 0,
            transform: "translateY(40px)",
            transition:
              "opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <h1 className="display-4 fw-bold">Connect Us</h1>
          <p className="fs-5">
            We engineer scalable solutions that anticipate your future needs.
          </p>
        </div>
      </div>

      {/* Contact Info + Map */}
      <div className="row g-0 bg-white py-5 px-3 px-md-5 align-items-center">
        {/* Left: Contact Info */}
        <div className="col-md-6 mb-4 mb-md-0 pe-md-5">
          <h5 className="fw-bold mb-3">Address</h5>
          <p>
            Office no.733, Gera Imperium Rise, Wipro Circle,
            <br />
            Hinjewadi Phase 2, Pune, 411057
          </p>
          <hr />
          <h5 className="fw-bold mb-3">Phone (Office)</h5>
          <p className="mb-1">+91 7385053983</p>
          <p>+91 9356404782</p>
          <hr />
          <h5 className="fw-bold mb-3">Email</h5>
          <p className="mb-1">info@kodeosoftwaretechnology.com</p>
          <hr />
          <h5 className="fw-bold mb-3 ">Website</h5>
          <p>
            <a
              href="https://www.kodeosoftwaretechnology.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.kodeosoftwaretechnology.com
            </a>
          </p>
        </div>
        {/* Right: Google Map */}
        <div className="col-md-6">
          <div
            className="ratio ratio-4x3 rounded-4 overflow-hidden shadow"
            style={{ minHeight: 320 }}
          >
            <iframe
              src="https://www.google.com/maps?q=Gera+Imperium+Rise,+Hinjewadi+Phase+2,+Pune,+411057&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gera Imperium Rise Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

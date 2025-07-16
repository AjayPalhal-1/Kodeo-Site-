"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function AboutUsPage() {
  // Animation ref for hero text
  const heroTextRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (heroTextRef.current) {
      heroTextRef.current.style.opacity = "1";
      heroTextRef.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <div className="w-100 px-0 mx-0" style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <section
        className="position-relative"
        style={{ minHeight: "100vh", width: "100%" }}
      >
        <Image
          src="/Images/Original/Aboutus.png" // <-- Place your hero image in public/about-hero.jpg
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="w-100 h-100 position-absolute top-0 start-0"
          style={{ zIndex: 1, objectPosition: "center" }}
        />
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.45)", zIndex: 2 }}
        />
        {/* Text with fade-up animation */}
        <div
          ref={heroTextRef}
          className="position-relative text-white d-flex flex-column justify-content-end"
          style={{
            zIndex: 3,
            minHeight: "100vh",
            paddingLeft: "7vw",
            paddingBottom: "8vh",
            opacity: 0,
            transform: "translateY(60px)",
            transition:
              "opacity 1.4s 0.2s cubic-bezier(0.23, 1, 0.32, 1), transform 1.4s 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <h1 className="display-4 fw-bold mb-2">About Us</h1>
          <p className="fs-8" style={{ maxWidth: 600 }}>
            Kodeo Software Technology is your trusted partner in innovation. We
            deliver powerful, future-ready digital solutions that drive business
            growth with confidence, clarity, and consistency.{" "}
          </p>
        </div>
      </section>

      {/* Why Industry Leaders Choose Section */}
      <section className="py-5" style={{ background: "#f7f6fa" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left: Text */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4" style={{ fontSize: "2.2rem" }}>
                Why Industry Leaders Choose <br /> Kodeosoftware technology
              </h2>

              <ul
                className="mb-0"
                style={{
                  color: "#222",
                  fontSize: "1.1rem",
                  listStyle: "none",
                  paddingLeft: 0,
                }}
              >
                <li className="d-flex align-items-start mb-2">
                  <span style={{ marginRight: 12, marginTop: 2 }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M16 2v4M8 2v4" />
                    </svg>
                  </span>
                  Proven success in delivering scalable IT services
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span style={{ marginRight: 12, marginTop: 2 }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                      <line x1="6" y1="9" x2="6" y2="21" />
                      <line x1="18" y1="9" x2="18" y2="21" />
                    </svg>
                  </span>
                  Hands-on support and training for all skill levels
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span style={{ marginRight: 12, marginTop: 2 }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#f59e42"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" />
                      <path d="M2 12a10 10 0 0 0 20 0" />
                    </svg>
                  </span>
                  Secure, performance-driven software systems
                </li>
                <li className="d-flex align-items-start mb-2">
                  <span style={{ marginRight: 12, marginTop: 2 }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2l4-4" />
                    </svg>
                  </span>
                  Round-the-clock expert support
                </li>
              </ul>
            </div>

            {/* Right: Feature Cards */}
            <div className="col-lg-6">
              <div className="row g-3 d-flex flex-wrap">
                {[
                  {
                    title: "24/7 Customer Support",
                    desc: "Fixed 1000+ tech problems efficiently.",
                    icon: (
                      <svg
                        width="36"
                        height="36"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                        <rect x="2" y="15" width="4" height="6" rx="2" />
                        <rect x="18" y="15" width="4" height="6" rx="2" />
                      </svg>
                    ),
                  },
                  {
                    title: "Fast Project Delivery",
                    desc: "On-time, on-budget, every time.",
                    icon: (
                      <svg
                        width="36"
                        height="36"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 13a8 8 0 0 1 8-8v0a8 8 0 0 1 8 8v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5z" />
                        <path d="M9 17v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2" />
                      </svg>
                    ),
                  },
                  {
                    title: "Certified Experts",
                    desc: "Team of industry-certified professionals.",
                    icon: (
                      <svg
                        width="36"
                        height="36"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="8" r="7" />
                        <path d="M8.21 13.89l-1.42 4.25a1 1 0 0 0 1.45 1.13l3.76-2.2 3.76 2.2a1 1 0 0 0 1.45-1.13l-1.42-4.25" />
                      </svg>
                    ),
                  },
                  {
                    title: "Secure & Reliable",
                    desc: "Your data and projects are always safe with us.",
                    icon: (
                      <svg
                        width="36"
                        height="36"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l7 4v6c0 5.25-3.5 10-7 10s-7-4.75-7-10V6z" />
                      </svg>
                    ),
                  },
                ].map((card, index) => (
                  <div className="col-6 d-flex" key={index}>
                    <div
                      className="px-3 py-3 w-100 d-flex flex-column align-items-center justify-content-center text-center"
                      style={{
                        background: "#3a006a",
                        borderRadius: 16,
                        color: "#fff",
                        minHeight: 120,
                        height: "100%",
                      }}
                    >
                      <span style={{ marginBottom: 10 }}>{card.icon}</span>
                      <div
                        className="fw-semibold mb-1 text-center"
                        style={{ fontSize: "1rem" }}
                      >
                        {card.title}
                      </div>
                      <div
                        className="text-center"
                        style={{ fontSize: "0.9rem", opacity: 0.85 }}
                      >
                        {card.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey  */}
      <section
        className="py-5"
        style={{ background: "#1e1b32", color: "#fff" }}
      >
        <div className="container">
          <h2
            className="text-center fw-bold mb-5"
            style={{
              borderBottom: "2px solid #fff",
              display: "inline-block",
            }}
          >
            OUR JOURNEY
          </h2>

          <div
            className="timeline d-flex flex-column flex-md-row justify-content-between align-items-start gap-4 px-2"
            style={{ borderTop: "2px solid #555", paddingTop: "3rem" }}
          >
            {[
              {
                year: "2018",
                title: "Foundation",
                desc: "We established Kodeo, focusing on innovative software solutions.",
              },
              {
                year: "2019",
                title: "Expansion",
                desc: "Launched our first breakthrough product for secure web development.",
              },
              {
                year: "2020",
                title: "Going Global",
                desc: "Expanded internationally, gaining clients across multiple countries.",
              },
              {
                year: "2021",
                title: "Recognition",
                desc: "Recognized for excellence in cybersecurity solutions and innovation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="timeline-item d-flex flex-row flex-md-column align-items-start gap-3 w-100"
                style={{
                  maxWidth: "100%", // ← allows full width on mobile
                }}
              >
                <div
                  style={{
                    background: "#a78bfa",
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {item.year}
                </div>
                <div style={{ flex: 1 }}>
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#d1d5db",
                      marginBottom: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Vission Mission */}

      <section style={{ background: "#f2eafa", padding: "60px 0" }}>
        <div className="container">
          <div className="row g-0">
            {/* Top Left Image (Vision Image) */}
            <div className="col-md-6">
              <img
                src="/Services/ss1/newvission.png"
                alt="Vision"
                className="img-fluid w-100 h-100 object-fit-cover"
                style={{    objectFit: "cover",
                  height: "300px", // ⬅️ Increase height
                  width: "80%", // ⬅️ Reduce width
                   borderRadius: "50px",
                 }}
              />
            </div>

            {/* Top Right Text (Vision Text) */}
            <div
              className="col-md-6 d-flex flex-column justify-content-center p-5"
              style={{ background: "#f2eafa" }}
            >
              <h3 className="fw-bold mb-3">Vision</h3>
              <p style={{ fontSize: "1.1rem", color: "#333" }}>
                Our vision is to lead the future of technology by delivering
                innovative, intelligent, and secure digital solutions. We aim to
                become a global leader in AI, software development, and
                cybersecurity—transforming the way businesses operate. Through
                continuous innovation and forward-thinking strategies, we strive
                to shape a smarter and more connected world.
              </p>
            </div>

            {/* Bottom Right Image (Mission Image) — Mobile FIRST */}
            <div className="col-12 d-block d-md-none">
              <img
                src="/Services/ss1/m1.png"
                alt="Mission"
                className="img-fluid w-100 object-fit-cover"
                style={{
                  objectFit: "cover",
                  height: "300px", // ⬅️ Increase height
                  width: "80%", // ⬅️ Reduce width

                  borderRadius: "15px",
                }}
              />
            </div>

            {/* Bottom Left Text (Mission Text) */}
            <div
              className="col-md-6 d-flex flex-column justify-content-center p-5"
              style={{ background: "#f2eafa" }}
            >
              <h3 className="fw-bold mb-3">Mission</h3>
              <p style={{ fontSize: "1.1rem", color: "#333" }}>
                Our mission is to empower businesses by providing scalable,
                customized, and performance-driven tech solutions. We are
                committed to solving real-world challenges through advanced
                digital tools, ensuring efficiency, security, and growth. With a
                focus on collaboration and excellence, we aim to create lasting
                value for our clients.
              </p>
            </div>

            {/* Bottom Right Image (Mission Image) — Desktop ONLY */}
            <div className="col-md-6 d-none d-md-block">
              <img
                src="/Services/ss1/m1.png"
                alt="Mission"
                className="img-fluid w-100 h-100 object-fit-cover"
                style={{   objectFit: "cover",
                  height: "300px", // ⬅️ Increase height
                  width: "80%", // ⬅️ Reduce width

                  borderRadius: "50px", }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

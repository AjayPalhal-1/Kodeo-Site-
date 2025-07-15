"use client"; // This marks the file as a client-side component

import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import Image from "next/image";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);



  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          paddingTop: "140px",
          paddingBottom: "80px",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1, // Keeps image in the background
          }}
        >
          <Image
            src="/Services/ss1/fullstackbolt1.png" // Path to your image
            alt="Full Stack"
            layout="fill" // Makes the image cover the entire section
            objectFit="cover" // Ensures the image covers the section without distortion
            objectPosition="center" // Keeps the image centered
          />
        </div>

        {/* Hero Text */}
        <Container
          style={{ textAlign: "left", paddingLeft: "6vw", paddingTop: "50vh" }}
        >
          <h1>Code to Deployment—We Handle It All</h1>
          <p className="lead">
            From user interface to server-side logic, we build robust, secure,
            and scalable digital products.{" "}
          </p>
        </Container>
      </section>

      {/* Solutions */}
      {/* Solutions */}
      <section id="solutions" className="py-5">
        <Container>
          <h2 className="text-center mb-4"> Fullstack Development </h2>
          <p className="text-center text-muted mb-5">
            In the digital era, having a seamless and high-performing
            application is critical for success. At Kodeo Software Technology,
            we offer full stack development solutions that cover everything from
            elegant UI/UX design to powerful backend infrastructure. Our team is
            proficient in the latest frontend technologies like React, Angular,
            and Vue.js, as well as backend frameworks such as Node.js, Django,
            Laravel, and Spring Boot. We build web and mobile applications that
            are responsive, secure, and scalable. Whether you're launching a
            startup product or modernizing enterprise software, we ensure your
            system is built with maintainability and performance in mind. APIs,
            databases, deployment pipelines, cloud integration—we handle it all.
            Partner with us to create digital solutions that are fast,
            functional, and future-ready.
          </p>

          <Row>
            {[
              {
                title: "Frontend Development",
                image: "/Services/ss1/front end 2.jpeg", // Use appropriate image path
                points: [
                  "Build interactive, responsive UIs using React, Angular, or Vue.js.",
                  "Ensure accessibility, speed, and mobile-first design with pixel-perfect layout.",
                  "Deliver intuitive navigation and seamless user experiences.",
                ],
              },
              {
                title: "Backend Development",
                image: "/Services/ss1/backend.jpeg", // Use appropriate image path
                points: [
                  "Design scalable backend systems using Node.js, Django, Flask, or Laravel.",
                  "Securely manage databases, business logic, and authentication.",
                  "Develop microservices and RESTful APIs for modular architecture.",
                ],
              },
              {
                title: "Database Management",
                image: "/imgs/Full stack 2.png", // Use appropriate image path
                points: [
                  "Work with SQL (MySQL, PostgreSQL) & NoSQL (MongoDB, Firebase).",
                  "Design schemas for fast retrieval, indexing, and storage optimization.",
                  "Ensure data integrity, backups, and high availability.",
                ],
              },
              {
                title: "API & Integration Services",
                image: "/Services/ss1/API.jpeg", // Optional image
                points: [
                  "Develop RESTful APIs and GraphQL endpoints for data exchange.",
                  "Integrate third-party services like Stripe, Twilio, and Firebase.",
                  "Automate workflows using webhooks and middleware.",
                ],
              },
            ].map((item, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-semibold mb-3">
                      {item.title}
                    </Card.Title>
                    <ul style={{ paddingLeft: "18px" }}>
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          style={{ fontSize: "0.9rem", marginBottom: "6px" }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Development Process */}

      <section id="process" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Development Process</h2>

          {[
            {
              title: "Requirement Gathering & Planning",
              description:
                "Collaborate with stakeholders to define goals, target users, and tech stack. Establish feature lists, timelines, and delivery milestones.",
              icons: ["🎯", "📋"],
            },
            {
              title: "UI/UX Design",
              description:
                "Design wireframes, mock-ups, and clickable prototypes. Focus on usability, branding, and accessibility guidelines.",
              icons: ["🎨", "🧩"],
            },
            {
              title: "Frontend Development",
              description:
                "Develop responsive UIs using HTML, CSS, JavaScript, React, or Angular. Ensure cross-browser compatibility and performance optimization.",
              icons: ["💻", "📱"],
            },
            {
              title: "Backend Development",
              description:
                "Create APIs, authentication systems, and server-side logic. Integrate with databases, business rules, and third-party services.",
              icons: ["🔐", "🔧"],
            },
          ].map((step, i) => (
            <Row key={i} className="mb-4 align-items-center">
              <Col md={6}>
                <h5>{step.title}</h5>
                <p>{step.description}</p>
              </Col>
              <Col md={6}>
                <Row>
                  {step.icons.map((icon, j) => (
                    <Col xs={6} key={j} className="mb-3">
                      <div className="text-center">
                        <span style={{ fontSize: "2rem" }}>{icon}</span>
                        <p className="mt-2">
                          {step.title.split(" ")[0]} {j + 1}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* Let's Get Started Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "#0a0a23", color: "#fff" }}
      >
        <Container>
          <Row className="align-items-center">
            {/* Left: Form Card */}
            <Col md={6}>
              <div
                style={{
                  background: "#501A78",
                  padding: "30px",
                  borderRadius: "20px",
                  boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                }}
              >
                <h4 className="fw-bold text-white mb-3">Let’s Get Started</h4>
                <p className="text-white-50 mb-4">
                  Just give a try with our 30min free consultation
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      className="rounded-pill px-4 py-2"
                    />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Control
                          type="text"
                          placeholder="Phone number"
                          className="rounded-pill px-4 py-2"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control
                          type="email"
                          placeholder="Email ID"
                          className="rounded-pill px-4 py-2"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4" controlId="formIdea">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Your idea or requirements"
                      className="rounded-pill px-4 py-2"
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="w-100 rounded-pill py-2"
                    style={{ background: "#f43f5e", border: "none" }}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>

            {/* Right: Image */}
            <Col md={6} className="d-none d-md-block">
              <div className="text-center">
                <Image
                  src="/imgs/Full stack 2.png" // Make sure this path matches your image name and location
                  alt="Consultation"
                  width={700}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

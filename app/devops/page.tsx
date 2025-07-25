"use client"; // This marks the file as a client-side component

import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}

      <section
        className="devopshero"
        style={{
          position: "relative",
          minHeight: "100vh",
          paddingTop: "140px",
          paddingBottom: "80px",
          color: "white",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div className="backgroundImage">
          <Image
            src="/imgs/DevOps 3.png"
            alt="DevOps Background"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        {/* Hero Text */}
        <Container className="devopshero-container">
          <h1>From Code to Deployment—Faster, Smarter, Safer</h1>
          <p className="lead">
            DevOps solutions that streamline workflows, accelerate
            time-to-market, and ensure stability.
          </p>
        </Container>
      </section>

      {/* Solutions */}
      {/* Solutions */}
      <section id="solutions" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our DevOps Solutions</h2>
          <p className="text-center text-muted mb-5">
            Kodeo Software Technology helps teams build, test, and deploy
            software with confidence using a robust DevOps framework. Our
            solutions integrate source control, automated builds, unit testing,
            artifact management, and deployment automation under a unified CI/CD
            pipeline. We work with leading tools like GitLab CI, CircleCI, Azure
            DevOps, and Bitbucket Pipelines. Our containerization strategy uses
            Docker and Kubernetes to ensure consistency and scalability across
            environments. We also offer infrastructure automation using tools
            like Ansible, Chef, and Pulumi. DevOps isn’t just about speed—it’s
            about building resilient systems that adapt, scale, and recover
            intelligently.
          </p>

          <Row>
            {[
              {
                title: "CI/CD Pipeline Automation",
                image: "/Services/ss1/cicdU.jpeg", // Replace with actual image
                points: [
                  "Set up automated build, test, and deployment pipelines using Jenkins, GitLab CI, or Azure DevOps.",
                  "Accelerate development cycles with reliable and repeatable workflows.",
                  "Ensure every commit is production-ready through automated testing and versioning.",
                ],
              },
              {
                title: "Containerization with Docker",
                image: "/Services/ss1/docker 2.jpeg", // Replace with actual image
                points: [
                  "Package applications with all dependencies into lightweight containers.",
                  "Ensure consistency across development, staging, and production.",
                  "Simplify deployment and improve scalability.",
                ],
              },
              {
                title: "Orchestration with Kubernetes",
                image: "/Services/ss1/kubernets 2.jpeg", // Replace with actual image
                points: [
                  "Manage container clusters efficiently using Kubernetes or OpenShift.",
                  "Automate load balancing, scaling, and health checks for microservices.",
                  "Deploy applications at scale with minimal downtime.",
                ],
              },
              {
                title: "Infrastructure as Code (IaC)",
                image: "/Services/ss1/IaC.jpeg", // Replace with actual image
                points: [
                  "Automate infrastructure provisioning using Terraform, Ansible, or CloudFormation.",
                  "Version-control your infrastructure and reduce human errors.",
                  "Deploy repeatable, secure, and compliant environments.",
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

    <section id="devops-process" className="py-5 bg-light">
  <Container>
    <h2 className="text-center mb-5 fw-bold">DevOps Development Process</h2>

    {[
      {
        title: "Plan & Strategy",
        emojiTitle: "DevOps Plan 🧠",
        points: [
          "Define goals, tools, and workflows that align development with operations.",
          "Map infrastructure and deployment pipelines for smooth integration.",
          "Document every phase and set measurable objectives.",
        ],
      },
      {
        title: "Development & Coding",
        emojiTitle: "DevOps Code 💻",
        points: [
          "Write code using standard practices and version control tools like Git.",
          "Collaborate through branching, pull requests, and code reviews.",
          "Ensure code modularity for reusability and testability.",
        ],
      },
      {
        title: "CI/CD Automation",
        emojiTitle: "DevOps CI/CD ⚙️",
        points: [
          "Automate builds and deployments using Jenkins, GitHub Actions, or GitLab.",
          "Reduce manual errors and accelerate delivery cycles.",
          "Support rollback strategies and version control tagging.",
        ],
      },
      {
        title: "Testing & Monitoring",
        emojiTitle: "DevOps Test & Monitor 🔍",
        points: [
          "Conduct unit, integration, and performance testing automatically.",
          "Use tools like Selenium, JUnit, and LoadRunner.",
          "Monitor uptime, errors, and logs using Prometheus, Grafana, or ELK stack.",
        ],
      },
      {
        title: "Security & Operations",
        emojiTitle: "DevOps Secure 🔐",
        points: [
          "Implement DevSecOps by integrating security into CI/CD pipelines.",
          "Use tools like SonarQube, Snyk, or Aqua Security.",
          "Monitor system health, handle backups, and ensure high availability.",
        ],
      },
    ].map((item, index) => (
      <Row key={index} className="align-items-center mb-5">
        {/* Left Content */}
        <Col md={6}>
          <h5 className="fw-bold mb-3">{item.title}</h5>
          <ul className="ps-3">
            {item.points.map((point, i) => (
              <li key={i} style={{ fontSize: "0.95rem", marginBottom: "6px" }}>
                {point}
              </li>
            ))}
          </ul>
        </Col>

        {/* Right Emoji Box */}
        <Col md={6} className="text-center">
          <div
            style={{
              backgroundColor: "#fff",
              border: "2px dashed #0d6efd",
              padding: "15px 25px",
              borderRadius: "20px",
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#333",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "inline-block",
            }}
          >
            {item.emojiTitle}
          </div>
        </Col>
      </Row>
    ))}
  </Container>
</section>


      {/* Let's Get Started Section */}
 


          <section className="form-section py-5 px-4  text-dark"
      
              style={{ backgroundColor: "#0a0a23", color: "#fff" }}
            >
              <Container>
                <Row className="flex-column-reverse flex-md-row align-items-center">
                  {/* Left: Form Card */}
      
                  <Col md={6}>
                    <div
                      style={{
                        minHeight: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(80, 26, 120, 0.25)", // translucent purple
                          // padding: "25px",
                          boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                          backdropFilter: "blur(16px)",
                          WebkitBackdropFilter: "blur(16px)",
                          transition: "0.3s ease",
                          padding: "25px 25px",
                          borderRadius: "15px", // or any px value you like
      
      
                        }}
                      >
                        <h3 className="fw-bold text-white mb-1">Let’s Get Started</h3>
                        <p className="text-white-50 mb-3" style={{ fontSize: "0.9rem" }}>
                          Just give a try with our 30-minute free consultation
                        </p>
      
                        <Form>
      
                          <Form.Group className="mb-2" controlId="formName"
                          >
                            <Form.Label className="text-white" style={{ borderRadius: "12px" }}
                            >Your Name</Form.Label>
                            <Form.Control type="text" className="modern-input" style={{ borderRadius: "35px" }}
                            />
                          </Form.Group>
      
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-2" controlId="formPhone">
                                <Form.Label className="text-white">Phone Number</Form.Label>
                                <Form.Control type="text" className="modern-input" style={{ borderRadius: "35px" }}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-2" controlId="formEmail">
                                <Form.Label className="text-white">Email ID</Form.Label>
                                <Form.Control type="email" className="modern-input" style={{ borderRadius: "35px" }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
      
                          <Form.Group className="mb-2" controlId="formIdea">
                            <Form.Label className="text-white">
                              Your Idea or Requirements
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={2}
                              className="modern-input"
                              style={{ borderRadius: "40px" }}
                            />
                          </Form.Group>
      
                          <Button
                            type="submit"
                            className="w-100 py-3 fw-bold neon-button"
                            style={{
                              background: "linear-gradient(90deg, #fa0965ff 0%, #ff039aff 100%)", // 🌸 Pink shades
                              color: "#fff",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                              fontSize: "1rem",
                              // boxShadow: "0 0 15px rgba(255,110,196,0.6), 0 0 30px rgba(120,115,245,0.6)",
                              transition: "0.3s ease-in-out",
                              borderRadius: "35px", // or any px value you like
      
                            }}
      
                          >
                            🚀 Submit
                          </Button>
                        </Form>
      
                      </div>
                    </div>
                  </Col>
      
      
                  {/* Right: Image */}
                  <Col xs={12} md={6} className="mb-4 mb-md-0">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "429px", // Match form height approx.
                        borderRadius: "25px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                  src="/imgs/DevOps 3.png" // Make sure this path matches your image name and location
                        alt="form-img"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        priority
                      />
                    </div>
      
      
      
                  </Col>
      
                </Row>
              </Container>
            </section>
    </>
  );
}

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
      <section id="process" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">
            DevOps Development Process
          </h2>

          {[
            {
              title: "Assessment & Planning",
              icon: "bi-clipboard-data",
              points: [
                "Analyze current development and operations processes.",
                "Identify bottlenecks, tool gaps, and automation opportunities.",
              ],
            },
            {
              title: "Toolchain Selection",
              icon: "bi-tools",
              points: [
                "Select the right tools for CI/CD, version control, monitoring, and IaC.",
                "Ensure compatibility with existing platforms and workflows.",
              ],
            },
            {
              title: "Pipeline Design",
              icon: "bi-diagram-3",
              points: [
                "Design CI/CD pipelines for build, test, staging, and production.",
                "Set up triggers, approvals, and rollback strategies.",
              ],
            },
            {
              title: "Infrastructure Automation",
              icon: "bi-cpu",
              points: [
                "Write IaC scripts using Terraform, Ansible, or similar tools.",
                "Automate server setup, firewall rules, and storage configuration.",
              ],
            },
            {
              title: "Monitoring & Logging",
              icon: "bi-graph-up-arrow",
              points: [
                "Track app health and performance using Prometheus, Grafana, or ELK.",
                "Get real-time alerts and error visibility across environments.",
              ],
            },
            {
              title: "Security Integration (DevSecOps)",
              icon: "bi-shield-lock-fill",
              points: [
                "Integrate security checks into every stage of the pipeline.",
                "Use static and dynamic code analysis to find vulnerabilities early.",
              ],
            },
            {
              title: "Automated Testing",
              icon: "bi-bug-fill",
              points: [
                "Implement unit, integration, and end-to-end testing automatically.",
                "Increase confidence in each deployment with zero manual effort.",
              ],
            },
            {
              title: "Deployment & Rollback",
              icon: "bi-cloud-upload-fill",
              points: [
                "Deploy with confidence using blue-green or canary strategies.",
                "Automate rollback on failures to reduce downtime risk.",
              ],
            },
          ].map((item, index) => (
            <Row key={index} className="align-items-center mb-5">
              {/* Left Content */}
              <Col md={6}>
                <h5 className="fw-bold mb-3">{item.title}</h5>
                <ul className="ps-3">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      style={{ fontSize: "0.95rem", marginBottom: "6px" }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Col>

              {/* Right Icon */}
              <Col md={6} className="text-center">
                <div
                  style={{
                    backgroundColor: "#0d6efd",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "28px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    margin: "auto",
                  }}
                >
                  <i className={`bi ${item.icon}`}></i>
                </div>
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
                  background: "rgba(80, 26, 120, 0.25)", // translucent purple
                  padding: "35px",
                  borderRadius: "25px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "0.3s ease",
                }}
              >
                <h3 className="fw-bold text-white mb-3">Let’s Get Started</h3>
                <p className="text-white-50 mb-4">
                  Just give a try with our 30-minute free consultation
                </p>
                <Form>
                  {/* Name */}
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label className="text-white">Your Name</Form.Label>
                    <Form.Control type="text" className="modern-input" />
                  </Form.Group>

                  {/* Phone and Email */}
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4" controlId="formPhone">
                        <Form.Label className="text-white">
                          Phone Number
                        </Form.Label>
                        <Form.Control type="text" className="modern-input" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4" controlId="formEmail">
                        <Form.Label className="text-white">Email ID</Form.Label>
                        <Form.Control type="email" className="modern-input" />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Idea */}
                  <Form.Group className="mb-4" controlId="formIdea">
                    <Form.Label className="text-white">
                      Your Idea or Requirements
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      className="modern-input"
                      style={{ resize: "none" }}
                    />
                  </Form.Group>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-100 py-3 fw-bold neon-button"
                  >
                    🚀 Submit
                  </Button>
                </Form>
              </div>
            </Col>

            {/* Right: Image */}
            <Col md={6} className="d-none d-md-block">
              <div className="text-center">
                <Image
                  src="/imgs/DevOps 3.png" // Make sure this path matches your image name and location
                  alt="Consultation"
                  width={700}
                  height={500}
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

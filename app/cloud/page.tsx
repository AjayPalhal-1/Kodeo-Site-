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
        className="cloudhero"
        style={{
          position: "relative",
          height: "110vh",
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
            src="/imgs/cloud 4.png" // Path to your image
            alt="Cybersecurity"
            layout="fill" // Makes the image cover the entire section
            objectFit="cover" // Ensures the image covers the section without distortion
            objectPosition="center" // Keeps the image centered
          />
        </div>

        {/* Hero Text */}
        <Container className="cyberhero-text">
          <h1>Secure, Scalable, and Smarter Cloud</h1>
          <p className="lead">
            Transform your IT with cloud-native architecture built for speed,
            resilience, and innovation.
          </p>
        </Container>
      </section>

      {/* Solutions */}
      {/* Solutions */}
      <section id="solutions" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Cloud Solutions</h2>
          <p className="text-center text-muted mb-5">
            Cloud computing is more than just storage—it's about driving digital
            transformation. Our cloud experts help businesses build agile,
            scalable, and secure cloud ecosystems. We deliver custom solutions
            including virtual machines, containers, storage, databases, disaster
            recovery, and cloud-native application development. Our team ensures
            compliance with regulatory frameworks like GDPR, HIPAA, and SOC2
            while reducing IT costs and time-to-market. Whether you need private
            cloud security or the flexibility of public and hybrid models, Kodeo
            Software Technology ensures performance, security, and value.
          </p>

          <Row>
            {[
              {
                title: "Cloud Infrastructure Setup",
                image: "/imgs/cloud 2.png", // Replace with your actual image path
                points: [
                  "Provision scalable infrastructure using AWS, Azure, or GCP.",
                  "Configure compute, storage, and networking to meet business needs.",
                  "Automate deployments using Terraform, CloudFormation, or Bicep.",
                ],
              },
              {
                title: "Cloud Migration Services",
                image: "/imgs/cloud 1.png", // Replace with your actual image path
                points: [
                  "Assess, plan, and execute migrations from on-premise to the cloud.",
                  "Use rehosting, replatforming, or refactoring strategies.",
                  "Minimize downtime and data loss during migration.",
                ],
              },
              {
                title: "DevOps in the Cloud",
                image: "/Services/ss1/devops in cloud.jpeg", // Replace with your actual image path
                points: [
                  "Integrate CI/CD pipelines for faster and more reliable releases.",
                  "Automate builds, tests, and deployments.",
                  "Monitor performance and errors using cloud-native tools.",
                ],
              },
              {
                title: "Serverless Application Development",
                image: "/Services/ss1/serverless.jpeg", // Replace with your actual image path
                points: [
                  "Build and deploy using AWS Lambda, Azure Functions, or Google Cloud Functions.",
                  "Scale automatically with reduced operational overhead.",
                  "Pay only for the compute you use.",
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
            Cloud Development Process
          </h2>

          {[
            {
              title: "Cloud Infrastructure Setup",
              icon: "bi-hdd-network",
              points: [
                "Provision scalable infrastructure using AWS, Azure, or GCP.",
                "Configure compute, storage, and networking to meet business needs.",
                "Automate deployments using Terraform, CloudFormation, or Bicep.",
              ],
            },
            {
              title: "Cloud Migration Services",
              icon: "bi-arrow-repeat",
              points: [
                "Assess, plan, and execute migrations from on-premise to the cloud.",
                "Use rehosting, replatforming, or refactoring strategies.",
                "Minimize downtime and data loss during migration.",
              ],
            },
            {
              title: "DevOps in the Cloud",
              icon: "bi-gear-wide-connected",
              points: [
                "Integrate CI/CD pipelines for faster and more reliable releases.",
                "Automate builds, tests, and deployments.",
                "Monitor performance and errors using cloud-native tools.",
              ],
            },
            {
              title: "Serverless Application Development",
              icon: "bi-cloud-check-fill",
              points: [
                "Build and deploy using AWS Lambda, Azure Functions, or GCP Functions.",
                "Scale automatically with reduced operational overhead.",
                "Pay only for the compute you use.",
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
                    backgroundColor: "#ff007f",
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
            <Col
              md={6}
              className="d-none d-md-flex justify-content-center align-items-center"
              style={{
                minHeight: "900px", // Increase this value to grow image vertically
                padding: "10px", // optional: add space around
              }}
            >
              <div
                style={{
                  height: "100%", // 👈 Full height
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/imgs/cloud 2.png"
                  alt="Consultation"
                  width={800} // still controls intrinsic resolution
                  height={800}
                  className="img-fluid"
                  style={{
                    maxHeight: "100%", // 👈 key line: grow to container height
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

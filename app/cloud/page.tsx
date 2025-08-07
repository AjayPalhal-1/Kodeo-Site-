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
                image: "/imgs/cloud-5.png", // Replace with your actual image path
                points: [
                  "Integrate CI/CD pipelines for faster and more reliable releases.",
                  "Automate builds, tests, and deployments.",
                  "Monitor performance and errors using cloud-native tools.",
                ],
              },
              {
                title: "Serverless Application Development",
                image: "/imgs/cloud-3.png", // Replace with your actual image path
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
          <h2 className="text-center mb-5 fw-bold">Cloud Development Process</h2>

          {[
            {
              title: "Cloud Infrastructure Setup",
              emojiTitle: "Cloud Infrastructure ☁️",
              points: [
                "Provision scalable infrastructure using AWS, Azure, or GCP.",
                "Configure compute, storage, and networking to meet business needs.",
                "Automate deployments using Terraform, CloudFormation, or Bicep.",
              ],
            },
            {
              title: "Cloud Migration Services",
              emojiTitle: "Cloud Plan 🧭",
              points: [
                "Assess, plan, and execute migrations from on-premise to the cloud.",
                "Use rehosting, replatforming, or refactoring strategies.",
                "Minimize downtime and data loss during migration.",
              ],
            },
            {
              title: "DevOps in the Cloud",
              emojiTitle: "Cloud Deploy & Monitor 🚀",
              points: [
                "Integrate CI/CD pipelines for faster and more reliable releases.",
                "Automate builds, tests, and deployments.",
                "Monitor performance and errors using cloud-native tools.",
              ],
            },
            {
              title: "Serverless Application Development",
              emojiTitle: "Cloud Secure 🔐",
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

              {/* Right Text + Emoji */}
              <Col md={6} className="text-center">
                <div
                  style={{
                    backgroundColor: "#fff",
                    border: "2px dashed #ff007f",
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
                  src="/kodeo-data/services-updated/cloud/Cloud-DevOps.png"

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

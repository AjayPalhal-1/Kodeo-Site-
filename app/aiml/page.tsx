"use client"; // This marks the file as a client-side component

import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import Image from "next/image";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update the scroll progress based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            src="/imgs/ai3.png" // Path to your image
            alt="Cybersecurity"
            layout="fill" // Makes the image cover the entire section
            objectFit="cover" // Ensures the image covers the section without distortion
            objectPosition="center" // Keeps the image centered
          />
        </div>

        {/* Hero Text */}
        <Container
          style={{ textAlign: "left", paddingLeft: "6vw", paddingTop: "50vh" }}
        >
          <h1>Transforming Data Into Decisions</h1>
          <p className="lead">
            Unlock the power of Artificial Intelligence and Machine Learning to
            drive smarter, faster, and more accurate outcomes for your business.{" "}
          </p>
        </Container>
      </section>

      {/* Solutions */}
      {/* Solutions */}
      <section id="solutions" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our AI/ML Solutions</h2>
          <p className="text-center text-muted mb-5">
            Artificial Intelligence and Machine Learning are revolutionizing how
            businesses operate, from automation to personalization. At Kodeo, we
            specialize in building tailored AI/ML solutions that meet your
            domain-specific needs. Our services include model development, ML
            Ops pipelines, AI analytics dashboards, and scalable deployments on
            AWS, Azure, and GCP. We use data labelling, preprocessing, and model
            tuning techniques to deliver maximum accuracy and minimum bias. From
            chatbots to real-time recommendation engines and anomaly detection
            systems, our models adapt to your data in real time. Our goal is not
            just building models—but empowering your team with tools that evolve
            and scale with your objectives.{" "}
          </p>

          <Row>
            {[
              {
                title: "Predictive Analytics",
                image: "/Services/ss1/ai1.webp", // Replace with your image path
                points: [
                  "Make data-driven decisions with AI models that forecast trends, demand, and behaviours.",
                  "Improve supply chain efficiency, financial planning, and customer engagement.",
                  "Use regression, classification, and time-series modelling techniques.",
                ],
              },
              {
                title: "Natural Language Processing (NLP)",
                image: "/Services/ss1/NLP 2.jpeg", // Replace with your image path
                points: [
                  "Extract insights from unstructured text, emails, chats, and reviews.",
                  "Enable intelligent chatbots, auto-summarization, and sentiment analysis.",
                  "Deploy multilingual models for global reach and engagement.",
                ],
              },
              {
                title: "Computer Vision",
                image: "/Services/ss1/computer vision.jpeg", // Replace with your image path
                points: [
                  "Analyse and interpret images and video at scale using AI.",
                  "Use facial recognition, object detection, and scene segmentation.",
                  "Optimize quality control, surveillance, and inventory management.",
                ],
              },
              {
                title: "Recommendation Systems",
                image: "/Services/ss1/recommendation system 2.jpeg", // Replace with your image path
                points: [
                  "Increase customer engagement with personalized suggestions.",
                  "Deploy collaborative and content-based filtering algorithms.",
                  "Boost conversions in e-commerce, streaming, and online learning.",
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

    {/* Step 1 */}
    <Row className="mb-4 align-items-center">
      <Col md={6}>
        <h5>✅ Problem Definition & Data Collection</h5>
        <p>
          Understand business objectives and gather both structured and unstructured data.
          Collaborate with stakeholders to define KPIs and success metrics.
        </p>
      </Col>
      <Col md={6}>
        <Row>
          {["📊", "🧠"].map((icon, i) => (
            <Col xs={6} key={i} className="mb-3 text-center">
              <span style={{ fontSize: "2rem" }}>{icon}</span>
              <p className="mt-2">{i === 0 ? "Data Sources" : "Business Understanding"}</p>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>

    {/* Step 2 */}
    <Row className="mb-4 align-items-center">
      <Col md={6}>
        <h5>✅ Data Cleaning & Preprocessing</h5>
        <p>
          Handle missing values, normalize datasets, and build clean data pipelines.
          Ensure data integrity for efficient model training.
        </p>
      </Col>
      <Col md={6}>
        <Row>
          {["🧹", "🔄"].map((icon, i) => (
            <Col xs={6} key={i} className="mb-3 text-center">
              <span style={{ fontSize: "2rem" }}>{icon}</span>
              <p className="mt-2">{i === 0 ? "Cleaning" : "Normalization"}</p>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>

    {/* Step 3 */}
    <Row className="mb-4 align-items-center">
      <Col md={6}>
        <h5>✅ Feature Engineering</h5>
        <p>
          Extract meaningful features to boost model accuracy.
          Apply techniques like one-hot encoding, scaling, and dimensionality reduction.
        </p>
      </Col>
      <Col md={6}>
        <Row>
          {["🧬", "📐"].map((icon, i) => (
            <Col xs={6} key={i} className="mb-3 text-center">
              <span style={{ fontSize: "2rem" }}>{icon}</span>
              <p className="mt-2">{i === 0 ? "Feature Design" : "Dimensionality Reduction"}</p>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>

    {/* Step 4 */}
    <Row className="mb-4 align-items-center">
      <Col md={6}>
        <h5>✅ Model Selection & Training</h5>
        <p>
          Choose algorithms like linear models, tree-based methods, or deep learning networks.
          Train using historical data and validate with cross-validation techniques.
        </p>
      </Col>
      <Col md={6}>
        <Row>
          {["🤖", "📈"].map((icon, i) => (
            <Col xs={6} key={i} className="mb-3 text-center">
              <span style={{ fontSize: "2rem" }}>{icon}</span>
              <p className="mt-2">{i === 0 ? "Model Building" : "Evaluation"}</p>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
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
                  src="/imgs/AI 1.jpg" // Make sure this path matches your image name and location
                  alt="Consultation"
                  width={600}
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

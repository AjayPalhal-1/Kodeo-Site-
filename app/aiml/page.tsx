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
        className="ai-hero-section"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: 0,
          margin: 0,
          width: "100%",
          maxWidth: "100vw", // center-align the section to fill screen

        }}
      >
        {/* Background Image */}
        <div className="hero-bg-img"></div>
        {/* Hero Text */}
        <Container fluid className="pt-5">
          <Row>
            <Col
              xs={12}
              md={10}
              lg={8}
              className="text-start px-3 px-md-4 px-lg-5 hero-text-col"
              style={{
                paddingTop: "28vh",
              }}
            >
              {/* <h1 className=" hero-text-col display-6 display-md-5 display-lg-4 fw-bold">
                Transforming Data Into Decisions
              </h1> */}
{/* 
              <p className="lead mt-3" style={{ fontSize: "1rem" }}>
                Unlock the power of Artificial Intelligence and Machine Learning
                to drive smarter, faster, and more accurate outcomes for your
                business.
              </p> */}

            </Col>
          </Row>
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
                image: "/kodeo-data/services-updated/aiml/pa.png", // Replace with your image path
                points: [
                  "Make data-driven decisions with AI models that forecast trends, demand, and behaviours.",
                  "Improve supply chain efficiency, financial planning, and customer engagement.",
                  "Use regression, classification, and time-series modelling techniques.",
                ],
              },
              {
                title: "Natural Language Processing (NLP)",
                image: "/kodeo-data/services-updated/aiml/NLP.png", // Replace with your image path
                points: [
                  "Extract insights from unstructured text, emails, chats, and reviews.",
                  "Enable intelligent chatbots, auto-summarization, and sentiment analysis.",
                  "Deploy multilingual models for global reach and engagement.",
                ],
              },
              {
                title: "Computer Vision",
                image: "/kodeo-data/services-updated/aiml/computer vision.png", // Replace with your image path
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
                Understand business objectives and gather both structured and
                unstructured data. Collaborate with stakeholders to define KPIs
                and success metrics.
              </p>
            </Col>
            <Col md={6}>
              <Row>
                {["📊", "🧠"].map((icon, i) => (
                  <Col xs={6} key={i} className="mb-3 text-center">
                    <span style={{ fontSize: "2rem" }}>{icon}</span>
                    <p className="mt-2">
                      {i === 0 ? "Data Sources" : "Business Understanding"}
                    </p>
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
                Handle missing values, normalize datasets, and build clean data
                pipelines. Ensure data integrity for efficient model training.
              </p>
            </Col>
            <Col md={6}>
              <Row>
                {["🧹", "🔄"].map((icon, i) => (
                  <Col xs={6} key={i} className="mb-3 text-center">
                    <span style={{ fontSize: "2rem" }}>{icon}</span>
                    <p className="mt-2">
                      {i === 0 ? "Cleaning" : "Normalization"}
                    </p>
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
                Extract meaningful features to boost model accuracy. Apply
                techniques like one-hot encoding, scaling, and dimensionality
                reduction.
              </p>
            </Col>
            <Col md={6}>
              <Row>
                {["🧬", "📐"].map((icon, i) => (
                  <Col xs={6} key={i} className="mb-3 text-center">
                    <span style={{ fontSize: "2rem" }}>{icon}</span>
                    <p className="mt-2">
                      {i === 0 ? "Feature Design" : "Dimensionality Reduction"}
                    </p>
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
                Choose algorithms like linear models, tree-based methods, or
                deep learning networks. Train using historical data and validate
                with cross-validation techniques.
              </p>
            </Col>
            <Col md={6}>
              <Row>
                {["🤖", "📈"].map((icon, i) => (
                  <Col xs={6} key={i} className="mb-3 text-center">
                    <span style={{ fontSize: "2rem" }}>{icon}</span>
                    <p className="mt-2">
                      {i === 0 ? "Model Building" : "Evaluation"}
                    </p>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
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
                  src="/imgs/homepage 4 or AI 2.jpg"
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

"use client"; // This marks the file as a client-side component

import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Footer from '../components/Footer'; // Import the Footer component
import Image from 'next/image'; 

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update the scroll progress based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Scroll Progress Circle */}
      <div
        className="position-absolute top-50 end-0 translate-middle-y"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          border: '5px solid #10b981',
          transition: 'all 0.3s ease',
          marginRight: '15px',
          transform: `scale(${1 + (scrollProgress / 200)})`,
          opacity: scrollProgress > 0 ? 1 : 0, // Hide when no scroll
        }}
      >
        <div
          style={{
            width: `${scrollProgress}%`,
            height: '100%',
            backgroundColor: '#10b981',
            borderRadius: '50%',
            transition: 'width 0.1s ease',
          }}
        />
      </div>

      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          paddingTop: '140px',
          paddingBottom: '80px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
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
      <Container style={{ textAlign: 'left', paddingLeft: '6vw', paddingTop: '50vh' }}>
  <h1>
Secure, Scalable, and Smarter Cloud    
  </h1>
  <p className="lead">
    Transform your IT with cloud-native architecture built for speed, resilience, and innovation.
v  </p>
</Container>
 
      </section>

      {/* Solutions */}
    {/* Solutions */}
<section id="solutions" className="py-5">
  <Container>
    <h2 className="text-center mb-4">Our Cloud Solutions</h2>
    <p className="text-center text-muted mb-5">
Cloud computing is more than just storage—it's about driving digital transformation. Our cloud experts help businesses build agile, scalable, and secure cloud ecosystems. We deliver custom solutions including virtual machines, containers, storage, databases, disaster recovery, and cloud-native application development. Our team ensures compliance with regulatory frameworks like GDPR, HIPAA, and SOC2 while reducing IT costs and time-to-market. Whether you need private cloud security or the flexibility of public and hybrid models, Kodeo Software Technology ensures performance, security, and value.</p>

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
          <Card.Title className="fw-semibold mb-3">{item.title}</Card.Title>
          <ul style={{ paddingLeft: "18px" }}>
            {item.points.map((point, i) => (
              <li key={i} style={{ fontSize: "0.9rem", marginBottom: "6px" }}>
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
              <li key={i} style={{ fontSize: "0.95rem", marginBottom: "6px" }}>
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
<section className="py-5" style={{ backgroundColor: '#0a0a23', color: '#fff' }}>
  <Container>
    <Row className="align-items-center">
      {/* Left: Form Card */}
      <Col md={6}>
        <div style={{
          background: '#501A78',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)'
        }}>
          <h4 className="fw-bold text-white mb-3">Let’s Get Started</h4>
          <p className="text-white-50 mb-4">Just give a try with our 30min free consultation</p>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" placeholder="Enter your name" className="rounded-pill px-4 py-2" />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Control type="text" placeholder="Phone number" className="rounded-pill px-4 py-2" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Email ID" className="rounded-pill px-4 py-2" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-4" controlId="formIdea">
              <Form.Control as="textarea" rows={2} placeholder="Your idea or requirements" className="rounded-pill px-4 py-2" />
            </Form.Group>
            <Button type="submit" className="w-100 rounded-pill py-2" style={{ background: '#f43f5e', border: 'none' }}>
              Submit
            </Button>
          </Form>
        </div>
      </Col>

      {/* Right: Image */}
      <Col md={6} className="d-none d-md-block">
        <div className="text-center">
          <Image
            src="/imgs/cloud 2.png" // Make sure this path matches your image name and location
            alt="Consultation"
            width={600}
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

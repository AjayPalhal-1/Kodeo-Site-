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
            src="/imgs/DevOps 3.png" // Path to your image
            alt="Cybersecurity"
            layout="fill" // Makes the image cover the entire section
            objectFit="cover" // Ensures the image covers the section without distortion
            objectPosition="center" // Keeps the image centered
          />
        </div>

        {/* Hero Text */}
      <Container style={{ textAlign: 'left', paddingLeft: '6vw', paddingTop: '50vh' }}>
  <h1>
From Code to Deployment—Faster, Smarter, Safer 
  </h1>
  <p className="lead">
DevOps solutions that streamline workflows, accelerate time-to-market, and ensure stability.  </p>
</Container>
 
      </section>

      {/* Solutions */}
    {/* Solutions */}
<section id="solutions" className="py-5">
  <Container>
    <h2 className="text-center mb-4">Our DevOps Solutions</h2>
    <p className="text-center text-muted mb-5">
Kodeo Software Technology helps teams build, test, and deploy software with confidence using a robust DevOps framework. Our solutions integrate source control, automated builds, unit testing, artifact management, and deployment automation under a unified CI/CD pipeline. We work with leading tools like GitLab CI, CircleCI, Azure DevOps, and Bitbucket Pipelines. Our containerization strategy uses Docker and Kubernetes to ensure consistency and scalability across environments. We also offer infrastructure automation using tools like Ansible, Chef, and Pulumi. DevOps isn’t just about speed—it’s about building resilient systems that adapt, scale, and recover intelligently.</p>

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
    <h2 className="text-center mb-5 fw-bold">DevOps Development Process</h2>

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

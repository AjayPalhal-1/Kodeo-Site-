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
            src="/imgs/cyber 1.png" // Path to your image
            alt="Cybersecurity"
            layout="fill" // Makes the image cover the entire section
            objectFit="cover" // Ensures the image covers the section without distortion
            objectPosition="center" // Keeps the image centered
          />
        </div>

        {/* Hero Text */}
      <Container style={{ textAlign: 'left', paddingLeft: '6vw', paddingTop: '50vh' }}>
  <h1>
    Shielding Your Business from Evolving Cyber Threats <br />
    
  </h1>
  <p className="lead">
Secure your systems, protect your data, and stay one step ahead in a connected world.  </p>
</Container>
 
      </section>

      {/* Solutions */}
    {/* Solutions */}
<section id="solutions" className="py-5">
  <Container>
    <h2 className="text-center mb-4">Our Cybersecurity Solutions</h2>
    <p className="text-center text-muted mb-5">
In today’s hyper-digital world, cybersecurity is the cornerstone of every organization’s trust and stability. Businesses are more vulnerable than ever to sophisticated cyber threats such as ransomware, phishing, DDoS attacks, and insider threats. At Kodeo software technology, we provide comprehensive cybersecurity services that ensure your data, networks, and digital assets are always protected. Our solutions are built on a foundation of next-generation firewalls, intrusion detection systems (IDS/IPS), endpoint security, and advanced threat analytics. We don’t just prevent attacks—we detect, respond, and adapt in real time. Whether you are a startup or an enterprise, we tailor protection that meets your compliance standards and industry requirements. Our zero-trust architecture and encrypted VPNs offer secure, remote access without compromising your infrastructure. We empower businesses to be proactive, not reactive, in the face of growing threats. From banking and healthcare to retail and education, we help build resilient systems that are future-ready and cyber-aware.     </p>

 <Row>
  {[
    {
      title: "Network Security",
      image: "/Services/subss/network_security.png",
      points: [
        "Protect your core infrastructure from unauthorized access and threats.",
        "Utilize advanced firewalls, intrusion detection/prevention (IDS/IPS), and secure VPNs.",
        "Implement Zero Trust Architecture to ensure only verified access to your systems.",
      ],
    },
    {
      title: "Endpoint Protection",
      image: "/Services/subss/endpoint.avif",
      points: [
        "Safeguard all connected devices from malware and ransomware attacks.",
        "Use next-gen antivirus, patch management, and device encryption.",
        "Protect remote workers and on-site devices with unified security policies.",
      ],
    },
    {
      title: "Cloud Security",
      image: "/Services/subss/cloud1.jpeg",
      points: [
        "Secure your cloud data and applications from breaches and leaks.",
        "Enable identity management, cloud workload protection, and real-time monitoring.",
        "Ensure compliance across AWS, Azure, and Google Cloud platforms.",
      ],
    },
    {
      title: "Threat Intelligence",
      image: "/Services/subss/threat intelligence 4.jpeg",
      points: [
        "Stay ahead of hackers with real-time threat feeds and vulnerability data.",
        "Get actionable insights from dark web monitoring, malware analysis, and behavioural analytics.",
        "Adapt your defences as new attack patterns and threat actors emerge.",
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
    <h2 className="text-center mb-5">Development Process</h2>
    {[
      {
        title: "Risk Assessment & Analysis",
        description: `Identify security gaps and evaluate vulnerabilities in networks, applications, and systems. Helps organizations prioritize threats and build a strategic risk management plan.`,
        icons: ["bi-shield-lock", "bi-graph-up-arrow"],
      },
      {
        title: "Penetration Testing & Ethical Hacking",
        description: `Simulate real-world cyberattacks to uncover system flaws and weaknesses. Strengthens security posture with actionable insights before attackers can exploit gaps.`,
        icons: ["bi-bug", "bi-crosshair2"],
      },
      {
        title: "Security Auditing & Compliance",
        description: `Assess systems against standards like ISO, GDPR, HIPAA, and PCI-DSS. Ensures regulatory compliance and minimizes legal and reputational risks.`,
        icons: ["bi-clipboard-data", "bi-check2-circle"],
      },
      {
        title: "Vulnerability Scanning",
        description: `Use automated tools to detect software bugs, outdated patches, and misconfigurations. Schedule regular scans to proactively identify exploitable points.`,
        icons: ["bi-exclamation-triangle", "bi-search"],
      },
    ].map((item, index) => (
      <Row key={index} className="mb-5 align-items-center">
        <Col md={6}>
          <h5 className="fw-semibold">{item.title}</h5>
          <p>{item.description}</p>
        </Col>
        <Col md={6}>
          <Row>
            {item.icons.map((icon, i) => (
              <Col xs={6} key={i} className="mb-3">
                <div className="text-center">
                  <div
                    style={{
                      backgroundColor: "#ff007f",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                      fontSize: "24px",
                      color: "#fff",
                    }}
                  >
                    <i className={`bi ${icon}`}></i>
                  </div>
                  <p className="mt-2 text-dark" style={{ fontSize: "0.9rem" }}>
                    {icon
                      .replace("bi-", "")
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
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
            src="/imgs/cyber2.png" // Make sure this path matches your image name and location
            alt="Consultation"
            width={400}
            height={600}
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

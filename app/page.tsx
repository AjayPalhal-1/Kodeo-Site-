"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link"; // Ensure this import is at the top

import { useEffect, useState } from "react";

export default function Home() {
  // Define this above your component return
  const heroSlides = [
    {
      image: "/kodeo-data/home/nextgen3.png",
      heading: "Next-Gen Solutions for the Digital Frontier",
      text: "With a foundation in innovation and a vision for tomorrow, we craft agile, scalable, and smart technologies that drive business success in the digital era.",
    },
    {
      image: "/kodeo-data/home/future1.png",
      heading: "Shaping the Future with Scalable Solutions",
      text: "Crafting innovative solutions that scale with your digital needs for a seamless experience.",
    },
    {
      image: "/kodeo-data/home/smart3.png",
      heading: "Smart, Future-Ready Digital Transformation",
      text: "We design intelligent solutions that prepare businesses for the future and keep them ahead in the digital world.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // --- Testimonials Carousel State ---
  const testimonials = [
    {
      name: "Aarav Mehta",
      company: "CTO, FinEdge Solutions",
      feedback:
        "Their AI-driven analytics transformed our decision-making process. The delivery was smooth, and the results exceeded expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sophia Williams",
      company: "CEO, HealthSync Tech",
      feedback:
        "An exceptional team! They built a secure and scalable platform for us in record time. Their expertise in cloud and cybersecurity is unmatched.",
      rating: 5,
    },
    {
      name: "Akash Patel",
      company: "Head of Engineering, SmartLogix",
      feedback:
        "Their team delivered a robust, future-ready SaaS platform. Seamless integration, clean UI, and excellent support—couldn’t ask for more.",
      rating: 5,
    },
    {
      name: "Maya Chen",
      company: "COO, NeoCommerce",
      feedback:
        "We trusted them with our AI-powered recommendation engine, and the results were phenomenal. Sales are up, and customers are happier!",
      rating: 5,
    },
    {
      name: "Olivia Martinez",
      company: "Founder, InnovateX",
      feedback:
        "They developed a custom AI chatbot for us that revolutionized our customer support. Brilliant work with flawless execution.",
      rating: 5,
    },
    {
      name: "Rahul Iyer",
      company: "Director of IT, VestaCorp",
      feedback:
        "Their cybersecurity solutions were excellent. We passed audits with no issues thanks to their team.",
      rating: 5,
    },
  ];
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);
  const [testimonialSlide, setTestimonialSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // --- Why Choose Us Carousel State ---
  const whyChooseUsCards = [
    {
      title: "24/7 Customer Support",
      desc: "Fixed 1000+ tech problems efficiently.",
      icon: "bi-headset",
    },
    {
      title: "Fast Response Time",
      desc: "Average query resolved within 30 minutes.",
      icon: "bi-clock",
    },
    {
      title: "Global Client Reach",
      desc: "Serving businesses in 10+ countries worldwide.",
      icon: "bi-globe",
    },
    {
      title: "Certified Security Experts",
      desc: "Our team holds top industry certifications for your peace of mind.",
      icon: "bi-shield-lock",
    },
    {
      title: "Proactive Monitoring",
      desc: "We detect and resolve issues before they impact your business.",
      icon: "bi-graph-up-arrow",
    },
  ];
  // Responsive: 3 per slide on desktop, 1 per slide on mobile
  const [whySlide, setWhySlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const whyTotalSlides = whyChooseUsCards.length;

  useEffect(() => {
    // Responsive: update cardsPerSlide on resize
    function handleResize() {
      setCardsPerSlide(window.innerWidth < 768 ? 1 : 3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Reset slide if cardsPerSlide changes
    setWhySlide(0);
  }, [cardsPerSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWhySlide((prev) => (prev + 1) % whyChooseUsCards.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Helper to rotate array
  function rotateArray(arr: any[], n: number) {
    return arr.slice(n).concat(arr.slice(0, n));
  }

  // Touch event handlers for swipe
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const extendedCards = [
    whyChooseUsCards[whyChooseUsCards.length - 1],
    ...whyChooseUsCards,
    whyChooseUsCards[0],
  ];
  const cardWidth = 270; // px, including gap
  const containerWidth = cardsPerSlide * cardWidth;
  // Start at index 1 (first real card)
  const [slideIndex, setSlideIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update slideIndex when whySlide changes (for auto/dot/swipe)
  useEffect(() => {
    setIsTransitioning(true);
    setSlideIndex(whySlide + 1);
  }, [whySlide]);

  // Handle transition end for infinite loop
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (slideIndex === 0) {
      // Jump to last real card
      setSlideIndex(whyChooseUsCards.length);
    } else if (slideIndex === whyChooseUsCards.length + 1) {
      // Jump to first real card
      setSlideIndex(1);
    }
  };

  // Update whySlide when slideIndex changes via swipe
  useEffect(() => {
    if (!isTransitioning) {
      if (slideIndex === 0) {
        setTimeout(() => setWhySlide(whyChooseUsCards.length - 1), 0);
      } else if (slideIndex === whyChooseUsCards.length + 1) {
        setTimeout(() => setWhySlide(0), 0);
      } else {
        setTimeout(() => setWhySlide(slideIndex - 1), 0);
      }
    }
  }, [slideIndex, isTransitioning]);

  // Touch event handlers for swipe (update slideIndex directly)
  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  }
  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    setTouchEndX(e.touches[0].clientX);
  }
  function handleTouchEnd() {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left
          setIsTransitioning(true);
          setSlideIndex((prev) => prev + 1);
        } else {
          // Swipe right
          setIsTransitioning(true);
          setSlideIndex((prev) => prev - 1);
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  }

  // Centered carousel logic for desktop
  let visibleCards: {
    title: string;
    desc: string;
    icon: string;
    pos: number;
  }[] = [];
  if (cardsPerSlide === 3) {
    // Desktop: [prev, active, next]
    const prevIdx =
      (whySlide - 1 + whyChooseUsCards.length) % whyChooseUsCards.length;
    const nextIdx = (whySlide + 1) % whyChooseUsCards.length;
    visibleCards = [
      { ...whyChooseUsCards[prevIdx], pos: -1 },
      { ...whyChooseUsCards[whySlide], pos: 0 },
      { ...whyChooseUsCards[nextIdx], pos: 1 },
    ];
  } else {
    // Mobile: [active]
    visibleCards = [{ ...whyChooseUsCards[whySlide], pos: 0 }];
  }

  // --- True sliding carousel logic for desktop/mobile ---
  // For desktop: center active card, for mobile: show only active
  let slideIndexForTrueSlide = whySlide;
  if (cardsPerSlide === 3) {
    // Center the active card
    slideIndexForTrueSlide = whySlide;
  } else {
    // Mobile: show only active
    slideIndexForTrueSlide = whySlide;
  }

  return (
    <>
      {/* Hero Section */}


      {/* Hero Background Image */}

      <section
        className="hero-section text-white position-relative d-flex align-items-end"
        style={{
          backgroundImage: `url('${heroSlides[currentIndex].image}')`,
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Text Positioned Lower on Image */}
        <div className="w-100 px-3 px-md-5 pb-2">
          <div
            className="text-start"
            style={{ maxWidth: "700px", zIndex: 2, position: "relative" }}
          >
            <h1 className="fw-bold display-5 mb-3">
              {heroSlides[currentIndex].heading}
            </h1>
            <p className="lead text-light">{heroSlides[currentIndex].text}</p>
          </div>

          {/* Carousel Dots */}
          <div className="mt-4 d-flex gap-2">
            {heroSlides.map((_, i) => (
              <span
                key={i}
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor:
                    i === currentIndex ? "#ff007f" : "rgba(255,255,255,0.5)",
                  borderRadius: "50%",
                  display: "inline-block",
                  transition: "background-color 0.3s",
                }}
              ></span>
            ))}
          </div>
        </div>
      </section>






      {/* Trusted By Section */}

      <section
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(90deg, #2a005f, #4e007e)", // Gradient background
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <h4 className="mb-4 fw-bold fs-2">
          Trusted by Industry Giants Worldwide
        </h4>

        <div
          className="position-relative overflow-hidden"
          style={{ height: "110px" }}
        >
          <div
            className="d-flex align-items-center scroll-track"
            style={{
              whiteSpace: "nowrap",
              animation: "scrollLeft 20s linear infinite",
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...Array(2)].flatMap((_, index) =>
              [
                "accs",
                "beer",
                "foton",
                "hyatt",
                "mehta",
                "nagebaba",
                "nmp",
                "ruby",
                "shar",
                "sula",
              ].map((logo, i) => (
                <div
                  key={`${index}-${i}`}
                  className="mx-3 px-3 py-2 shadow-lg d-inline-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#fff", // White card
                    width: 110,
                    height: 110,
                    borderRadius: "12px",
                  }}
                >
                  <img
                    src={`/clogo/${logo}.png`}
                    alt={logo}
                    style={{
                      maxWidth: "90px",
                      maxHeight: "90px",
                      objectFit: "contain",
                      // filter: "grayscale(1) brightness(1.2)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Smooth Loop Animation */}
        <style jsx>{`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .scroll-track {
            width: max-content;
          }
        `}</style>
      </section>

      {/* Operational Excellence Section */}

      <section className="row m-0 align-items-center py-5 px-4 bg-white text-dark">
        {/* Image column - shown first on mobile */}
        <div className="col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
          <img
            src="/Images/Original/hom.png"
            alt="AI and Cybersecurity Illustration"
            className="img-fluid"
            style={{ maxHeight: "400px", borderRadius: "16px" }}
          />
        </div>

        {/* Text column - shown second on mobile */}
        <div className="col-md-6 order-2 order-md-1">
          <h2 className="fw-bold mb-3">
            Expert IT solutions in software development, AI ML and cyber
            security.
          </h2>
          <p>
            Digital transformation isn’t just a trend — it’s a necessity. Our
            team brings together the latest advancements in AI and ML with agile
            software development practices to create dynamic, data-driven
            solutions. From automated customer experiences to intelligent
            analytics platforms and fortified security architectures, we tailor
            every project to your specific goals. Whether you're a startup or an
            enterprise, we deliver flexible, scalable solutions that grow with
            your business and adapt to evolving technologies.
          </p>
          <button className="btn btn-outline-danger mt-3 px-4">Explore</button>
        </div>
      </section>

      {/* Services Section */}

      <section className="bg-light py-5 px-4">
        <h3 className="text-center fw-bold mb-5 text-dark">
          Services Designed for Impact
        </h3>
        <div className="row">
          {[
            {
              title: "Enterprise Security Architecture",
              image: "/Services/ss1/enterprise-security-stock.jpg",
              description:
                "Secure your entire tech ecosystem with end-to-end cybersecurity tailored to your operations.",
              route: "/cyber",
            },
            {
              title: "AI & ML Development",
              image: "/Images/Original/ai-ml development.png",
              description:
                "From predictive analytics to intelligent automation, we bring data science to life with scalable AI/ML applications.",
              route: "/aiml",
            },
            {
              title: "End-to-End App Development",
              image: "/Images/Original/end to end.png",
              description:
                "We design, build, and deploy high-performing web and mobile applications using modern full stack technologies.",
              route: "/fullstack",
            },
            {
              title: "Cloud Infrastructure Services",
              image: "/Images/Original/cloud infrastucture services.png",
              description:
                "Migrate, manage, and scale your business with robust cloud solutions built on AWS, Azure, or Google Cloud.",
              route: "/cloud",
            },
            {
              title: "DevOps Transformation",
              image: "/Images/Original/devops.png",
              description:
                "Streamline your development lifecycle with CI/CD pipelines, infrastructure automation, and agile DevOps practices.",
              route: "/devops",
            },
            {
              title: "Blockchain Solutions",
              image: "/Images/Original/blockchain.png",
              description:
                "Implement secure and decentralized applications using blockchain technology.",
              route: "/", // Update this if you have a page for blockchain
            },
          ].map((service, i) => (
            <div key={i} className="col-md-4 mb-4">
              <Link href={service.route} passHref>
                <div
                  className="card text-white h-100 shadow position-relative"
                  style={{
                    backgroundColor: "#1b1b2f",
                    borderRadius: 16,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  <div className="card-body text-center">
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "4/3",
                        maxWidth: 320,
                        maxHeight: 220,
                        margin: "0 auto 25px auto",
                        marginTop: 10,
                        borderRadius: 16,
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: 16,
                          display: "block",
                        }}
                      />
                    </div>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}


   <section className="py-5 px-4 text-white position-relative" style={{ overflow: "hidden" }}>
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="position-absolute w-100 h-100 object-fit-cover"
    style={{ top: 0, left: 0, zIndex: 0 }}
  >
    <source src="/bcg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay to darken video slightly */}
  <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, background: "rgba(42, 0, 66, 0.7)", zIndex: 1 }}></div>

  {/* Content Container */}
  <div className="container-fluid position-relative" style={{ zIndex: 2 }}>
    <div className="row align-items-start">
      {/* LEFT TEXT CONTENT */}
      <div className="col-lg-6 mb-4">
        <h2 className="fw-bold mb-3">Transforming Expertise Into Business Results</h2>
        <p>
          We specialize in converting knowledge into action. Through expert training,
          scalable digital solutions, and strategic consulting, Kodeo Software Technology
          helps organizations across industries innovate safely and grow confidently in a
          fast-changing tech landscape.
        </p>
        <ul className="list-unstyled mt-4">
          <li>✔️ Bespoke Training for Operational Success</li>
          <li>✔️ Solutions Engineered for Scale and Speed</li>
          <li>✔️ Cross-Sector Experience You Can Trust</li>
          <li>✔️ Support That Never Sleeps</li>
        </ul>
      </div>

      {/* RIGHT: 3 CARDS IN HORIZONTAL SCROLL */}
      <div className="col-lg-6 mt-5 mt-lg-0">
        <div
          style={{
            minHeight: 220,
            width: containerWidth,
            overflow: "hidden",
            margin: "0 auto",
            position: "relative",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="d-flex gap-4 align-items-stretch"
            style={{
              width: extendedCards.length * cardWidth,
              transform: `translateX(-${slideIndex * cardWidth - (cardsPerSlide === 3 ? cardWidth : 0)}px)`,
              transition: isTransitioning ? "transform 0.5s cubic-bezier(.4,2,.6,1)" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCards.map((item, i) => {
              let pos = i - slideIndex;
              if (pos < -1) pos += extendedCards.length;
              if (pos > 1) pos -= extendedCards.length;

              let style = {
                background: "rgba(255, 255, 255, 0.68)",
                backdropFilter: "blur(10px)",
                minWidth: "250px",
                maxWidth: "250px",
                color: "black",
                flexShrink: 0,
                border: "1px solid rgba(255, 255, 255, 0.2)",
                position: "relative" as "relative",
                opacity: pos === 0 ? 1 : 0.4,
                transform: pos === 0 ? "scale(1)" : "scale(0.92)",
                zIndex: pos === 0 ? 2 : 1,
                transition: "all 0.5s cubic-bezier(.4,2,.6,1)",
              };

              return (
                <div key={item.title + i} className="p-4 rounded-4 shadow" style={style}>
                  <div
                    style={{
                      backgroundColor: "#ff007f",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "24px",
                      marginBottom: "15px",
                    }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="d-flex justify-content-center mt-3 gap-2">
          {Array.from({ length: whyChooseUsCards.length }).map((_, idx) => (
            <span
              key={idx}
              onClick={() => {
                setIsTransitioning(true);
                setSlideIndex(idx + 1);
              }}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: idx === whySlide ? "#ff007f" : "#ccc",
                display: "inline-block",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Hide Scrollbar */}
  <style jsx>{`
    ::-webkit-scrollbar {
      display: none;
    }
    video {
      object-fit: cover;
    }
  `}</style>
</section>


      {/* Recent Projects */}

      <section className="py-5 px-4 bg-dark text-white">
        <h3 className="text-center mb-5">OUR RECENT PROJECTS</h3>
        <div className="row">
          {[
            {
              img: "/Frame 188.png",
              alt: "EV Charging Dashboard",
            },
            {
              img: "/Frame 189.png",
              alt: "Blogify MERN App",
            },
            {
              img: "/Frame 190.png",
              alt: "IoT Smart Station",
            },
          ].map((project, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div
                className="rounded shadow-sm overflow-hidden"
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  height: "100%",
                  transition: "transform 0.3s",
                }}
              >
                <Image
                  src={project.img}
                  alt={project.alt}
                  width={500}
                  height={300}
                  className="w-100 project-img"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}

      <section className="bg-light py-5 px-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1 text-dark">What our clients say</h2>
            <p className="text-muted">Stories of Transformation</p>
          </div>
          <a
            href="#"
            className="text-dark d-flex align-items-center"
            style={{ textDecoration: "none", fontWeight: 500 }}
          ></a>
        </div>

        {/* Responsive Testimonial Cards */}
        <div className="row d-none d-md-flex">
          {testimonials
            .slice(
              testimonialSlide * testimonialsPerSlide,
              testimonialSlide * testimonialsPerSlide + testimonialsPerSlide
            )
            .map((review, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div
                  className="p-4 text-white rounded h-100"
                  style={{
                    backgroundColor: "#2b003e",
                    minHeight: 180,
                  }}
                >
                  <div className="mb-2">
                    {"★".repeat(review.rating)}
                    <span className="text-muted" style={{ opacity: 0.5 }}>
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-person-circle fs-3 text-white me-3"></i>
                    <div>
                      <strong>{review.name}</strong>
                      <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                        {review.company}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.95rem", opacity: 0.9 }}>
                    {review.feedback}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Mobile Slider */}
        <div
          className="d-md-none overflow-auto"
          style={{ paddingBottom: "1rem" }}
        >
          <div
            className="d-flex"
            style={{ gap: "1rem", paddingRight: "1rem", paddingLeft: "0.3rem" }}
          >
            {testimonials.map((review, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 88%", // One full card + small peek of next
                  minWidth: "88%",
                }}
              >
                <div
                  className="p-4 text-white rounded"
                  style={{
                    backgroundColor: "#2b003e",
                    minHeight: 180,
                  }}
                >
                  <div className="mb-2">
                    {"★".repeat(review.rating)}
                    <span className="text-muted" style={{ opacity: 0.5 }}>
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-person-circle fs-3 text-white me-3"></i>
                    <div>
                      <strong>{review.name}</strong>
                      <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                        {review.company}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.95rem", opacity: 0.9 }}>
                    {review.feedback}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="d-flex justify-content-center mt-3 gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <span
              key={idx}
              onClick={() => setTestimonialSlide(idx)}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: idx === testimonialSlide ? "#ff007f" : "#ccc",
                display: "inline-block",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
            ></span>
          ))}
        </div>
      </section>

      {/* Place your global style here, just before the closing fragment */}
    </>
  );
}

"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";

export default function Home() {

  const bgImages = ["/Services/ss1/homepage 2.jpeg", "/Services/ss1/homepage 3.jpeg", "/Services/ss1/homepage 4.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
     <section
      className="text-white d-flex align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(to right, rgba(20,0,60,0.9), rgba(0,0,60,0.9)), url('${bgImages[currentIndex]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        paddingLeft: "8%",
        paddingRight: "8%",
        transition: "background-image 0.6s ease-in-out",
      }}
    >
      <div className="w-100">
        <div className="text-start" style={{ maxWidth: "700px" }}>
          <h1 className="fw-bold display-5 mb-3">
            <span style={{ color: "#ffff" }}>Next-Gen Solutions for </span>
            <br />
            the Digital Frontier
          </h1>
          <p className="lead text-light">
            With a foundation in innovation and a vision for tomorrow, we craft
            agile, scalable, and smart technologies that drive business success
            in the digital era.
          </p>
        </div>

        {/* Carousel Dots */}
        <div className="mt-4">
          <div className="d-flex gap-2">
            {bgImages.map((_, i) => (
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
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">
            Expert IT solutions in AI ML, software development and cyber
            security.{" "}
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

        <div className="col-md-6 text-center">
          <img
            src="/Images/Original/hom.png"
            alt="AI and Cybersecurity Illustration"
            className="img-fluid"
            style={{ maxHeight: "300px", borderRadius: "16px" }}
          />
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
        image: "/Images/Original/enterprise security architecture.png",
        description:
          "Secure your entire tech ecosystem with end-to-end cybersecurity tailored to your operations.",
      },
      {
        title: "AI & ML Development",
        image: "/Images/Original/ai-ml development.png",
        description:
          "From predictive analytics to intelligent automation, we bring data science to life with scalable AI/ML applications.",
      },
      {
        title: "End-to-End App Development",
        image: "/Images/Original/end to end.png",
        description:
          "We design, build, and deploy high-performing web and mobile applications using modern full stack technologies.",
      },
      {
        title: "Cloud Infrastructure Services",
        image: "/Images/Original/cloud infrastucture services.png",
        description:
          "Migrate, manage, and scale your business with robust cloud solutions built on AWS, Azure, or Google Cloud.",
      },
      {
        title: "DevOps Transformation",
        image: "/Images/Original/devops.png",
        description:
          "Streamline your development lifecycle with CI/CD pipelines, infrastructure automation, and agile DevOps practices.",
      },
      {
        title: "Blockchain Solutions",
        image: "/Images/Original/blockchain.png",
        description:
          "Implement secure and decentralized applications using blockchain technology.",
      },
    ].map((service, i) => (
      <div key={i} className="col-md-4 mb-4">
        <div
          className="card text-white h-100 shadow position-relative"
          style={{
            backgroundColor: "#1b1b2f",
            borderRadius: 16,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
          }}
        >
          <div className="card-body text-center">
            <div
              style={{
                height: 190,
                marginBottom: 25,
                marginTop: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: 12,
                }}
              />
            </div>
            <h5 className="card-title">{service.title}</h5>
            <p className="card-text">{service.description}</p>
          </div>
         
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Why Choose Us Section */}
      <section
        className="py-5 px-4 text-white"
        style={{
          background: "linear-gradient(to right, #2a0042, #4e007e)",
          overflow: "hidden",
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-start">
            {/* LEFT TEXT CONTENT */}
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold mb-3">
                Transforming Expertise Into Business Results
              </h2>
              <p>
                We specialize in converting knowledge into action. Through
                expert training, scalable digital solutions, and strategic
                consulting, Kodeo Software Technology helps organizations across
                industries innovate safely and grow confidently in a
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
            <div className="col-lg-6" style={{ marginTop: "120px" }}>
              <div
                className="d-flex gap-4 pb-3"
                style={{
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {[
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
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-4 shadow"
                    style={{
                      background: "rgba(255, 255, 255, 0.68)",
                      backdropFilter: "blur(10px)",
                      minWidth: "250px",
                      maxWidth: "250px",
                      color: "black",
                      flexShrink: 0,
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      position: "relative",
                    }}
                  >
                    {/* Icon */}
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
                    <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hide Scrollbar Globally */}
        <style jsx>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Recent Projects */}

      <section className="py-5 px-4 bg-dark text-white">
        <h3 className="text-center mb-5">OUR RECENT PROJECTS</h3>
        <div className="row">
          {[
            {
              img: "/bcci.jpg",
              alt: "EV Charging Dashboard",
            },
            {
              img: "/bcci.jpg",
              alt: "Blogify MERN App",
            },
            {
              img: "/bcci.jpg",
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
                  className="w-100"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    borderRadius: "16px",
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
          >
            View More <span className="ms-2">→</span>
          </a>
        </div>

        <div className="row">
          {[
            {
              name: "Marco Cornacchia",
              company: "Agarwal Hospitals",
              feedback:
                "Absolutely stunning designs! Transformed my space beautifully with elegance. Highly recommend their expertise!",
              rating: 5,
              avatar: "/users/avatar1.jpg",
            },
            {
              name: "Marco Cornacchia",
              company: "Agarwal Hospitals",
              feedback:
                "Absolutely stunning designs! Transformed my space beautifully with elegance. Highly recommend their expertise!",
              rating: 5,
              avatar: "/users/avatar1.jpg",
            },
            {
              name: "Marco Cornacchia",
              company: "Agarwal Hospitals",
              feedback:
                "Absolutely stunning designs! Transformed my space beautifully with elegance. Highly recommend their expertise!",
              rating: 5,
              avatar: "/users/avatar1.jpg",
            },
          ].map((review, i) => (
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
                  <img
                    src={review.avatar}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-circle me-3"
                  />
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

        {/* Centered Last 2 Cards with gap */}
        <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
          {[4, 5].map((i) => (
            <div key={i} className="col-md-4" style={{ maxWidth: "360px" }}>
              <div
                className="p-4 text-white rounded h-100"
                style={{
                  backgroundColor: "#2b003e",
                  minHeight: 180,
                }}
              >
                <div className="mb-2">
                  {"★".repeat(5)}
                  <span className="text-muted" style={{ opacity: 0.5 }}></span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="/users/avatar1.jpg"
                    alt="Marco"
                    width={40}
                    height={40}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <strong>Marco Cornacchia</strong>
                    <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                      Agarwal Hospitals
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "0.95rem", opacity: 0.9 }}>
                  Absolutely stunning designs! Transformed my space beautifully
                  with elegance. Highly recommend their expertise!
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

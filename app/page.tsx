"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(to right, rgba(10,10,50,0.9), rgba(30,0,80,0.9)), url('/bg-circuit.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="display-4 fw-bold mb-4">
            We Are At The Forefront of Technology
          </h1>
        </div>
      </section>

      {/* Trusted By Section */}
      <section
        className="py-5 text-white text-center"
        style={{ background: "linear-gradient(90deg, #2a005f, #4e007e)" }}
      >
        <h4 className="mb-4 fw-bold">Trusted by Industry Giants Worldwide</h4>
        <div
          className="position-relative overflow-hidden"
          style={{ height: "70px" }}
        >
          <div
            className="d-flex align-items-center"
            style={{
              whiteSpace: "nowrap",
              animation: "scrollLeft 25s linear infinite",
            }}
          >
            {["ebco", "elica", "faber", "franke", "h1", "jaguar", "last"].map(
              (logo, i) => (
                <div
                  key={i}
                  className="mx-4 px-3 py-2 rounded bg-white bg-opacity-10 shadow-sm"
                  style={{ transition: "transform 0.3s" }}
                >
                  <img
                    src={`/assets/logo/${logo}.png`}
                    alt={logo}
                    style={{
                      width: "80px", // Set fixed width
                      height: "80px", // Set fixed height
                      objectFit: "contain", // Ensure the image maintains its aspect ratio
                      filter: "grayscale(1) brightness(1.2)",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              )
            )}
          </div>
        </div>
        <style jsx>{`
          @keyframes scrollLeft {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </section>

      {/* Operational Excellence Section */}
      <section className="row m-0 align-items-center py-5 px-4 bg-white text-dark">
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">
            Expert IT Solutions in AI, ML, Cybersecurity & Development
          </h2>
          <p>
            At the forefront of digital transformation, we deliver intelligent
            IT solutions that harness the power of Artificial Intelligence,
            Machine Learning, and advanced Software Development. From predictive
            models and automation to scalable custom software and
            enterprise-grade cybersecurity, we help businesses innovate, secure,
            and grow in a data-driven world.
          </p>
          <button className="btn btn-outline-danger mt-3 px-4">Explore</button>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="/next.svg"
            alt="AI and Cybersecurity Illustration"
            className="img-fluid"
            style={{ maxHeight: "300px", borderRadius: "16px", opacity: 0.1 }}
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
            "Cyber Security",
            "AI/ML Solutions",
            "Full Stack Development",
            "Cloud Consulting",
            "DevOps Engineering",
            "Blockchain Solutions",
          ].map((service, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div
                className="card text-white h-100 shadow position-relative"
                style={{ backgroundColor: "#1b1b2f" }}
              >
                <div className="card-body text-center">
                  <img
                    src={`/assets/logo${i + 1}.png`}
                    alt={service}
                    height={60}
                    className="mb-3"
                  />
                  <h5 className="card-title">{service}</h5>
                  <p className="card-text">
                    Premium quality {service.toLowerCase()} tailored for scale.
                  </p>
                </div>
                <div
                  className="position-absolute bottom-0 end-0 p-3"
                  style={{ cursor: "pointer" }}
                >
                  <div
                    style={{
                      backgroundColor: "#ff007f",
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    &rarr;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="text-white text-center py-5 px-4"
        style={{ background: "linear-gradient(to right, #390064, #660077)" }}
      >
        <h3 className="fw-bold mb-4">
          Why Industry Leaders Choose Kodeosoftech
        </h3>
        <p>
          We drive innovation, security and digital transformation at scale.
        </p>
        <div className="row mt-4">
          {[
            { title: "Award Winning Team", icon: "award" },
            { title: "24/7 Client Support", icon: "support" },
            { title: "100+ Clients Served", icon: "clients" },
          ].map((item, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="bg-white text-dark p-4 rounded shadow">
                <h5 className="fw-semibold">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-5 px-4 bg-dark text-white">
        <h3 className="text-center mb-5">OUR RECENT PROJECTS</h3>
        <div className="row">
          {[1, 2, 3].map((num) => (
            <div key={num} className="col-md-4 mb-4">
              <div className="bg-light rounded overflow-hidden shadow-sm">
                <Image
                  src={`/projects/project${num}.jpg`}
                  alt={`Project ${num}`}
                  width={400}
                  height={250}
                  className="w-100"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-light py-5 px-4">
        <h3 className="text-center mb-5 text-dark">What our clients say</h3>
        <div className="row">
          {[
            {
              name: "Anjali",
              feedback:
                "Absolutely stunning designs! Transformed my space beautifully with elegance.Highly recommend their expertise!",
              rating: 5,
            },
            {
              name: "Rohan",
              feedback:
                "Absolutely stunning designs! Transformed my space beautifully with elegance.Highly recommend their expertise!.",
              rating: 4,
            },
            {
              name: "Divya",
              feedback:
                "Absolutely stunning designs! Transformed my space beautifully with elegance.Highly recommend their expertise!",
              rating: 5,
            },
          ].map((review, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="bg-dark text-white p-4 rounded shadow-sm h-100">
                <h5>{review.name}</h5>
                <p className="mb-2">{review.feedback}</p>
                <p className="text-warning mb-0">
                  {"\u2B50".repeat(review.rating)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

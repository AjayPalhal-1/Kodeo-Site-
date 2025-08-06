"use client";
import Image from "next/image";
import { useState } from "react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    resume: null,
    phone: "",
    email: "",
    location: "",
    portfolio: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.role) newErrors.role = "Please select a job role.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.resume) newErrors.resume = "Resume is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Form Data:", formData);
  };

  return (



    <div className="text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/*  Normal Hero Section */}

      <div className="career-hero position-relative bg-dark text-white overflow-hidden">

        <Image
          src="/imgs/carrer.jpeg"
          alt="Hero Background"
          fill
          className="object-fit-cover opacity-100"
          style={{ zIndex: 0 }}
        />
        <div
          className="position-absolute top- start-0 w-100 h-120"
          style={{ backdropFilter: "blur(0px)", zIndex: 1 }}
        ></div>
        <div className="position-relative z-2 h-100 d-flex flex-column justify-content-end ps-5 pb-5">
          <div className="w-90 w-md-55">
            <h1 className="display-4 fw-bold mb-1">
              Join Our <br /> Innovative Team!
            </h1>
            <p className="fs-5 mb-2">
              We are looking for talented individuals to contribute to our
              success. Explore our <br /> open positions and start your journey
              with us.
            </p>
          </div>
        </div>
      </div>


      {/*  Animation  Hero Section */}

      {/* <div className="career-hero position-relative bg-dark text-white overflow-hidden" style={{ height: '100vh' }}>
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute w-100 h-100"
          style={{
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <source src="cyberbcv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

    
        <div className="position-relative z-2 h-100 d-flex flex-column justify-content-end ps-5 pb-5">
          <div className="w-90 w-md-55">
            <h1 className="display-4 fw-bold mb-1">
              Join Our <br /> Innovative Team!
            </h1>
            <p className="fs-5 mb-2">
              We are looking for talented individuals to contribute to our
              success. Explore our <br /> open positions and start your journey
              with us.
            </p>
          </div>
        </div>
      </div> */}


      {/* Apply Section */}

      <div className="container py-5" style={{ backgroundColor: "#f7f6fa" }}>
        <div className="row g-4">
          {/* Left Image */}
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="w-100 p-3 rounded-4" style={{ backgroundColor: "#f7f6fa", height: "500px", width: "90%" }}>
              <Image
                src="/imgs/ai3.png"
                alt="Apply Image"
                width={500}
                height={590}
                className="img-fluid rounded w-100 h-100"
                style={{
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
              />
            </div>
          </div>


          {/* Right Form */}

          <div className="col-lg-6 d-flex align-items-stretch">
            <style jsx>{`
    .form-control::placeholder {
      color: #ffffff !important;
      opacity: 1;
    }
  `}</style>


            <form
              onSubmit={handleSubmit}
              className="p-3 rounded-4 w-100 d-flex flex-column justify-content-start"
              style={{
                background: "linear-gradient(135deg, #2a0050 0%, #3a006a 100%)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                height: "475px", // 🔻 Reduced height
                maxWidth: "500px", // 🔻 Reduced width
                marginTop: "9px",
                width: "90px",
                marginBottom: "10px"
              }}
            >
              <h4 className="fw-bold mb-3 text-white text-center">Apply</h4>

              {/* Role Dropdown */}
              <div className="mb-2">
                <select
                  name="role"
                  className="form-select text-white"
                  style={{ background: "#2a0050", border: "none", fontSize: "0.9rem" }}
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="">Select Job Role</option>
                  <option>Senior UX Designer</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Full Stack Developer</option>
                  <option>Cybersecurity Analyst</option>
                  <option>AI/ML Engineer</option>
                  <option>DevOps Engineer</option>
                </select>
                {errors.role && <small className="text-danger">{errors.role}</small>}
              </div>

              {/* Compact Input Fields */}
              {/* Full Name */}
              <div className="mb-1">
                <label className="text-white mb-1" style={{ fontSize: "0.85rem" }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm"
                  style={{
                    background: "#2a0050",
                    border: "none",
                    color: "#fff",
                    fontSize: "0.85rem",
                  }}
                  onChange={handleChange}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              {/* Resume */}
              <div className="mb-1">
                <label className="text-white mb-1" style={{ fontSize: "0.85rem" }}>Resume</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="form-control form-control-sm"
                  style={{
                    background: "#2a0050",
                    border: "none",
                    color: "#fff",
                    fontSize: "0.85rem",
                  }}
                  onChange={handleChange}
                />
                {errors.resume && <small className="text-danger">{errors.resume}</small>}
              </div>

              {/* Phone */}
              <div className="mb-1">
                <label className="text-white mb-1" style={{ fontSize: "0.85rem" }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control form-control-sm"
                  style={{
                    background: "#2a0050",
                    border: "none",
                    color: "#fff",
                    fontSize: "0.85rem",
                  }}
                  onChange={handleChange}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>

              {/* Email & Location in one row */}
              <div className="d-flex gap-2 mb-1">
                <div className="w-50">
                  <label className="text-white mb-1" style={{ fontSize: "0.85rem" }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-sm"
                    style={{
                      background: "#2a0050",
                      border: "none",
                      color: "#fff",
                      fontSize: "0.85rem",
                    }}
                    onChange={handleChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="w-50">
                  <label className="text-white mb-1" style={{ fontSize: "0.85rem" }}>Location</label>
                  <input
                    type="text"
                    name="location"
                    className="form-control form-control-sm"
                    style={{
                      background: "#2a0050",
                      border: "none",
                      color: "#fff",
                      fontSize: "0.85rem",
                    }}
                    onChange={handleChange}
                  />
                  {errors.location && <small className="text-danger">{errors.location}</small>}
                </div>
              </div>


              {/* Message */}
              <textarea
                placeholder="Message"
                name="message"
                rows={2}
                className="form-control mt-2"
                style={{
                  background: "#2a0050",
                  border: "none",
                  color: "#fff",
                  fontSize: "0.85rem",
                }}
                onChange={handleChange}
              />
              {errors.message && (
                <small className="text-danger">{errors.message}</small>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="btn w-100 fw-bold mt-3"
                style={{
                  background: "linear-gradient(90deg, #ff007f, #a800ff)",
                  color: "#fff",
                  fontSize: "1rem",
                  border: "none",
                  borderRadius: 8,
                }}
              >
                Apply
              </button>
            </form>


          </div>



        </div>
      </div>




    </div>
  );
}

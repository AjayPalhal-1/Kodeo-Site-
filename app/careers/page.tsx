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
      {/* Hero Section */}
      <div
        className="position-relative bg-dark text-white overflow-hidden"
        style={{ height: "100vh" }}
      >
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

      {/* Apply Section */}
      <div className="container py-5" style={{ backgroundColor: "#f7f6fa" }}>
        <div className="row g-5 align-items-center justify-content-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center">
            <Image
              src="/imgs/ai3.png"
              alt="Robot"
              width={600}
              height={800}
              className="img-fluid rounded shadow-lg"
              style={{
                filter: "drop-shadow(0 0 10px rgba(171, 105, 255, 0.7))",
                transition: "0.3s ease",
              }}
            />
          </div>

          {/* Form */}
          <div className="col-lg-6">
            <form
              onSubmit={handleSubmit}
              className="p-3 rounded-4"
              style={{
                background: "#3a006a",
                boxShadow: "0 4px 32px rgba(30,0,60,0.10)",
                
              }}
            >
              <h3 className="fw-bold mb-3 text-white">Apply</h3>

              {/* Role */}
              <div className="mb-1">
                <label className="text-white mb-0">Job Role</label>
                <select
                  name="role"
                  className="form-select text-white"
                  style={{ background: "#2a0050", border: "none" }}
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
                {errors.role && (
                  <small className="text-danger">{errors.role}</small>
                )}
              </div>

              {/* Name */}
              <div className="mb-2">
                <label className="text-white mb-0">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  style={{
                    background: "#2a0050",
                    border: "none",
                    color: "#fff",
                  }}
                  onChange={handleChange}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>

              {/* Resume */}
              <div className="mb-2">
                <label className="text-white mb-0">Resume</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="form-control"
                  style={{
                    background: "#2a0050",
                    border: "none",
                    color: "#fff",
                  }}
                  onChange={handleChange}
                />
                {errors.resume && (
                  <small className="text-danger">{errors.resume}</small>
                )}
              </div>

              {/* Phone + Email */}
              <div className="mb-2">
                <label className="text-white mb-0">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control mb-1"
                  style={{
                    background: "#2a0050",
                    border: "none",
                    color: "#fff",
                  }}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <small className="text-danger d-block">{errors.phone}</small>
                )}

                <label className="text-white mb-0 mt-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  style={{
                    background: "#2a0050",
                    border: "none",
                    color: "#fff",
                  }}
                  onChange={handleChange}
                />
                {errors.email && (
                  <small className="text-danger d-block">{errors.email}</small>
                )}
              </div>

              {/* Location */}
              <div className="mb-2">
                <label className="text-white mb-0">Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  style={{
                    background: "#2a0050",
                    border: "none",
                    color: "#fff",
                  }}
                  onChange={handleChange}
                />
              </div>

              {/* Portfolio */}
              <div className="mb-2">
                <label className="text-white mb-0">Portfolio Link</label>
                <input
                  type="url"
                  name="portfolio"
                  className="form-control"
                  style={{
                    background: "#2a0050",
                    border: "none",
                    color: "#fff",
                  }}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="mb-2">
                <label className="text-white mb-0">Message</label>
                <textarea
                  name="message"
                  rows={1}
                  className="form-control"
                  style={{
                    background: "#2a0050",
                    border: "none",
                    color: "#fff",
                  }}
                  onChange={handleChange}
                />
                {errors.message && (
                  <small className="text-danger">{errors.message}</small>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn w-100 fw-bold mt-2"
                style={{
                  background: "linear-gradient(90deg, #ff007f, #a800ff)",
                  color: "#fff",
                  fontSize: "1.1rem",
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

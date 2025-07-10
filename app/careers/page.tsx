'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    resume: null,
    phone: '',
    email: '',
    location: '',
    portfolio: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.role) newErrors.role = 'Please select a job role.';
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.resume) newErrors.resume = 'Resume is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log('Form Data:', formData);
  };

  return (
    <div className="text-dark" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <div className="position-relative bg-dark text-white overflow-hidden" style={{ height: '100vh' }}>
        <Image
          src="/imgs/carrer.jpeg"
          alt="Hero Background"
          fill
          className="object-fit-cover opacity-100"
          style={{ zIndex: 0 }}
        />
        <div
          className="position-absolute top- start-0 w-100 h-120"
          style={{ backdropFilter: 'blur(0px)', zIndex: 1 }}
        ></div>
  <div className="position-relative z-2 h-100 d-flex flex-column justify-content-end ps-5 pb-5">
  <div className="w-90 w-md-55">
    <h1 className="display-4 fw-bold mb-1">Join Our<br />Innovative Team!</h1>

    {/* ✅ Newly added sentence */}
    <p className="fs-5 mb-2">
We are looking for talented individuals to contribute to our success. Explore our <br />open positions and start your journey with us.
    </p>

   
  </div>
</div>

        
      </div>

      {/* Apply Section */}
      <div className="container py-5">
        <div className="row g-5 align-items-center justify-content-center">
          {/* Left Side: Image */}
          <div className="col-lg-6 text-center">
            <Image
              src="/imgs/ai3.png"
              alt="Robot"
              width={600}
              height={800}
              className="img-fluid rounded shadow-lg"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(171, 105, 255, 0.7))',
                transition: '0.3s ease',
              }}
            />
          </div>

          {/* Right Side: Form */}
          <div className="col-lg-6">
            {/* <h3 className="fw-bold mb-4 text-dark">Apply</h3> */}
            <form
              onSubmit={handleSubmit}
              className="p-4 rounded-4 bg-dark text-white"
            >
              {/* Role Dropdown */}
              <div className="mb-3">
                <select
                  name="role"
                  className="form-select rounded-pill bg-secondary border-0 text-white"
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

              {/* Name */}
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="form-control rounded-pill bg-secondary border-0 text-white"
                  onChange={handleChange}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              {/* Resume Upload */}
              <div className="mb-3">
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="form-control rounded-pill bg-secondary border-0 text-white"
                  onChange={handleChange}
                />
                {errors.resume && <small className="text-danger">{errors.resume}</small>}
              </div>

              {/* Phone + Email */}
              <div className="mb-3 d-flex gap-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="form-control rounded-pill bg-secondary border-0 text-white"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="form-control rounded-pill bg-secondary border-0 text-white"
                  onChange={handleChange}
                />
              </div>
              {errors.phone && <small className="text-danger">{errors.phone}</small>}
              {errors.email && <small className="text-danger">{errors.email}</small>}

              {/* Location */}
              <div className="mb-3">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="form-control rounded-pill bg-secondary border-0 text-white"
                  onChange={handleChange}
                />
              </div>

              {/* Portfolio Link */}
              <div className="mb-3">
                <input
                  type="url"
                  name="portfolio"
                  placeholder="Portfolio Link"
                  className="form-control rounded-pill bg-secondary border-0 text-white"
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="mb-3">
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Portfolio Link Message*"
                  className="form-control rounded-4 bg-secondary border-0 text-white"
                  onChange={handleChange}
                ></textarea>
                {errors.message && <small className="text-danger">{errors.message}</small>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn w-100 rounded-pill fw-bold"
                style={{ backgroundColor: '#FF2F92', color: 'white' }}
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

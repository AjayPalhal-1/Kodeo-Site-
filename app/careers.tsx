'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '', role: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container-fluid px-0">
      {/* Banner */}
      <div className="position-relative text-white">
        <Image
          src="/career-banner.jpg"
          alt="Team Banner"
          layout="responsive"
          width={1600}
          height={600}
          className="w-100"
        />
        <div className="position-absolute top-50 start-0 translate-middle-y ps-5">
          <h1 className="display-4 fw-bold">Join Our Innovative Team!</h1>
          <p className="fs-5 w-75">
            We’re looking for talented individuals to define our success. Explore your next position and start your journey with us.
          </p>
        </div>
      </div>

      {/* Apply Section */}
      <div className="row g-4 p-5 bg-light">
        <div className="col-md-6 text-center">
          <Image
            src="/apply-image.png"
            alt="Secure Apply"
            width={400}
            height={400}
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h3 className="mb-4 fw-bold">Apply</h3>
          <form className="bg-dark p-4 rounded-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-white">Select Job Role</label>
              <select name="role" onChange={handleChange} className="form-select">
                <option>UI/UX Designer</option>
                <option>Backend Developer</option>
                <option>Cybersecurity Analyst</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Position Wise Message"
                className="form-control"
                rows={3}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-danger w-100">Apply</button>
          </form>
        </div>
      </div>
    </div>
  );
}

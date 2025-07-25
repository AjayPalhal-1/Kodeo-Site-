"use client";
import React from "react";

const TermsPage = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        marginTop: "40px", // Avoid overlap with navbar
        backgroundColor: "#142c46ff", // Slight blue for background
        minHeight: "100vh", // Ensure full height of page
      }}
    >
      <div className="container">
        <div className="bg-white p-4 p-md-5 rounded shadow-sm">
          <h1 className="mb-4 text-primary border-bottom pb-2">📜 Terms & Conditions</h1>

          <p><strong>Company:</strong> Kodeo Software Technology PVT. LTD</p>
          <p>
            <strong>Website:</strong>
            <a
              href="https://kodeosoftwaretechnology.com"
              className="text-decoration-none text-primary ms-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://kodeosoftwaretechnology.com
            </a>
          </p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item bg-transparent"><b>1. Agreement:</b> By using our services, you accept these terms.</li>
            <li className="list-group-item bg-transparent"><b>2. Services:</b> Full Stack, AI/ML, Cybersecurity, DevOps.</li>
            <li className="list-group-item bg-transparent"><b>3. Users:</b> Must be 18+ or with legal consent.</li>
            <li className="list-group-item bg-transparent"><b>4. Ownership:</b> All content belongs to Kodeo.</li>
            <li className="list-group-item bg-transparent"><b>5. Privacy:</b> Your info is safe with us.</li>
            <li className="list-group-item bg-transparent"><b>6. Tools:</b> AWS, GitHub, OpenAI, etc.</li>
            <li className="list-group-item bg-transparent"><b>7. Termination:</b> Violation may lead to access removal.</li>
            <li className="list-group-item bg-transparent"><b>8. Indian Law:</b> All disputes under Indian law.</li>
          </ul>

          <p><strong>Contact:</strong> hr@kodeosoftwaretechnology.com | 7378914416</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

"use client";
import React from "react";

const PrivacyPage = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        marginTop: "40px", // Avoid overlap with navbar
        backgroundColor: "#142c46ff", // Slight blue for background
        minHeight: "100vh",
      }}
    >
      <div
        className="bg-white p-4 p-md-5 rounded shadow-sm mx-auto"
        style={{
          maxWidth: "900px",
        }}
      >
        <h1 className="mb-4 text-primary border-bottom pb-2">🔒 Privacy Policy</h1>

        <p>
          At <strong>Kodeo Software Technology PVT. LTD</strong>, your privacy is our priority.
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="https://kodeosoftwaretechnology.com"
            className="text-decoration-none text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://kodeosoftwaretechnology.com
          </a>
        </p>

        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item">
            <b>1. Data Collection:</b> We collect essential data to provide our services efficiently.
          </li>
          <li className="list-group-item">
            <b>2. Cookies:</b> We use cookies to improve your experience on our website.
          </li>
          <li className="list-group-item">
            <b>3. Storage:</b> Your personal data is stored securely on trusted servers.
          </li>
          <li className="list-group-item">
            <b>4. Third Party:</b> We don’t sell or share your data without your permission.
          </li>
          <li className="list-group-item">
            <b>5. Rights:</b> You have the right to request deletion or modification of your data.
          </li>
          <li className="list-group-item">
            <b>6. Updates:</b> This policy may change; please review it regularly.
          </li>
        </ul>

        <p>
          <strong>Contact:</strong> hr@kodeosoftwaretechnology.com | 7378914416
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;

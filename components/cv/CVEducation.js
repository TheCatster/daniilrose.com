import React from "react";

const CVEducation = () => {
  return (
    <div>
      <h2 className="cv-section-title">education</h2>
      <div className="container p-2">
        <h3 className="cv-section-item">
          The Pennsylvania State University, <em>June 2022 - Current</em>
        </h3>
        <p className="cv-text">
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">B.S. in Computer Engineering.</li>
            <li className="cv-list-item">
              B.S. in German with an emphasis in Business and Engineering.
            </li>
            <li className="cv-list-item">
              Minoring in International Engineering and Cybersecurity
              Computational Foundations.
            </li>
            <li className="cv-list-item">
              Relevant Coursework: Data Structures and Algorithms, Digital
              Design, Systems Programming
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default CVEducation;

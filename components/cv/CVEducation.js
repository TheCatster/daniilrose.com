import React from "react";

const CVEducation = () => {
  return (
    <div>
      <h2 className="cv-section-title">education</h2>
      <div className="container p-2">
        <h3 className="cv-section-item">
          The Pennsylvania State University
        </h3>
        <h4>
	        Expected: May 2027
	      </h4>
        <ul className="cv-list list-disc list-inside text-left">
          <li className="cv-list-item">Master of International Affairs concentrating in Law, Policy and Engineering</li>
          <li className="cv-list-item">Bachelor of Science in Computer Engineering</li>
          <li className="cv-list-item">
            Bachelor of Science in German with an emphasis in Business and Engineering
          </li>
        </ul>
        <p className="cv-text">
          Relevant coursework and research include international law and legal frameworks, 
          artificial intelligence on embedded systems, large language models, international business communication, 
          policy proposals, operating systems, and computer architecture.
        </p>
      </div>
    </div>
  );
};

export default CVEducation;

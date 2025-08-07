import React from "react";

const CVTechnicalSkills = () => {
  return (
    <div>
      <h2 className="cv-section-title">skills</h2>
      <div className="container p-1">
        <h3 className="cv-section-item">Tools</h3>
        <ul className="cv-list list-disc list-inside text-left">
          <li className="cv-list-item">
            UNIX-like Operating Systems (such as GNU/Linux, macOS, FreeBSD)
          </li>
          <li className="cv-list-item">FreeRTOS</li>
          <li className="cv-list-item">TensorFlow and PyTorch-NLP</li>
          <li className="cv-list-item">Git, GitHub, and GitLab</li>
          <li className="cv-list-item">CI/CD with GitHub Actions and GitLab CI</li>
          <li className="cv-list-item">Emacs and Vim</li>
          <li className="cv-list-item">Docker, Proxmox, and Kubernetes</li>
          <li className="cv-list-item">Jupyter Lab</li>
          <li className="cv-list-item">Microsoft Office</li>
          <li className="cv-list-item">Database Management Tools (MySQL, SQL Server, Redis)</li>
        </ul>
      </div>
      <div className="container p-1">
        <h3 className="cv-section-item">Languages</h3>
        <div>
          <h4 className="cv-section-subtitle">Human</h4>
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">English (Native)</li>
            <li className="cv-list-item">Russian (Native)</li>
            <li className="cv-list-item">German (Advanced - B2)</li>
            <li className="cv-list-item">Chinese (Elementary - A1)</li>
          </ul>
        </div>
        <div>
          <h4 className="cv-section-subtitle">Programming</h4>
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">Python (5 yrs.)</li>
            <li className="cv-list-item">C/C++ (5 yrs.)</li>
            <li className="cv-list-item">Rust (5 yrs.)</li>
            <li className="cv-list-item">Bash (5 yrs.)</li>
            <li className="cv-list-item">Verilog (3 yrs.)</li>
            <li className="cv-list-item">Assembly (3 yrs.)</li>
            <li className="cv-list-item">Julia (3 yrs.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CVTechnicalSkills;

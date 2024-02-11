import React from "react";

const CVTechnicalSkills = () => {
  return (
    <div>
      <h2 className="cv-section-title">technical skills</h2>
      <div className="container p-1">
        <h3 className="cv-section-item">Workflow</h3>
        <ul className="cv-list list-disc list-inside text-left">
          <li className="cv-list-item">
            UNIX-based OSes (such as GNU/Linux, macOS, FreeBSD)
          </li>
          <li className="cv-list-item">Emacs and Vim</li>
          <li className="cv-list-item">SSH, Docker, Proxmox, and Kubernetes</li>
          <li className="cv-list-item">Jupyter Lab with Python and Julia</li>
        </ul>
      </div>
      <div className="container p-1">
        <h3 className="cv-section-item">Languages</h3>
        <div>
          <h4 className="cv-section-subtitle">Programming</h4>
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">
              Python (4 yrs.), C/C++ (4 yrs.), Rust (4 yrs.), Bash (5 yrs.),
              Verilog (2 yrs.), Assembly (2 yrs.)
            </li>
          </ul>
        </div>
        <div>
          <h4 className="cv-section-subtitle">Human</h4>
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">
              English (Native), Russian (Native), German (B1), Chinese (A1)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CVTechnicalSkills;

import React from "react";

const CVTechnicalSkills = () => {
  return (
    <div>
      <h2 className="cv-section-title">technical skills</h2>
      <div className="container p-1">
        <h3 className="cv-section-item">Workflow</h3>
        <p className="cv-text">
          Using UNIX based operating systems (such as GNU/Linux, macOS,
          FreeBSD), Emacs, Vim, and IDEs when appropriate to work efficiently.
          Use of tools such as ssh, docker, docker-compose, Proxmox and
          kubernetes to manage home lab and work environments. Jupyter Lab for
          use with Python and Julia to complete Linear Algebra and Machine
          Learning tasks.
        </p>
      </div>
      <div className="container p-1">
        <h3 className="cv-section-item">Languages</h3>
        <h4 className="cv-section-subtitle">Programming</h4>
        <p className="cv-text">Rust, C, Python, Julia, Clojure, Kotlin</p>
        <h4 className="cv-section-subtitle">Markup</h4>
        <p className="cv-text">Org, LaTeX</p>
        <h4 className="cv-section-subtitle">Human</h4>
        <p className="cv-text">
          English: Native, Russian: Native, German: A2, Chinese: A1
        </p>
      </div>
      <div className="container p-1">
        <h3 className="cv-section-item">Media</h3>
        <h4 className="cv-section-subtitle">Gimp, Inkscape, and Affinity</h4>
        <p className="cv-text">
          Used to make high quality placeholders, mockups, and logos for
          projects.
        </p>
        <h4 className="cv-section-subtitle">Logic Pro, Ableton, and Ardour</h4>
        <p className="cv-text">
          Used to arrange and compose music, as well as edit existing audio or
          voice tracks.
        </p>
      </div>
    </div>
  );
};

export default CVTechnicalSkills;

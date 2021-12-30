import React from "react";

const CVTechnicalSkills = () => {
  return (
    <div>
      <h2 className="cv-section-title text-2xl">technical skills</h2>
      <div className="container p-1">
        <h3 className="cv-section-item text-xl">Workflow</h3>
        <p className="cv-text">
          Using GNU/Linux, Emacs, Vim, and IDEs when appropriate to work
          efficiently. Use of tools such as ssh, docker, docker-compose, Proxmox
          and kubernetes to manage home lab and work environments. Jupyter Lab
          for use with Python to complete Linear Algebra and Machine Learning
          tasks.
        </p>
      </div>
      <div className="container p-1">
        <h3 className="cv-section-item text-xl">Languages</h3>
        <h4 className="cv-section-subtitle text-lg">Programming</h4>
        <p className="cv-text">Rust, C, Python, Kotlin, Swift, Emacs Lisp</p>
        <h4 className="cv-section-subtitle text-lg">Markup</h4>
        <p className="cv-text">Org, LaTeX</p>
        <h4 className="cv-section-subtitle text-lg">Human</h4>
        <p className="cv-text">
          English: Native, Russian: Native, German: A2, Chinese: A1
        </p>
      </div>
      <div className="container p-1">
        <h3 className="cv-section-item text-xl">Media</h3>
        <h4 className="cv-section-subtitle text-lg">Gimp and Inkscape</h4>
        <p className="cv-text">
          Used to make high quality placeholders, mockups, and logos for
          projects.
        </p>
        <h4 className="cv-section-subtitle text-lg">
          Logic Pro, Ableton, and Ardour
        </h4>
        <p className="cv-text">
          Used to arrange and compose music, as well as edit existing audio or
          voice tracks.
        </p>
      </div>
    </div>
  );
};

export default CVTechnicalSkills;

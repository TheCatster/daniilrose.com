import React from "react";

const CVTechnicalSkills = () => {
  return (
    <div>
      <h2 className="cv-section-title text-2xl">technical skills</h2>
      <div className="container p-2">
        <h3 className="cv-section-item text-xl">1.1 Workflow</h3>
        <p className="cv-text">
          Using Emacs, vim/nvim, tmux/dwm, and IDEs when appropriate to work
          efficiently. Use of network tools such as ssh, docker, docker-compose,
          and kubernetes to manage home lab and work environments. Jupyter Lab
          for use with Python to complete Linear Algebra and Machine Learning
          tasks.
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item text-xl">1.2 Languages</h3>
        <h4 className="cv-section-subtitle text-lg">1.2.1 Programming</h4>
        <p className="cv-text">Rust, C, Python, Clojure, Emacs Lisp, Kotlin</p>
        <h4 className="cv-section-subtitle text-lg">1.2.2 Markup</h4>
        <p className="cv-text">Org, LaTeX, HTML, CSS</p>
        <h4 className="cv-section-subtitle text-lg">1.2.3 Human</h4>
        <p className="cv-text">
          English: Native, Russian: Native, German: A2, Chinese: A1
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item text-xl">1.3 Media</h3>
        <h4 className="cv-section-subtitle text-lg">1.3.1 Gimp and Inkscape</h4>
        <p className="cv-text">
          Used to make high quality placeholders, mockups, and logos for
          projects.
        </p>
        <h4 className="cv-section-subtitle text-lg">
          1.3.2 Logic Pro, Ableton, and Ardour
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

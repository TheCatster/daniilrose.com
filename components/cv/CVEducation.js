import React from "react";

const CVEducation = () => {
  return (
    <div>
      <h2 className="cv-section-title text-2xl">education</h2>
      <div className="container p-2">
        <h3 className="cv-section-item text-xl">
          Garden Spot High School, <em>August 2018 - Current</em>
        </h3>
        <p className="cv-text">
          AP Credits in Calculus I & II, Mechanical Physics, Statistics, World
          History, Computer Science, Biology, US Government, Art History. Honors
          in all offered classes.
        </p>
        <p className="cv-text">
          Jazz Band, Technology Student Association, Model UN, State STEM
          competition team, and more extra curriculars.
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item text-xl">
          MIT HSSP, <em>July 2020 - August 2020</em>
        </h3>
        <p className="cv-text">
          MIT High School Summer Program, courses taken in Statistical
          Thermodynamics, the Julia Programming Language, Neuroscience and
          Artificial Intelligence, and European Politics.
        </p>
      </div>
    </div>
  );
};

export default CVEducation;

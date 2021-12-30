import React from "react";

const CVEducation = () => {
  return (
    <div>
      <h2 className="cv-section-title">work experience</h2>
      <div className="container p-2">
        <h3 className="cv-section-item">
          Freelance Software Engineer - Python, White Hat Cat{" "}
          <em>February 2020 - December 2020</em>
        </h3>
        <p className="cv-text">
          Created Discord Bots using new and innovative concepts, incorporating
          TensorFlow, Pandas, Web APIs and complex PostgreSQL databases.
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item">
          Software Engineer - PHP, Ruben Engineering,{" "}
          <em>March 2020 - March 2021</em>
        </h3>
        <p className="cv-text">
          Created the database interface, blog, and web store in PHP, Laravel,
          and Vue.js.
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item">
          Apprentice Satellite Engineer, Mini-Cubes,{" "}
          <em>October 2020 - Current</em>
        </h3>
        <p className="cv-text">
          Responsible for PCB design, Linux development, signals and 3D
          modeling. Embedded software development and robotics in C, Rust, and
          Python.
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item">
          Summer IT Assistant, Garden Spot High School,{" "}
          <em>June 2021 - August 2021</em>
        </h3>
        <p className="cv-text">
          Responsible for maintaining various computers, inventory, basic
          troubleshooting, and imaging.
        </p>
      </div>
    </div>
  );
};

export default CVEducation;

import React from "react";

const CVWorkExperience = () => {
  return (
    <div>
      <h2 className="cv-section-title">work experience</h2>

      <div className="container p-2">
        <h3 className="cv-section-item">
          Engineering Career Envoy, Penn State College of Engineering,{" "}
          <em>December 2023 - Present</em>
        </h3>
        <p className="cv-text">
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">
              Engaged in student peer mentoring, providing guidance and support
              to engineering students
            </li>
            <li className="cv-list-item">
              Delivered career-focused presentations, conveying essential
              resources and information to engineering students
            </li>
          </ul>
        </p>
      </div>

      <div className="container p-2">
        <h3 className="cv-section-item">
          Undergraduate Research Assistant, Penn State University,{" "}
          <em>November 2023 - Present</em>
        </h3>
        <p className="cv-text">
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">
              Conducted comprehensive research in lock-free and wait-free
              operating systems, contributing to ongoing projects
            </li>
            <li className="cv-list-item">
              Experimented with designing a microkernel-based library operating
              system using no standard Rust
            </li>
          </ul>
        </p>
      </div>

      <div className="container p-2">
        <h3 className="cv-section-item">
          Systems Engineering Intern – Defense Mission Systems (BU), Peraton,{" "}
          <em>June 2023 - August 2023</em>
        </h3>
        <p className="cv-text">
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">
              Utilized ROS, Webots, and GNU/Linux to architect modular software
              systems for mobile bomb-disposal robots
            </li>
            <li className="cv-list-item">
              Reverse-engineered abandoned internal cloning software codebase to
              customize open-source disk imaging for streamlined OS deployment
            </li>
            <li className="cv-list-item">
              Advised cross-functional teams on integrating new features within
              existing codebases and dependencies
            </li>
          </ul>
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item">
          DevOps Engineer, quub, <em>June 2022 - June 2023</em>
        </h3>
        <p className="cv-text">
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">
              Administered Docker and Kubernetes clusters to containerize and
              orchestrate more than 20 internal microservices
            </li>
            <li className="cv-list-item">
              Advised 10+ developers on best practices for architecture,
              security, and scalability
            </li>
          </ul>
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item">
          Satellite Engineering Intern, quub, <em>October 2020 - June 2022</em>
        </h3>
        <p className="cv-text">
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">
              Programmed embedded ARM devices in C and Rust using FreeRTOS to
              run experimental satellite payloads
            </li>
            <li className="cv-list-item">
              Constructed an interactive miniature satellite tracker using
              Python and RPi to visualize orbit positions
            </li>
            <li className="cv-list-item">
              Designed reliable power distribution via solar panels, batteries,
              and buck converters for low-earth orbit satellites
            </li>
          </ul>
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item">
          Summer IT Assistant, Garden Spot High School,{" "}
          <em>June 2021 - August 2021</em>
        </h3>
        <p className="cv-text">
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">
              Administered fleet of 3000 student laptops across 5 school
              buildings, ensuring proper software versions and configurations
            </li>
            <li className="cv-list-item">
              Diagnosed hardware and software issues on Windows 10 devices,
              troubleshooting things like account access and network
              connectivity
            </li>
            <li className="cv-list-item">
              Set up wired and wireless networks in computer labs, configuring
              routers, switches, and cabling
            </li>
          </ul>
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item">
          Software Engineer, Contractor <em>February 2020 - June 2021</em>
        </h3>
        <p className="cv-text">
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">
              Engineered chatbots and data pipelines in Python, leveraging NLP
              and machine learning techniques
            </li>
            <li className="cv-list-item">
              Collaborated with over 15 clients to gather requirements, propose
              solutions, and deliver polished products
            </li>
          </ul>
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item">
          Backend Software Engineer, Ruben Engineering,{" "}
          <em>March 2020 - March 2021</em>
        </h3>
        <p className="cv-text">
          <ul className="cv-list list-disc list-inside text-left">
            <li className="cv-list-item">
              Architected REST APIs and database schema to power mobile and web
              applications
            </li>
            <li className="cv-list-item">
              Implemented core app logic and CRUD operations using PHP, Laravel,
              MySQL, and Vue.js
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default CVWorkExperience;

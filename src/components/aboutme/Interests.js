import React, { useEffect, useState } from "react";

const ProgrammingLanguages = (props) => {
  const isDesktop = props.isDesktop;
  return (
    <div className="grid-item">
      {isDesktop ? <div></div> : <h4>Programming Languages</h4>}
      <ul>
        <li>Rust</li>
        <li>C</li>
        <li>Python</li>
        <li>Clojure</li>
      </ul>
    </div>
  );
};

const Languages = (props) => {
  const isDesktop = props.isDesktop;
  return (
    <div className="grid-item">
      {isDesktop ? <div></div> : <h4>Programming Languages</h4>}
      <ul>
        <li>Russian: Native</li>
        <li>English: Native</li>
        <li>German: A2</li>
        <li>Chinese: A1</li>
      </ul>
    </div>
  );
};

const Instruments = (props) => {
  const isDesktop = props.isDesktop;
  return (
    <div className="grid-item">
      {isDesktop ? <div></div> : <h4>Programming Languages</h4>}
      <ul>
        <li>Vibraphone</li>
        <li>Marimba</li>
        <li>Piano</li>
        <li>Bass</li>
      </ul>
    </div>
  );
};

const InterestsHeaders = (props) => {
  return (
    <div className="grid">
      <h4>Programming Languages</h4>
      <h4>Languages</h4>
      <h4>Instruments</h4>
    </div>
  );
};

const InterestsContent = (props) => {
  return (
    <div className="grid">
      <ProgrammingLanguages isDesktop={props.isDesktop} />
      <Languages isDesktop={props.isDesktop} />
      <Instruments isDesktop={props.isDesktop} />
    </div>
  );
};

const Interests = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="container">
      {isDesktop ? (
        <div>
          {" "}
          <InterestsHeaders />
          <InterestsContent isDesktop={isDesktop} />
        </div>
      ) : (
        <InterestsContent isDesktop={isDesktop} />
      )}
    </div>
  );
};

export default Interests;

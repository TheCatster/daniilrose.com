import React from "react";

const ProgrammingLanguages = (props) => {
  return (
    <div className="items-center justify-center">
      <h4 className="font-bold interests-title">
        Programming
      </h4>
      <ul className="p-0">
        <li>Rust</li>
        <li>C</li>
        <li>Python</li>
        <li>Clojure</li>
      </ul>
    </div>
  );
};

const Languages = (props) => {
  return (
    <div className="items-center justify-center">
      <h4 className="font-bold interests-title">
        Languages
      </h4>
      <ul className="p-0">
        <li>Russian</li>
        <li>English</li>
        <li>German</li>
        <li>Simplified Chinese</li>
      </ul>
    </div>
  );
};

const Instruments = (props) => {
  return (
    <div className="items-center justify-center">
      <h4 className="font-bold interests-title">
        Instruments
      </h4>
      <ul className="p-0">
        <li>Vibraphone</li>
        <li>Marimba</li>
        <li>Piano</li>
        <li>Bass</li>
      </ul>
    </div>
  );
};

const InterestsContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
      <ProgrammingLanguages />
      <Languages />
      <Instruments />
    </div>
  );
};

const Interests = () => {
  return (
    <div className="">
      <InterestsContent />
    </div>
  );
};

export default Interests;

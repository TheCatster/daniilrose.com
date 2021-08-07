import React from "react";

const ProgrammingLanguages = (props) => {
  return (
    <div className="grid-item">
      <h4>Programming Languages</h4>
      <ul className="list-disc list-outside text-left">
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
    <div className="grid-item">
      <h4>Languages</h4>
      <ul className="list-disc list-outside text-left">
        <li>Russian: Native</li>
        <li>English: Native</li>
        <li>German: A2</li>
        <li>Chinese: A1</li>
      </ul>
    </div>
  );
};

const Instruments = (props) => {
  return (
    <div className="grid-item">
      <h4>Instruments</h4>
      <ul className="list-disc list-outside text-left">
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
    <div className="grid grid-cols-3 gap-4 justify-items-center">
      <ProgrammingLanguages />
      <Languages />
      <Instruments />
    </div>
  );
};

const Interests = () => {
  return (
    <div className="p-8">
      <InterestsContent />
    </div>
  );
};

export default Interests;

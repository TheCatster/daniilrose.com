import React from "react";

const ProgrammingLanguages = (props) => {
  return (
    <div className="items-center justify-center">
      <h4 className="text-md lg:text-lg font-bold interests-title">
        Programming
      </h4>
      <ul className="list-disc list-outside">
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
    <div>
      <h4 className="text-md lg:text-lg font-bold interests-title">Languages</h4>
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
    <div>
      <h4 className="text-md lg:text-lg font-bold interests-title">Instruments</h4>
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
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

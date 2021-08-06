import React from "react";

import CVTitle from "./CVTitle";
import CVTechnicalSkills from "./CVTechnicalSkills";
import CVSoftSkills from "./CVSoftSkills";
import CVEducation from "./CVEducation";
import CVWorkExperience from "./CVWorkExperience";
import CVService from "./CVService";

const CV = () => {
  return (
    <div className="container cv-container">
      <CVTitle />
      <CVTechnicalSkills />
      <CVSoftSkills />
      <CVEducation />
      <CVWorkExperience />
      <CVService />
    </div>
  );
};

export default CV;

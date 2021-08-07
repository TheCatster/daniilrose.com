import React from "react";
import { Helmet } from "react-helmet";

import CVTitle from "./CVTitle";
import CVTechnicalSkills from "./CVTechnicalSkills";
import CVSoftSkills from "./CVSoftSkills";
import CVEducation from "./CVEducation";
import CVWorkExperience from "./CVWorkExperience";
import CVService from "./CVService";

const CV = () => {
  return (
    <div className="container cv-container">
      <Helmet>
        {" "}
        <title>CV - Daniel Rose</title>
      </Helmet>
      <CVTitle />
      <div className="p-4">
        <CVTechnicalSkills />
        <CVSoftSkills />
        <CVEducation />
        <CVWorkExperience />
        <CVService />
      </div>
    </div>
  );
};

export default CV;

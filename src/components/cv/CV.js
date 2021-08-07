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
      <hgroup>
        <CVTitle />
        <CVTechnicalSkills />
        <CVSoftSkills />
        <CVEducation />
        <CVWorkExperience />
        <CVService />
      </hgroup>
    </div>
  );
};

export default CV;

import React from "react";
import Head from "next/head";
import CVTitle from "../components/cv/CVTitle";
import CVTechnicalSkills from "../components/cv/CVTechnicalSkills";
import CVSoftSkills from "../components/cv/CVSoftSkills";
import CVEducation from "../components/cv/CVEducation";
import CVWorkExperience from "../components/cv/CVWorkExperience";
import CVService from "../components/cv/CVService";
import Layout from "../components/layout";

export default function CV() {
  return (
    <Layout>
      <Head>
        <title>CV - Daniil Rose</title>
      </Head>
      <div className="container cv-container">
        <CVTitle />
        <div className="p-4">
          <CVTechnicalSkills />
          <CVSoftSkills />
          <CVEducation />
          <CVWorkExperience />
          <CVService />
        </div>
      </div>
    </Layout>
  );
}

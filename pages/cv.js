import React from "react";
import Head from "next/head";
import CVTitle from "@/components/cv/CVTitle";
import CVTechnicalSkills from "@/components/cv/CVTechnicalSkills";
import CVEducation from "@/components/cv/CVEducation";
import CVConferences from "@/components/cv/CVConferences";
import CVWorkExperience from "@/components/cv/CVWorkExperience";
import Layout from "@/components/layout";

export default function CV() {
  return (
    <Layout>
      <Head>
        <title>CV - Daniil Rose</title>
      </Head>
      <div className="container cv-container">
        <CVTitle />
        <div className="p-4">
          <CVEducation />
          <CVWorkExperience />
          <CVTechnicalSkills />
          <CVConferences />
        </div>
      </div>
    </Layout>
  );
}

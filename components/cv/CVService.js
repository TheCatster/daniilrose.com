import React from "react";

const CVService = () => {
  return (
    <div>
      <h2 className="cv-section-title">service</h2>
      <div className="container p-2">
        <h3 className="cv-section-item">Boy Scouts</h3>
        <p className="cv-text">
            <ul className="cv-list list-disc list-inside text-left">
                <li className="cv-list-item">Eagle Scout.</li>
                <li className="cv-list-item">Helped the community with clean-ups, Scouting for Food, and more.</li>
            </ul>
        </p>
      </div>
      <div className="container p-2">
        <h3 className="cv-section-item">Public Library</h3>
        <p className="cv-text">
            <ul className="cv-list list-disc list-inside text-left">
                <li className="cv-list-item">5+ years assisting the town library with arranging public events.</li>
            </ul>
        </p>
      </div>
    </div>
  );
};

export default CVService;

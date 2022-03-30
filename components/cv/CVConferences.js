import React from "react";

const CVConferences = () => {
  return (
    <div>
      <h2 className="cv-section-title">conferences</h2>
      <div className="container p-2">
        <h3 className="cv-section-item">
          EmacsConf, <em>November 2021</em>
        </h3>
        <p className="cv-text">
          Presented at EmacsConf 2021 about computational philosophies regarding
          the use of Emacs, titled{" "}
          <em>
            GNU&apos;s Not UNIX: Why Emacs Demonstrates The UNIX Philosophy
            Isn&apos;t Always The Only Answer
          </em>
        </p>
      </div>
    </div>
  );
};

export default CVConferences;

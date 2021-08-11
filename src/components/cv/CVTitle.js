import React from "react";

const CVTitle = () => {
  return (
    <div>
      <h1 className="cv-title text-5xl">Daniel Rose</h1>
      <h2 className="text-2xl">
        <a
          id="mail"
          className="cryptedmail"
          data-name="danielrose"
          data-domain="member.fsf"
          data-tld="org"
        ></a>{" "}
        -{" "}
        <a href="https://www.danielr.xyz/" className="cv-link">
          www.danielr.xyz
        </a>
      </h2>
      <hr className="cv-linebreak" />
    </div>
  );
};

export default CVTitle;
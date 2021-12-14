import React from "react";

const CVTitle = () => {
  return (
    <div>
      <h1 className="cv-title text-5xl">Daniil Rose</h1>
      <h2 className="text-2xl">
        {
          // eslint-disable-next-line
          <a
            id="mail"
            className="cryptedmail"
            data-name="daniil.rose"
            data-domain="member.fsf"
            data-tld="org"
          ></a>
        }{" "}
        -{" "}
        <a href="https://www.daniilrose.com/" className="cv-link">
          www.daniilrose.com
        </a>
      </h2>
      <hr className="cv-linebreak" />
      <h2 className="text-2xl">
        Git Forges:{" "}
        <a href="https://github.com/thecatster/" className="cv-link"
        >GitHub</a>
        {" "}
        -{" "}
        <a href="https://sr.ht/~thecatster/" className="cv-link"
        >Sourcehut</a>
      </h2>
    </div>
  );
};

export default CVTitle;

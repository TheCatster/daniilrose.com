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
    </div>
  );
};

export default CVTitle;

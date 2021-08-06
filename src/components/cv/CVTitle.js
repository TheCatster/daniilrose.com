import React from "react";

const CVTitle = () => {
  return (
    <div>
      <h1 className="cv-title">Daniel Rose</h1>
      <h2 className="cv-subtitle">
        <a
          class="cryptedmail"
          data-name="danielrose"
          data-domain="member.fsf"
          data-tld="org"
          onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"
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

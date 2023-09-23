import React from "react";
import Link from "next/link";
import Image from "next/image";
import ghLogo from "../../public/images/github.webp";
import srhtLogo from "../../public/images/sourcehut.webp";
import stackLogo from "../../public/images/stackoverflow.webp";
import twitterLogo from "../../public/images/twitter.webp";

const SourcehutLink = () => {
  return (
    <Link href="https://sr.ht/~thecatster">
      <a target="_blank" rel="noopener noreferrer">
        <div className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md">
          <div className="content-center logo-color">
            <Image
              src={srhtLogo}
              alt="Sourcehut Logo"
              className="rounded-lg object-scale"
              priority
              width={80}
              height={80}
              placeholder="blur"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

const GithubLink = () => {
  return (
    <Link href="https://github.com/TheCatster">
      <a target="_blank" rel="noopener noreferrer">
        <div className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md">
          <div className="content-center logo-color">
            <Image
              src={ghLogo}
              alt="Github Logo"
              className="rounded-lg object-scale"
              priority
              width={80}
              height={80}
              placeholder="blur"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

const TwitterLink = () => {
  return (
    <Link href="https://twitter.com/daniilrose">
      <a target="_blank" rel="noopener noreferrer">
        <div className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md">
          <div className="content-center logo-color">
            <Image
              src={twitterLogo}
              alt="Twitter Logo"
              className="rounded-lg object-scale"
              priority
              width={80}
              height={80}
              placeholder="blur"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

const StackLink = () => {
  return (
    <Link href="https://stackoverflow.com/u/11846534">
      <a target="_blank" rel="noopener noreferrer">
        <div className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md">
          <div className="content-center logo-color">
            <Image
              src={stackLogo}
              alt="Stackoverflow Logo"
              className="rounded-lg object-scale"
              priority
              width={80}
              height={80}
              placeholder="blur"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

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
            data-domain="posteo"
            data-tld="org"
          ></a>
        }{" "}
        -{" "}
        <a href="https://www.daniilrose.com/" className="cv-link">
          www.daniilrose.com
        </a> -{" "}
        <a href="https://www.daniilrose.com/files/Resume.pdf" className="cv-link">PDF</a>
      </h2>
      <hr className="cv-linebreak" />
      <div className="flex flex-wrap place-items-center justify-center gap-4 pt-2">
        <SourcehutLink />
        <GithubLink />
        <TwitterLink />
        <StackLink />
      </div>
    </div>
  );
};

export default CVTitle;

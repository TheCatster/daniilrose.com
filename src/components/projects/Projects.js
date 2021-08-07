import React, { Component } from "react";
import { Helmet } from "react-helmet";

import ProjectsList from "./ProjectsList";

class Projects extends Component {
  state = { projects: [] };

  componentDidMount() {
    const data = [
      {
        created: "2021-08-05T19:48:52+00:00",
        description:
          "The second iteration of my personal site using React.js, while still saying as minimal as possible.",
        id: 57382,
        name: "personal-site-neo",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-08-07T19:09:30+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-31T23:42:30+00:00",
        description: " A dwl that just works, with vim keybindings.",
        id: 56987,
        name: "catsters-dwl",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-31T23:42:30+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-20T16:55:13+00:00",
        description:
          "My progress reading through the book Eloquent Javascript.",
        id: 56045,
        name: "learning-js",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-08-05T19:34:36+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T19:57:26+00:00",
        description:
          "Download songs from YouTube Music when added to a Spotify playlist, maintaining the structure of your Spotify playlists.",
        id: 55250,
        name: "spotsync",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-08-05T13:48:28+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T19:51:40+00:00",
        description: "An 8080 emulator written in C.",
        id: 55249,
        name: "di0de-8",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-11T19:54:28+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T19:47:53+00:00",
        description:
          "FeStats is a TUI statistics program, covering hypothesis tests, regressions, and probability written in Rust.",
        id: 55248,
        name: "festats",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-11T19:49:00+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T19:44:09+00:00",
        description:
          "Learning to apply embedded C knowledge to Rust on the STM32",
        id: 55247,
        name: "stm32-rust-discovery",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-11T19:46:18+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T19:37:36+00:00",
        description: "Hy rewrite of Ditto, a Discord Bot for Pokemon Raids.",
        id: 55245,
        name: "hyditto",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-20T17:18:34+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T19:30:37+00:00",
        description:
          "My personal website including my CV, self-hosted on my homelab.",
        id: 55244,
        name: "personal-site",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-11T19:34:04+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T19:02:04+00:00",
        description:
          "Star Wars quotes and GIFs in the terminal, implemented in every new language I try. The main README.",
        id: 55241,
        name: "swq",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-11T19:07:08+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T18:58:12+00:00",
        description:
          "A rewrite of swq in Rust. The recommended implementation to use!",
        id: 55240,
        name: "swq-rs",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-11T19:18:51+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T18:49:44+00:00",
        description: "A Star Wars quote and GIF retriever for the terminal.",
        id: 55237,
        name: "swq-py",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-11T18:54:12+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T18:30:37+00:00",
        description:
          "A Discord bot for raids, that promotes community interaction and rewards participants. ",
        id: 55234,
        name: "ditto",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-11T18:46:22+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T16:06:32+00:00",
        description:
          "A neovim config geared towards editing Rust and Arduino code, as well as efficiency. ",
        id: 55229,
        name: "catsters-neovim",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-11T16:11:18+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T01:45:18+00:00",
        description: "A dwm that just works, with vim keybindings.",
        id: 55199,
        name: "catsters-dwm",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-07-25T13:43:48+00:00",
        visibility: "public",
      },
      {
        created: "2021-07-11T01:23:25+00:00",
        description:
          "A single place to keep my Emacs configuration instead of being spread across multiple repositories.",
        id: 55197,
        name: ".emacs.d",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-08-05T15:15:11+00:00",
        visibility: "public",
      },
      {
        created: "2021-05-31T20:56:24+00:00",
        description: "A unified repository for all of my OS configurations.",
        id: 52021,
        name: ".files",
        owner: {
          canonical_name: "~thecatster",
          name: "thecatster",
        },
        updated: "2021-08-05T15:23:40+00:00",
        visibility: "public",
      },
    ];

    this.setState({ projects: data });
  }

  render() {
    const { projects } = this.state;

    const projectEntries = projects
      .filter((entry, index) => {
        return entry.visibility === "public";
      })
      .map((entry, index) => {
        return (
          <div
            key={entry.name}
            className="box-border border-2 w-full md:max-w-xs lg:max-w-sm xl:max-w-lg p-4"
          >
            <div className="flex flex-col flex-wrap gap-2">
              <p>{entry.name}</p>
              <p>{entry.description}</p>
            </div>
          </div>
        );
      });

    return (
      <div>
        <Helmet>
          {" "}
          <title>Projects - Daniel Rose</title>
        </Helmet>
        <h1 className="text-4xl text-center pb-4">Projects</h1>
        <ProjectsList projects={projectEntries} />
      </div>
    );
  }
}

export default Projects;

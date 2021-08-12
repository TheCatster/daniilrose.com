const express = require("express");
const path = require("path");
const request = require("request");
const tokens = require("./tokens.json");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("/api/srht", (req, res) => {
  const token = tokens.sourcehutToken;
  const url = "https://git.sr.ht/api/~thecatster/repos";

  request(
    {
      url: url,
      json: true,
      headers: { Authorization: `token ${token}` },
    },
    (error, _response, body) => {
      if (error) {
        return console.log(error);
      }
      res.json({
        projects: body.results.filter((entry, index) => {
          return entry.visibility === "public";
        }),
      });
    }
  );
});

app.get("/api/gh/commit", (req, res) => {
  const token = tokens.githubToken;
  const url = "https://api.github.com/graphql";
  const body = {
    query: `{
          user(login: "TheCatster") {
              repositoriesContributedTo(first: 100, contributionTypes: [COMMIT, PULL_REQUEST, REPOSITORY]) {
                  nodes {
                      nameWithOwner
                      description
                      isPrivate
                  }
              }
          }
      }`,
  };

  request(
    {
      url: url,
      json: true,
      method: "POST",
      body: body,
      headers: {
        Authorization: `bearer ${token}`,
        "User-Agent": "Personal Site",
      },
    },
    (error, _response, body) => {
      if (error) {
        return console.log(error);
      }
      res.json({
        projects: body.data.user.repositoriesContributedTo.nodes.filter(
          (entry, index) => {
            return entry.isPrivate === false;
          }
        ),
      });
    }
  );
});

app.get("/api/gh/issue", (req, res) => {
  const token = tokens.githubToken;
  const url = "https://api.github.com/graphql";
  const body = {
    query: `{
          user(login: "TheCatster") {
              repositoriesContributedTo(first: 100, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
                  nodes {
                      nameWithOwner
                      description
                      isPrivate
                  }
              }
          }
      }`,
  };

  request(
    {
      url: url,
      json: true,
      method: "POST",
      body: body,
      headers: {
        Authorization: `bearer ${token}`,
        "User-Agent": "Personal Site",
      },
    },
    (error, _response, body) => {
      if (error) {
        return console.log(error);
      }
      res.json({
        projects: body.data.user.repositoriesContributedTo.nodes.filter(
          (entry, index) => {
            return entry.isPrivate === false;
          }
        ),
      });
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

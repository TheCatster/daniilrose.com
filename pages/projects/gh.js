import ProjectsList from "../../components/projects/ProjectsList";
import Head from "next/head";
import Layout from "../../components/layout";
import ForgeMenu from "../../components/projects/ForgeMenu";

export async function getServerSideProps() {
  const token = process.env.GITHUB_TOKEN;
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

  const fetchProjects = async () => {
    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        body: JSON.stringify(body),
        credentials: "same-origin",
        headers: {
          Authorization: `bearer ${token}`,
          "User-Agent": "Personal Site",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const projects = {
        projects: data.data.user.repositoriesContributedTo.nodes.filter(
          (entry, index) => {
            return entry.isPrivate === false;
          }
        ),
      };
      return projects;
    } catch (error) {
      console.error(error);
    }
  };

  const data = await fetchProjects();

  return { props: data };
}

export default function GitHub(data) {
  return (
    <Layout>
      <Head>
        <title>GitHub Contributions - Daniel Rose</title>
      </Head>
      <div>
        <h1 className="text-4xl text-center pb-4">Projects</h1>
        <ForgeMenu />
        <div className="container place-items-center justify-center text-center text-xl overflow-clip p-2">
          <div>
            My public contributions are mostly made on GitHub. Some of my
            projects are also mirrored to GitHub.
          </div>
        </div>
        <ProjectsList
          projects={data.projects.map((entry, index) => {
            return (
              <a
                href={"https://github.com/" + entry.nameWithOwner + "/"}
                className="p-2 place-items-center box-border border-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-wrap w-full lg:w-1/2 md:max-w-none lg:max-w-xs xl:max-w-sm"
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <div className="flex flex-col flex-wrap gap-2">
                  <p>{entry.nameWithOwner}</p>
                  <p>{entry.description}</p>
                </div>
              </a>
            );
          })}
        />
      </div>
    </Layout>
  );
}

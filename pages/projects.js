import ProjectsList from "@/components/projects/ProjectsList";
import Head from "next/head";
import Layout from "@/components/layout";

export async function getServerSideProps() {
	const response = await fetch(
		"https://www.daniilrose.com/files/projects.json",
	);
	const data = await response.json();

	return { props: data };
}

export default function Projects(data) {
	return (
		<Layout>
			<Head>
				<title>Projects - Daniil Rose</title>
			</Head>
			<div>
				<h1 className="text-4xl text-center pb-4">Projects</h1>
				<div className="container place-items-center justify-center text-center text-xl overflow-clip p-2">
					<div>
						Below are projects that I have worked on. Some of them are
						open-source, and some are private. I have also contributed to other
						projects. Click on any project to see its GitHub page.
					</div>
				</div>
				<ProjectsList
					projects={data.projects.map((entry, index) => {
						return (
							<a
								href={"https://github.com/" + entry.name + "/"}
								className="p-2 place-items-center box-border border-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-wrap w-full lg:w-1/2 md:max-w-none lg:max-w-xs xl:max-w-sm"
								target="_blank"
								rel="noopener noreferrer"
								key={index}
							>
								<div className="flex flex-col flex-wrap gap-2">
									<p>{entry.name}</p>
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

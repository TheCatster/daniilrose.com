//import ProjectsList from "../../components/projects/ProjectsList";
import Head from "next/head";
import Layout from "../../components/layout";
import ForgeMenu from "../../components/projects/ForgeMenu";

export async function getServerSideProps() {
	let data = require("../../public/data/gh.json");

	return { props: data };
}

export default function GitHub(data) {
	return (
		<Layout>
			<Head>
				<title>GitHub Contributions - Daniil Rose</title>
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

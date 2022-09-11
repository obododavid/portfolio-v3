import PROJECTS from "./projects";

const BASE_URL = "https://portfolio-v3-rho-ten.vercel.app";
const metadata = {
	home: {
		title: "David Obodo | Software Developer (Frontend Developer)",
		description:
			"David Obodo is a Software Developer that majors on Frontend Development, yet from time to time is no stranger to the entire full stack development.",
		url: `${BASE_URL}`,
		image: `${BASE_URL}/images/covers/home.png`,
	},
	projects: {
		title: "David Obodo | Projects | Software Developer (Frontend Developer)",
		description:
			"Projects | Playground | Replicas | Xperiments from David Obodo (Software Developer, Front end Developer)",
		url: `${BASE_URL}/projects`,
		image: `${BASE_URL}/images/covers/projects.png`,
	},
	letters: {
		title: "David Obodo | Letters | Software Developer (Frontend Developer)",
		description: "Letters | Thoughts | Stories | Ideas from David Obodo (Software Developer, Front end Developer)",
		url: `${BASE_URL}/letters`,
		image: `${BASE_URL}/images/covers/letters.png`,
	},
	credits: {
		title: "David Obodo | Credits | Software Developer (Frontend Developer)",
		description: "Portfolio Credits",
		url: `${BASE_URL}/credits`,
		image: `${BASE_URL}/images/covers/credits.png`,
	},
	notfound: {
		title: "David Obodo | Lost | Software Developer (Frontend Developer)",
		description: "404 Page not found  - Go Home ",
		url: `${BASE_URL}/lost`,
		image: `${BASE_URL}/images/covers/not-found.png`,
	},
	singleproject: ({ id }: { id: string }) => {
		const project = PROJECTS.find((item) => item.id === id);

		if (project) {
			const { title, media } = project;
			return {
				title: `David Obodo | Project | ${title}`,
				description: `${title} Project`,
				url: `${BASE_URL}/project/${id}`,
				image: `${BASE_URL}${media[0].source}`,
			};
		} else {
			return {
				title: `David Obodo | Project`,
				description: `Invalid Project`,
				url: `${BASE_URL}/project/${id}`,
				image: `${BASE_URL}/images/covers/invalid-project.png`,
			};
		}
	},
};

export default metadata;
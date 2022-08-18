import styles from "./styles.module.scss";
import { ChevronRight, ChevronLeft, Github, ExternalLink } from "#/components/icons";
import { fetchProjects } from "#/utils";
import { Ref } from "react";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { ROLES } from "#/constants";
import Link from "next/link";
import { events, registerEvent } from "#/utils/analytics/events";

type Props = {
	currProjectId: string;
	onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	modalImgRef?: Ref<HTMLDivElement>;
	onGoToProject: (id: string) => void;
};

type TPageGAEvents = "info_view" | "not_found" | "github" | "live_site";

export default function SingleProject({ currProjectId, onClose, modalImgRef, onGoToProject }: Props) {
	const { currProject, nextProject, prevProject } = fetchProjects(currProjectId);
	const { viewProjectGithub, viewProjectSite } = events.shared.homeAndProjects;

	const handlePageGAEvents = (key: TPageGAEvents) => {
		if (currProject) {
			switch (key) {
				case "not_found":
					registerEvent(events.pages.projects.viewUnknownProject({ project_title: currProjectId }));
					return;
				case "github":
					if (currProject.githublink) {
						registerEvent(viewProjectGithub({ project_title: currProject.title, link_url: currProject.githublink }));
					}
					return;
				case "live_site":
					if (currProject.sitelink) {
						registerEvent(viewProjectSite({ project_title: currProject.title, link_url: currProject.sitelink }));
					}
					return;
				default:
					return;
			}
		}
	};

	if (!currProject) {
		return (
			<div className={styles.empty}>
				<p>
					Oops! Sorry I do not have any project by the name: <br /> <span>&nbsp;{currProjectId}&nbsp;</span>{" "}
				</p>

				<Link href="/projects" scroll={false}>
					<a onClick={() => handlePageGAEvents("not_found")}>
						Go to Projects
						<ExternalLink />
					</a>
				</Link>
			</div>
		);
	}

	const { title, bgImage, details, tech, roles, githublink, sitelink } = currProject;

	return (
		<div className={styles.container} data-key="project-info">
			{/* ----------------------------------------------- */}
			{/* Prev Button Desktop */}
			{/* ----------------------------------------------- */}
			{prevProject && (
				<button
					value="previous"
					className={styles.desktopNavigator + " " + styles.btnPrevious}
					aria-label="previous"
					onClick={() => onGoToProject(prevProject.id)}
				>
					<ChevronLeft />
				</button>
			)}
			<div className={styles.content}>
				{/* ----------------------------------------------- */}
				{/* Close Button */}
				{/* ----------------------------------------------- */}
				<button onClick={onClose} className={styles.btnClose} data-key="close-button">
					<span>
						<strong>↙</strong>
					</span>
					<span>Close</span>
				</button>
				{/* ----------------------------------------------- */}
				{/* Title */}
				{/* ----------------------------------------------- */}
				<section className={styles.title} data-key="title">
					<h1>{title}</h1>
				</section>

				{/* ----------------------------------------------- */}
				{/* Mobile Links */}
				{/* ----------------------------------------------- */}
				<div className={styles.links + " " + styles.mobile} data-key="buttons">
					<a href={sitelink} target="_blank" onClick={() => handlePageGAEvents("live_site")}>
						Visit site
						<ExternalLink />{" "}
					</a>
					<a href={githublink} target="_blank" onClick={() => handlePageGAEvents("github")}>
						Github repo <Github />{" "}
					</a>
				</div>

				{/* ----------------------------------------------- */}
				{/* Image */}
				{/* ----------------------------------------------- */}
				<div className={styles.image} style={{ backgroundImage: `url(${bgImage})` }} ref={modalImgRef}></div>

				{/* ----------------------------------------------- */}
				{/* About Project */}
				{/* ----------------------------------------------- */}
				<section className={styles.about} data-key="about">
					<h2>About this project</h2>
					<div dangerouslySetInnerHTML={{ __html: details }} />

					{/* <p className={styles.lastUpdate}>Last Updated: 12th January 2012</p> */}
					{roles?.length > 0 && (
						<>
							<h3>Role in Project</h3>
							<ul>
								{roles?.map((item, i) => {
									return (
										<li key={i}>
											<span className={styles.circle}></span>
											{ROLES[item].label}
										</li>
									);
								})}
							</ul>
						</>
					)}
				</section>

				{/* ----------------------------------------------- */}
				{/* Tech Sheet */}
				{/* ----------------------------------------------- */}
				<section className={styles.tech} data-key="tech">
					<h2>Technical Sheet</h2>
					<p>Some noteworthy technologies I got involved with while working on this project.</p>

					<ul>
						{tech.map((item) => {
							const tool = TECH_STACKS[item];

							if (!tool) return null;

							return (
								<li key={tool.key}>
									<span className={styles.circle}></span>
									{tool?.label}
								</li>
							);
						})}
					</ul>
				</section>

				{/* ----------------------------------------------- */}
				{/* Desktop Links */}
				{/* ----------------------------------------------- */}
				<div className={styles.links + " " + styles.desktop} data-key="buttons">
					{sitelink && (
						<a href={sitelink} target="_blank" onClick={() => handlePageGAEvents("live_site")}>
							Visit site
							<ExternalLink />{" "}
						</a>
					)}

					{githublink && (
						<a href={githublink} target="_blank" onClick={() => handlePageGAEvents("github")}>
							Github repo <Github />{" "}
						</a>
					)}
				</div>
			</div>
			{/* ----------------------------------------------- */}
			{/* Next Button Desktop */}
			{/* ----------------------------------------------- */}
			{nextProject && (
				<button
					value="next"
					className={styles.desktopNavigator + " " + styles.btnNext}
					aria-label="previous"
					onClick={() => onGoToProject(nextProject.id)}
				>
					<ChevronRight />
				</button>
			)}

			{/* ----------------------------------------------- */}
			{/* Prev and Next Buttons Mobile */}
			{/* ----------------------------------------------- */}
			<div className={styles.mobileNavigator}>
				{prevProject ? (
					<button value="previous" aria-label="previous" onClick={() => onGoToProject(prevProject.id)}>
						<ChevronLeft />
					</button>
				) : (
					<div></div>
				)}

				{nextProject ? (
					<button value="next" aria-label="previous" onClick={() => onGoToProject(nextProject.id)}>
						<ChevronRight />
					</button>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}

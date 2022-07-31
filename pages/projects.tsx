import Head from "next/head";
import { NextPage } from "next";
import { Noise, Banners, Nav, ProjectListView, ProjectModal, Layout, Projects } from "#/components";
import styles from "#/styles/_pages/projects.module.scss";
import { useSelectProjectAnimation, useProjectsLettersInit } from "#/hooks";
const ProjectsPage: NextPage = () => {
	const { textWrapperRef, scrollIndicatorRef } = useProjectsLettersInit();

	const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, onGoToProject, isOpen } =
		useSelectProjectAnimation();
	return (
		<>
			<Nav />
			<div className={styles.main}>
				<Head>
					<title>David Obodo - Projects</title>
					<meta name="description" content="David Obodo's portfolio website" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Banners.OtherPages
					texts={["Projects", "Playground", "xperiments", "Replicas"]}
					textWrapperRef={textWrapperRef}
					scrollIndicatorRef={scrollIndicatorRef}
				/>
				<Layout.DarkSection>
					<div className={styles.content}>
						{/* <section className={styles.gridWrapper}>
                            <ProjectListView location="projects" onViewProject={onSelectProject} />
                        </section> */}

						<Projects onViewProject={onSelectProject} location="profile" />
					</div>
				</Layout.DarkSection>
				<Noise />
				<ProjectModal
					selectedProjectId={selectedProjectId}
					modalRef={modalRef}
					onDeselectProject={onDeselectProject}
					modalImgRef={modalImgRef}
					onGoToProject={onGoToProject}
					isOpen={isOpen}
				/>
			</div>
		</>
	);
};

export default ProjectsPage;

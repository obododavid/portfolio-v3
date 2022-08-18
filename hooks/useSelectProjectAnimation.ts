import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { singleProjectAnimations } from "#/utils/animations";
import { events, registerEvent } from "#/utils/analytics/events";

const { flipProjectIn, removeCurrentProject, displayNextProject } = singleProjectAnimations;
export default function useSelectProjectAnimation({ initialId = "" }: { initialId?: string }) {
	const router = useRouter();
	const [selectedProjectId, setSelectedProjectId] = useState<string>(initialId);
	const sourceElem = useRef<HTMLDivElement | null>(null);
	const modalImgRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	//-------------------------------
	// User clicked on a project
	//-------------------------------
	const onSelectProject = (e: React.MouseEvent<HTMLLIElement | HTMLDivElement, MouseEvent>) => {
		const { id, type } = e.currentTarget.dataset;
		const floatingBox = document.querySelector("[data-key='project-box']") as HTMLDivElement;

		const selectedGridBox = e.currentTarget as HTMLDivElement;
		sourceElem.current = type === "list-item" ? floatingBox : selectedGridBox;
		window.history.pushState(null, "New Page Title", `/projects/${id}`);

		registerEvent(events.shared.homeAndProjects.viewProjectInfo({ project_title: id as string }));
		setSelectedProjectId(id as string);
		setIsOpen(true);
	};

	//-------------------------------
	// User click on arrow buttons
	//-------------------------------
	const onGoToProject = (id: string) => {
		//Scroll to top
		const elem = document.querySelector("[data-key='project-info']") as HTMLDivElement;
		elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
		registerEvent(events.shared.homeAndProjects.viewProjectInfo({ project_title: id as string }));
		const modal = modalRef.current;
		const modalImage = modalImgRef.current;

		if (modal && modalImage) {
			const tl = removeCurrentProject({
				modalContainer: modal,
				modalMedia: modalImage,
			});

			tl.then(() => {
				setSelectedProjectId(id);
				window.history.pushState(null, "New Page Title", `/projects/${id}`);
				displayNextProject({
					modalContainer: modal,
					modalMedia: modalImage,
				});
			});
		}
	};

	const [tl, setTl] = useState<gsap.core.Timeline>();

	// Close single project view
	const onDeselectProject = () => {
		tl?.reverse().then(() => {
			window.history.pushState(null, "New Page Title", router.pathname);
			setSelectedProjectId("");
			setIsOpen(false);
		});
	};

	useEffect(() => {
		if (isOpen) {
			if (sourceElem.current && modalImgRef.current && modalRef.current) {
				const tl = flipProjectIn({
					modal: modalRef.current,
					source: sourceElem.current,
					destination: modalImgRef.current,
				});

				setTl(tl);
			}
		}
	}, [isOpen]);

	return {
		selectedProjectId,
		onSelectProject,
		onDeselectProject,
		modalImgRef,
		modalRef,
		onGoToProject,
		isOpen,
		setSelectedProjectId,
	};
}

import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "..";
import { usePageLeaveAnimationContext } from "#/state";
import { animPageLoaders, notFoundPageAnimations } from "#/utils/animations/atoms";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

const { openNoiseLayers, drawSvgLogo, closeNoiseLayers } = animPageLoaders;
const { bannerAnimation, stopRedirectAnimation } = notFoundPageAnimations;
export default function use404PageInit() {
	//-------------------------------------------
	// GENERAL HELPERS
	//-------------------------------------------
	const router = useRouter();
	const [countdown, setCountdown] = useState(15);
	const [timerId, setTimerId] = useState<NodeJS.Timeout>();
	const [logoVisibility, setLogoVisibility] = useState(true);
	const gradientRef = useRef<HTMLDivElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const containerSelector = gsap.utils.selector(containerRef);

	//-------------------------------------------
	// REDIRECT FUNCTIONS/HELPERS
	//-------------------------------------------
	const onInitRedirect = () => {
		const limit = new Date().getTime() + 16000;
		const id = setInterval(() => {
			const now = new Date().getTime();
			const distance = limit - now;
			const inas = Math.floor((distance % (1000 * 60)) / 1000);
			setCountdown(inas);
		}, 1000);
		setTimerId(id);
	};

	const onStopRedirect = () => {
		clearTimeout(timerId);
		const tl = stopRedirectAnimation({
			textsToRemove: containerSelector('[data-key="mortal-text"]'),
			container: containerRef.current,
			gradient: gradientRef.current,
			scroll: scrollRef.current,
		});

		tl.then(() => {
			setLogoVisibility(false);
		});
	};

	const redirectToHome = () => {
		closeNoiseLayers({ node: document.querySelectorAll("[data-key='layer']") }).then(() => {
			router.push("/");
		});
	};

	useEffect(() => {
		if (countdown === 0) {
			clearTimeout(timerId);
			redirectToHome();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countdown, timerId]);

	useEffect(() => {
		return () => {
			clearTimeout(timerId);
		};
	}, [timerId]);

	//-------------------------------------------
	// PAGE ANIMATION
	//-------------------------------------------
	const { pageLeaveAnimation } = usePageLeaveAnimationContext();

	useIsomorphicLayoutEffect(() => {
		// Navigating to this page directly from the browser url input
		const logo = document.querySelector("[data-key='logo']") as Element;
		const logoChildren = document.querySelectorAll("[data-key='logo'] path");
		const layers = document.querySelectorAll("[data-key='layer']");

		if (pageLeaveAnimation) {
			const master = gsap.timeline();
			master.add(openNoiseLayers(layers));

			return () => {
				master.kill();
			};
		} else {
			const master = gsap.timeline();
			master
				.add(drawSvgLogo(logo, logoChildren))
				.add(openNoiseLayers(layers))
				.add(
					bannerAnimation({
						sections: containerSelector('[data-key="section"]'),
					})
				)
				.add(onInitRedirect);

			return () => {
				master.kill();
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		onStopRedirect,
		countdown,
		logoVisibility,
		containerRef,
		scrollRef,
		gradientRef,
	};
}
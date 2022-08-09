import gsap from "gsap";
import { useRef, RefObject } from "react";
import { useRadialGradientAnimContext } from "#/state";
import { useIsomorphicLayoutEffect } from ".";

export default function usePinRadialGradient({ darkSectionRef }: { darkSectionRef: RefObject<HTMLDivElement> }) {
	const darkSectionRadialGradientRef = useRef(null);

	const { setTimeline } = useRadialGradientAnimContext();

	//-------------------------------------------------
	// PIN RADIAL GRADIENT TO BLACK SECTION CENTER
	//-------------------------------------------------

	useIsomorphicLayoutEffect(() => {
		if (darkSectionRef.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: darkSectionRef.current,
					start: "top top",
					end: "bottom bottom",
					toggleActions: "restart pause reverse pause",
					endTrigger: darkSectionRef.current,
					pin: darkSectionRadialGradientRef.current,
					// markers: true,
				},
			});
			// setTl(tl);
			setTimeline(tl);

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [darkSectionRef]);

	const recalculateGradient = () => {
		// timeline.scrollTrigger.refresh();
	};

	return {
		darkSectionRef,
		darkSectionRadialGradientRef,
		recalculateGradient,
	};
}

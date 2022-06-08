import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useInitAnimation() {
    const preloaderBgRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<SVGSVGElement>(null);
    const bannerRef = useRef(null);
    const fieldRef = useRef<HTMLHeadingElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const firstSubFieldRef = useRef(null);
    const secondSubFieldRef = useRef(null);
    const profilePicRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (preloaderBgRef.current && logoRef.current) {
            const tl = gsap.timeline();

            tl.to(logoRef.current.children, { strokeDashoffset: 0, duration: 2, stagger: 0.8 })
                .to(logoRef.current, { fill: "#fcfcfc" })
                .to(logoRef.current, { opacity: 0 })
                .to(preloaderBgRef.current, { y: "-100vh" })
                .to(nameRef.current!.querySelectorAll('[data-key="letter"]'), { x: 0 })
                .to(fieldRef.current!.querySelectorAll('[data-key="letter"]'), { x: 0 })
                .to(firstSubFieldRef.current, { y: 0 })
                .to(secondSubFieldRef.current, { y: 0 })
                .to(profilePicRef.current, { opacity: 1 })
                .to(profilePicRef.current!.querySelector("polyline"), { strokeDashoffset: 0, duration: 1 })
                .to(scrollIndicatorRef.current, { opacity: 1 });
        }
    }, [preloaderBgRef, logoRef]);

    return {
        preloaderBgRef,
        logoRef,
        bannerRef,
        fieldRef,
        nameRef,
        firstSubFieldRef,
        secondSubFieldRef,
        profilePicRef,
        scrollIndicatorRef
    };
}

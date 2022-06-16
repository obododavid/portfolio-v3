import { useRef, useEffect } from "react";
import gsap from "gsap";
export default function useRevealText() {
    const textWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textWrapperRef.current) {
            const allLines = textWrapperRef?.current.querySelectorAll("div div span");
            gsap.to(allLines, {
                scrollTrigger: {
                    trigger: textWrapperRef.current,
                    start: "top 70%",
                    toggleActions: "restart pause pause reverse"
                },
                opacity: 1,
                y: 0,
                skewX: 0,
                rotation: 0,
                ease: "power4.out",
                stagger: 0.1
            });
        }
    }, []);

    return {
        textWrapperRef
    };
}

import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const words = ["Plan 👉🏽", "Design 👉🏽", "Development 👉🏽", "Launch"];

export default function ScrollBlurText() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRefs = useRef<HTMLDivElement[]>([]);
    const [isLastWordVisible, setIsLastWordVisible] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${words.length * 300}`,
                    scrub: true,
                    pin: true,
                },
            });

            words.forEach((_, i) => {
                const el = wordRefs.current[i];
                if (i === words.length - 1) {
                    setIsLastWordVisible(true);
                } else {
                    setIsLastWordVisible(false);
                }
                tl.fromTo(
                    el,
                    {y: 80, opacity: 0, filter: "blur(8px)"},
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 0.4,
                    },
                    i
                );

                tl.to(
                    el,
                    {
                        y: -80,
                        opacity: 0,
                        filter: "blur(8px)",
                        duration: 0.4,
                    },
                    i + 0.5
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div
                ref={containerRef}
                style={{
                    height: "100vh",
                    backgroundColor: "black",
                    color: isLastWordVisible ? "#00b8db" : "green",
                    fontSize: "3rem",
                    fontWeight: "thin",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {words.map((word, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) wordRefs.current[index] = el;
                        }}
                        style={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            willChange: "transform, opacity, filter",
                        }}
                    >
                        {word}
                    </div>
                ))}
            </div>
            <div style={{height: "200vh", backgroundColor: "gray"}}/>
        </>
    );
}
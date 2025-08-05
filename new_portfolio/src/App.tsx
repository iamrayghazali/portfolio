import React from "react";
import './App.css'
import {TracingBeam} from "./components/ui/tracing-beam";
import {useGitHub} from "./context/GithubContext";
import linkedInLogo from "@/assets/icons/linkedin.svg"
import gitHubLogo from "@/assets/icons/github.svg"
import emailLogo from "@/assets/icons/email.svg"
import {LampDemo} from "@/components/ui/lamp";
import {motion} from "framer-motion";
// TECH SVGS
import javascript from "@/assets/icons/tech/javascript.svg"
import java from "@/assets/icons/tech/java.svg"
import python from "@/assets/icons/tech/python.svg"
import php from "@/assets/icons/tech/php.svg"
import laravel from "@/assets/icons/tech/laravel.svg"
import nodejs from "@/assets/icons/tech/nodejs.svg"
import django from "@/assets/icons/tech/django.svg"
import react from "@/assets/icons/tech/react.svg"


function App() {
    const {repos, loading} = useGitHub();

    if (loading) {
        return <h1>loading...</h1>
    }

    const findMainScreenshot = (array) => {
        return array.find((screenshot) => screenshot.name === "main.png");
    }

    return (
        <>
            <div className="relative bg-black">

                <TracingBeam>
                    <section className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 w-1/4 z-20 flex flex-col items-center p-5">
                            <motion.div
                                initial={{y: -100, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{duration: 1.2, ease: "easeOut"}}
                                className="pt-5 sticky flex items-center justify-between whitespace-nowrap text-white gap-4"
                            >
                                <a className=" transition-all duration-300 hover:text-cyan-500 active:scale-95 "
                                   href="">
                                    <p className="font-thin">home</p>
                                </a>
                                <a className="transition-colors duration-300 hover:text-cyan-500" href="">
                                    <p className="font-thin">about</p>
                                </a>
                                <a className="transition-colors duration-300 hover:text-cyan-500" href="">
                                    <p className="font-thin">projects</p>
                                </a>
                                <a className="">
                                    <p className="font-bold text-transparent bg-clip-text drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]
                                     bg-[linear-gradient(115deg,_rgba(255,255,255,0.05)_30%,_white_50%,_rgba(255,255,255,0.05)_70%)]
                                      bg-[length:300%_100%] bg-[position:200%_0] animate-[shine_5s_linear_infinite]">
                                        let's talk
                                    </p>
                                </a>
                            </motion.div>
                        </div>
                        <LampDemo text={"Hi, I'm Ray"}></LampDemo>
                    </section>

                    <section className={"h-screen bg-black"}>
                        <div className="flex flex-col gap-20 m-10 sm:grid sm:grid-cols-2 sm:grid-rows-2">

                            <div className="relative overflow-hidden max-h-28 pt-5 pb-5 bg-black sm:col-start-1 sm:row-start-1">
                                {/* track: no gap, double width, no wrap */}
                                <div className="flex flex-nowrap min-w-[200%] will-change-transform animate-marquee">
                                    {[java, javascript, python, php].map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt=""
                                            className="block h-16 w-auto object-contain mr-6 bg-black"
                                        />
                                    ))}
                                    {/* duplicate set for seamless loop */}
                                    {[java, javascript, python, php].map((src, i) => (
                                        <img
                                            key={`dup-${i}`}
                                            src={src}
                                            alt=""
                                            className="block h-16 w-auto object-contain mr-6 bg-black"
                                        />
                                    ))}
                                </div>

                                {/* fades */}
                                <div className="absolute left-0 top-0 h-full w-40 z-30 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none"></div>
                                <div className="absolute right-0 top-0 h-full w-40 z-30 bg-gradient-to-l from-black via-black/70 to-transparent pointer-events-none"></div>
                            </div>

                            <div
                                className="relative overflow-hidden max-h-28 pt-5 pb-5 bg-black sm:col-start-2 sm:row-start-2">

                                <div className="flex animate-marquee-reverse gap-10">
                                    {[laravel, nodejs, django, react].map((src, i) => (
                                        <img key={i} className="h-16 w-auto" src={src} alt="tech"/>
                                    ))}
                                    {[laravel, nodejs, django, react].map((src, i) => (
                                        <img key={`dup-${i}`} className="h-16 w-auto" src={src} alt="tech"/>
                                    ))}
                                </div>
                                <div className="absolute left-0 top-0 h-full w-44 bg-gradient-to-r from-black via-black/70 via-30% to-transparent to-80% pointer-events-none"></div>
                                <div className="absolute right-0 top-0 h-full w-44 bg-gradient-to-l from-black via-black/70 via-30% to-transparent to-80% pointer-events-none"></div>
                            </div>

                            <div className="hidden sm:block">
                                <div className="grid grid-cols-2 h-full w-full">
                                    <div className="flex justify-center items-center text-primary font-thin">
                                        <h1 className="text-4xl font-fira italic">Languages</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <div className="grid grid-cols-2 h-full w-full">
                                    <div
                                        className="col-start-2 flex justify-center items-center text-primary font-thin">
                                        <h1 className="text-4xl font-fira ">Frameworks</h1>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>
                    <div className={"h-screen bg-black"}>

                    </div>
                    <div className={"h-screen bg-red-600"}>
                    </div>
                    <div className={"h-screen bg-green-600"}></div>
                </TracingBeam>
            </div>
        </>
    )
}

export default App

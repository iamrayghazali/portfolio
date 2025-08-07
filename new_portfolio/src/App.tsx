import React, {useEffect} from "react";
import './App.css'
import {TracingBeam} from "./components/ui/tracing-beam";
import {useGitHub} from "./context/GithubContext";
import linkedInLogo from "@/assets/icons/linkedin.svg"
import gitHubLogo from "@/assets/icons/github.svg"
import emailLogo from "@/assets/icons/email.svg"
import {LampDemo} from "@/components/ui/lamp";
import {motion} from "framer-motion";
import {Particles} from "@/components/magicui/particles";
// TECH SVGS
import jsIMG from "/src/assets/icons/tech/javascript.svg"
import javaIMG from "/src/assets/icons/tech/java.svg"
import phpIMG from "/src/assets/icons/tech/php.svg"
import pythonIMG from "/src/assets/icons/tech/python.svg"
import djangoIMG from "/src/assets/icons/tech/django.svg"
import reactIMG from "/src/assets/icons/tech/react.svg"
import laravelIMG from "/src/assets/icons/tech/laravel.svg"
import nodejsIMG from "/src/assets/icons/tech/nodejs.svg"
import {Timeline} from "@/components/ui/timeline";


function App() {
    const {repos, loading} = useGitHub();

    useEffect(() => {
        console.log(repos);
    }, []);

    if (loading) {
        return <h1>loading...</h1>
    }

    const findMainScreenshot = (array) => {
        return array.find((screenshot) => screenshot.name === "main.png");
    }

    const projectsArray = [
        {
            title: "JavaScript",
            content: javaIMG + "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        }
    ];

    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Built and launched Aceternity UI and Aceternity UI Pro from scratch
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/templates/startup-1.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-2.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2023",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Deployed 5 new components on Aceternity today
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Card grid component
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Startup template Aceternity
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Random file upload lol
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Himesh Reshammiya Music CD
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Salman Bhai Fan Club registrations open
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),}
            ]

    return (
        <>
            <div className="relative bg-black">

                <TracingBeam>
                    <Particles className="absolute w-full h-full"/>

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
                    <section className={"sm:h-dvh h-full bg-gradient-to-b from-[rgb(4,4,12)] to-black"}>
                        <div className="absolute inset-0 rounded-lg z-0">
                            <Particles className="w-full h-full"/>
                        </div>
                        <div className="m-10 mt-0 grid grid-cols-1 sm:grid-cols-2 gap-20">
                            <div className="sm:translate-y-25 flex flex-col text-center sm:text-start sm:justify-self-end gap-6 min-w-1/2">
                                <h1 className="sm:text-3xl text-slate-200 text-lg font-bold font-fira">
                                    Programming Languages
                                </h1>
                                <div className="relative w-full max-w-[370px] aspect-[16/9] bg-black grid grid-cols-2 grid-rows-2 gap-8 place-items-center p-6">
                                    <div className="absolute inset-0 rounded-lg z-0">
                                        <Particles className="w-full h-full"/>
                                    </div>

                                    <img src={jsIMG} className="h-10 w-10 sm:h-15 sm:w-15 z-10" alt="JavaScript"/>
                                    <img src={javaIMG} className="h-10 w-10 sm:h-15 sm:w-15 z-10" alt="Java"/>
                                    <img src={pythonIMG} className="h-10 w-10 sm:h-15 sm:w-15 z-10" alt="Python"/>
                                    <img src={phpIMG} className="h-10 w-10 sm:h-15 sm:w-15 z-10" alt="PHP"/>
                                </div>
                            </div>

                            <div className="sm:-translate-y-25 sm:row-start-2 text-center sm:text-start sm:col-start-2 flex justify-center flex-col">
                                <h1 className="sm:text-3xl sm:ml-20 text-slate-200 text-lg font-bold font-fira">
                                    Frameworks
                                </h1>

                                <div className="
                                        relative
                                        w-full max-w-[400px]
                                        aspect-auto
                                        border-2 bg-black
                                        grid grid-cols-2 grid-rows-3 gap-6 place-items-center p-6">
                                    <div className="absolute inset-0 rounded-lg z-0">
                                        <Particles className="w-full h-full"/>
                                    </div>

                                    <img src={djangoIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="JavaScript"/>
                                    <img src={pythonIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="Java"/>
                                    <img src={reactIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="Python"/>
                                    <img src={laravelIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="PHP"/>
                                    <img src={nodejsIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="Python"/>
                                    <img src={djangoIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="PHP"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </TracingBeam>
                <div className={"h-screen bg-black"}>
                    <Timeline data={data}></Timeline>
                </div>
                <div className={"h-screen bg-green-600"}></div>
            </div>
        </>
    )
}

export default App

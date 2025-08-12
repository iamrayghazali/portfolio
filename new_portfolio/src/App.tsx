import React from "react";
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
import expressIMG from "/src/assets/icons/tech/express.svg"
import jestIMG from "/src/assets/icons/tech/jest.svg"
import jsIMG from "/src/assets/icons/tech/javascript.svg"
import javaIMG from "/src/assets/icons/tech/java.svg"
import phpIMG from "/src/assets/icons/tech/php.svg"
import pythonIMG from "/src/assets/icons/tech/python.svg"
import djangoIMG from "/src/assets/icons/tech/django.svg"
import reactIMG from "/src/assets/icons/tech/react.svg"
import laravelIMG from "/src/assets/icons/tech/laravel.svg"
import nodejsIMG from "/src/assets/icons/tech/nodejs.svg"
import {Timeline} from "@/components/ui/timeline";
import {projectsMeta} from "./data/projectsMetaData";


function App() {
    const {repos, loading} = useGitHub();

    if (loading) {
        return <h1>loading...</h1>
    }

    const projectsArray = repos.map(repo => {
        const meta = projectsMeta[repo.name];

        return {
            title: repo.name,
            content: (
                <div className="font-fira">

                    <div className="w-full flex  gap-2 mb-2 ml-0">
                        <a target="_blank"
                            className="hover:cursor-pointer text-sm px-5 py-2.5 text-white text-center inline-flex items-center border-2 border-cyan-900 rounded-lg"
                            href={repo.html_url}>
                            <img
                                src={gitHubLogo}
                                alt="GitHub Logo"
                                width="20"
                                height="20"
                                className="mr-3"
                            />
                            Go to GitHub repository
                        </a>
                    </div>

                    {meta?.technologies && (
                        <ul className="flex flex-wrap gap-2 text-xs font-medium text-cyan-400">
                            {meta.technologies.map(tech => (
                                <li key={tech} className="bg-cyan-900 px-2 py-1 rounded">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    )}

                    <p className="text-white font-fira mt-5 mb-4 text-sm font-bold md:text-lg ">
                        {repo.description}
                    </p>

                    <p className="mt-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                        {meta?.description}
                    </p>
                    <div className="mt-5 grid grid-cols-2 gap-4 mt-4">
                        {repo.img?.map(img => (
                            <img
                                key={img.sha}
                                src={img.download_url}
                                alt={`${repo.name} screenshot`}
                                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                            />
                        ))}
                    </div>

                </div>
            ),
        };
    });

    return (
        <>
            <div className="relative bg-black">

                <TracingBeam>
                    <Particles className="absolute w-full h-full"/>

                    <section id="hero" className="relative border-b-2 border-white">
                        <div className="absolute left-1/2 -translate-x-1/2 w-1/4 z-20 flex flex-col items-center p-5">
                            <motion.div
                                initial={{y: -100, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{duration: 1.2, ease: "easeOut"}}
                                className="pt-5 sticky flex items-center justify-between whitespace-nowrap text-white gap-4"
                            >
                                <a className=" transition-all duration-300 hover:text-cyan-500 active:scale-95 "
                                   href="#hero">
                                    <p className="font-thin">home</p>
                                </a>
                                <a className="transition-colors duration-300 hover:text-cyan-500" href="#tech">
                                    <p className="font-thin">tech</p>
                                </a>
                                <a className="transition-colors duration-300 hover:text-cyan-500" href="#projects">
                                    <p className="font-thin">projects</p>
                                </a>
                                <a className="" href="#contact">
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

                    <section id="tech" className={"sm:h-dvh h-full bg-black border-b-2 border-white "}>
                        <div className="absolute inset-0 rounded-lg z-0">
                            <Particles className="w-full h-full"/>
                        </div>
                        <div className="m-10 mt-0 grid grid-cols-1 sm:grid-cols-2 gap-20">
                            <div
                                className="mt-8 sm:translate-y-25 flex flex-col text-center sm:text-start sm:justify-self-end gap-6 min-w-1/2">
                                <motion.h1
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="sm:text-3xl text-slate-200 text-lg font-bold font-fira">
                                    Programming Languages
                                </motion.h1>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="relative w-full max-w-[370px] aspect-[16/9] bg-black grid grid-cols-2 grid-rows-2 gap-8 place-items-center p-6">
                                    <div className="absolute inset-0 rounded-lg z-0">
                                        <Particles className="w-full h-full"/>
                                    </div>

                                    <img src={jsIMG} className="h-10 w-10 sm:h-15 sm:w-15 z-10" alt="JavaScript"/>
                                    <img src={javaIMG} className="h-10 w-10 sm:h-15 sm:w-15 z-10" alt="Java"/>
                                    <img src={pythonIMG} className="h-10 w-10 sm:h-15 sm:w-15 z-10" alt="Python"/>
                                    <img src={phpIMG} className="h-10 w-10 sm:h-15 sm:w-15 z-10" alt="PHP"/>
                                </motion.div>
                            </div>

                            <div
                                className="sm:-translate-y-25 sm:row-start-2 text-center sm:text-start sm:col-start-2 flex justify-center flex-col">
                                <motion.h1
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="sm:text-3xl sm:ml-20 text-slate-200 text-lg font-bold font-fira">
                                    Frameworks
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="
                                        relative
                                        w-full max-w-[400px]
                                        aspect-auto
                                        border-2 bg-black
                                        grid grid-cols-2 grid-rows-3 gap-6 place-items-center p-6">
                                    <div className="absolute inset-0 rounded-lg z-0">
                                        <Particles className="w-full h-full"/>
                                    </div>

                                    <img src={djangoIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="JavaScript"/>
                                    <img src={jestIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="Java"/>
                                    <img src={reactIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="Python"/>
                                    <img src={laravelIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="PHP"/>
                                    <img src={nodejsIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="Python"/>
                                    <img src={expressIMG} className="h-10 w-10 sm:h-15 sm:w-15  z-10" alt="PHP"/>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                </TracingBeam>
                    <section id="projects" className={`${!repos.length ?  ("h-[20vh]") : ("min-h-[80vh]")} bg-black relative`}>
                        <Particles className="absolute w-full h-full"/>
                        { !repos.length ? (
                            <p className="text-center text-gray-400 m-20">Projects unavailable right now. Please try again later.</p>
                        ) : (
                            <Timeline data={projectsArray}></Timeline>
                        )}
                    </section>
                <section id="about-me" className="bg-black sm:mt-20 h-dvh flex flex-col justify-center items-center text-center px-6 sm:px-32">
                    <motion.h3
                        className="text-white mb-20 text-4xl font-bold"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        About Me
                    </motion.h3>

                    <motion.p
                        className="text-white text-lg font-fira max-w-3xl p-5"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        I enjoy creating projects that combine <span className="text-gray-400">solid backend functionality</span> with a <span className="text-gray-400">polished, user-friendly design</span> — that’s why full stack development suits me. My background in <span className="text-gray-400">video editing</span> fuels my passion for <span className="text-gray-400">creativity</span>, while coding challenges me to solve problems and build <span className="text-gray-400">efficient systems</span>. I’m driven by making things that <span className="text-gray-400">look good</span> and <span className="text-gray-400">work well</span>.
                    </motion.p>
                </section>
                <section id="contact" className="h-fit mb-20 md:mb-30">
                            <p className="mb-15 md:mb-30 text-3xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                                Get in touch
                            </p>
                        <div className="flex justify-center items-center gap-5 flex-col md:mt-30 md:mb-5 ">
                            <div className="flex gap-2 mb-2">
                                <a target="_blank" className="hover:pointer text-lg px-5 py-2.5 text-white text-center inline-flex items-center border-2 border-cyan-900 rounded-lg"
                                   href={"mailto:ghazali.raydan@gmail.com"}>
                                    <img
                                        src={emailLogo}
                                        alt="Email Logo"
                                        width="30"
                                        height="30"
                                        className="mr-3"
                                    />
                                    Send an Email
                                </a>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <a target="_blank" className="hover:pointer text-lg px-5 py-2.5 text-white text-center inline-flex items-center border-2 border-cyan-900 rounded-lg"
                                   href={"https://www.linkedin.com/in/raydan-ghazali/"}>
                                    <img
                                        src={linkedInLogo}
                                        alt="LinkedIn Logo"
                                        width="30"
                                        height="30"
                                        className="mr-3"
                                    />
                                    Write on LinkedIn
                                </a>
                            </div>
                        </div>

                </section>
                <section id="footer" className=" bg-cyan-900 flex flex-col p-10 mt-10 mb-10 md:p-0 md:flex-row md:items-center md:justify-evenly gap-5 ">

                        <p className="flex md:justify-start justify-center items-center text-white">
                            raydandev.com
                        </p>

                        <div className="mx-auto md:mx-0 flex justify-center items-center text-white ">
                            <p>Made by | <a className="font-bold italic hover:pointer" href={"https://github.com/iamrayghazali"}>This guy</a></p>
                        </div>

                        <div className="flex justify-center items-center gap-3 md:justify-around md:mt-0 md:gap-8 md:mt-5 ">

                            <a href="https://github.com/iamrayghazali" target="_blank" className="flex justify-center items-center flex-col p-2">
                                <img height="30" width="30" src={gitHubLogo} alt="GitHub Logo"></img>
                                <p className="hidden sm:block text-white text-xs p-2">GitHub</p>
                            </a>
                            <a href="https://www.linkedin.com/in/raydan-ghazali/" target="_blank" className="flex justify-center items-center flex-col">
                                <img height="30" width="30" src={linkedInLogo} alt="LinkedIn Logo"></img>
                                <p className="hidden sm:block text-white text-xs  p-2">LinkedIn</p>
                            </a>
                            <a href="mailto:ghazali.raydan@gmail.com" target="_blank" className="flex justify-center items-center flex-col">
                                <img height="30" width="30" src={emailLogo} alt="Email Logo"></img>
                                <p className="hidden sm:block text-white text-xs p-2">Email</p>
                            </a>

                        </div>

                </section>
            </div>
        </>
    )
}

export default App

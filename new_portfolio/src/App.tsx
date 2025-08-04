import React from "react";
import './App.css'
import {TracingBeam} from "./components/ui/tracing-beam";
import {useGitHub} from "./context/GithubContext";
import linkedInLogo from "./assets/logos/linkedin.svg"
import gitHubLogo from "./assets/logos/github.svg"
import emailLogo from "./assets/logos/email.svg"
import {LampDemo} from "@/components/ui/lamp";
import {motion} from "framer-motion";


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
            <TracingBeam>

                <div className="bg-black">
                    <div className="relative">
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
                                    <p className="font-bold text-transparent bg-clip-text drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] bg-[linear-gradient(115deg,_rgba(255,255,255,0.05)_30%,_white_50%,_rgba(255,255,255,0.05)_70%)] bg-[length:300%_100%] bg-[position:200%_0] animate-[shine_5s_linear_infinite]">
                                        let's talk
                                    </p>
                                </a>
                            </motion.div>
                        </div>
                        <LampDemo text={"Hi, I'm Ray"}></LampDemo>
                    </div>
                    <div className={"h-screen bg-black"}>
                        <div className="flex mt-5 mb-5 gap-3">

                        </div>
                    </div>
                    <div className={"h-screen bg-black"}>

                    </div>
                    <div className={"h-screen bg-red-600"}>
                    </div>
                    <div className={"h-screen bg-green-600"}></div>
                </div>
            </TracingBeam>

        </>
    )
}

export default App

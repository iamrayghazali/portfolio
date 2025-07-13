import React, {useEffect} from "react";
import './App.css'
// @ts-ignore
import ScrollBlurText from "./components/ScrollBlurText.tsx";
import {TracingBeam} from "./components/ui/tracing-beam";
import {Menu, MenuItem, ProductItem, HoveredLink} from "./components/ui/navbar-menu";
import {useGitHub} from "./context/GithubContext";
import {TextHoverEffect} from "@/components/ui/text-hover-effect";
import linkedInLogo from "./assets/logos/linkedin.svg"
import gitHubLogo from "./assets/logos/github.svg"
import emailLogo from "./assets/logos/email.svg"
import {LampContainer, LampDemo} from "@/components/ui/lamp";


function App() {
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
    const [activeMenuItem, setActiveMenuItem] = React.useState<string | null>(null);
    const {repos, loading} = useGitHub();

    if (loading) {
        return <h1>loading...</h1>
    }

    const findMainScreenshot = (array) => {
        return array.find((screenshot) => screenshot.name === "main.png");
    }

    return (
        <>
            <div className="bg-black">

            <div className=" flex flex-col items-center p-5">
                <Menu setActive={setActiveMenu}>
                    {/*                <HoveredLink>
                    <TextHoverEffect text={"RAY"} ></TextHoverEffect>
                </HoveredLink>*/}
                    <MenuItem setActive={setActiveMenuItem} active={activeMenuItem} item={"home"}></MenuItem>


                    <MenuItem setActive={setActiveMenuItem} active={activeMenuItem} item={"projects"}>
                        {
                            repos && repos.map((repo) => (
                                <div key={repo.id}>
                                    <HoveredLink>
                                        {/*TODO fix img loading from cache*/}
                                        <ProductItem title={repo.name} description={repo.description}
                                                     href={repo.screenshots[0].html_url}
                                                     src={findMainScreenshot(repo.screenshots).download_url} img={true}>
                                        </ProductItem>
                                    </HoveredLink>
                                </div>
                            ))
                        }
                    </MenuItem>
                    <MenuItem setActive={setActiveMenuItem} active={activeMenuItem} item={"let's talk"}>
                        <ProductItem title={"LinedIn"} description={"Main way to connect, check out my profile!"}
                                     href={"IMG"}
                                     src={linkedInLogo} img={!!linkedInLogo}></ProductItem>
                        <ProductItem title={"Github"} description={"You can see all my projects on GitHub."}
                                     href={"IMG"}
                                     src={gitHubLogo} img={!!gitHubLogo}></ProductItem>
                        <ProductItem title={"Email"} description={"Email is the main way to connect with me."}
                                     href={"IMG"}
                                     src={emailLogo} img={!!emailLogo}></ProductItem>

                    </MenuItem>


                </Menu>
            </div>
            <TracingBeam className={""}>

                    <LampDemo text={"Hi, I'm Ray"}></LampDemo>
                    <div className="sticky left-0">

                            <ScrollBlurText></ScrollBlurText>

                    </div>
            </TracingBeam>
            <div className={"h-screen bg-black"}></div>
            </div>

        </>
    )
}

export default App

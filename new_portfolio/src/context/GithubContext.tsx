// src/context/GitHubContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {projectsMeta} from "@/data/projectsMetaData";
import { AxiosError } from "axios";

const GitHubContext = createContext(null);

type Screenshot = {
    sha: string;
    download_url: string;
};

type Repo = {
    name: string;
    description: string | null;
    html_url: string;
    url: string;
    img?: Screenshot[];
};

export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cachedData = localStorage.getItem("reposCache");
        const cachedTime = localStorage.getItem("reposCacheTime");

        const oneDayInMilliseconds = 86400000;

        if (cachedData && cachedTime && Date.now() - Number(cachedTime) < oneDayInMilliseconds) {
            setRepos(JSON.parse(cachedData));
            setLoading(false);
            return; // use cache, skip API
        }

        axios.get("https://api.github.com/users/iamrayghazali/repos")
            .then(async (res) => {
                const filtered = filterRepos(res.data);
                const structured = await createStructure(filtered);
                setRepos(structured);
                localStorage.setItem("reposCache", JSON.stringify(structured));
                localStorage.setItem("reposCacheTime", Date.now().toString());
            })
            .catch(handleRateLimitOrError)
            .finally(() => setLoading(false));
    }, []);

    const filterRepos = (data: Repo[]) :Repo[] => {
        return data.filter(repo => repo.name !== "iamrayghazali" && repo.name !== "portfolio");
    }

    const createStructure = async (data: Repo[]): Promise<Repo[]> => {
        const arr = [];
        for (const repo of data) {
            const imageArray = await fetchScreenshots(repo.name);
            console.log(repo.name, repo.html_url);
            arr.push({
                ...repo,
                img: imageArray,
            });
        }
        return arr;
    };

    const fetchScreenshots = async (repoName: string) => {
        try {
            const res = await axios.get(
                `https://api.github.com/repos/iamrayghazali/${repoName}/contents/screenshots`
            );
            return res.data;
        } catch (err) {
            console.warn(`No screenshots for ${repoName}`, err);
            return [];
        }
    };

    const handleRateLimitOrError = (err: unknown) => {
        if (err instanceof AxiosError && err.response?.status === 403) {
            console.warn("GitHub API rate limit hit. Loading metadata only.");
            const metaRepos = Object.keys(projectsMeta).map(name => ({
                name,
                img: [],
                description: projectsMeta[name].description ?? null,
                html_url: "#",
                url: "#"
            }));
            setRepos(metaRepos);
        } else {
            console.error(err);
        }
    };

    return (
        <GitHubContext.Provider value={{ repos, loading }}>
            {children}
        </GitHubContext.Provider>
    );
};

export const useGitHub = () => useContext(GitHubContext);
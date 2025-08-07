// src/context/GitHubContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const GitHubContext = createContext(null);

type Repo = {
    name: string;
    [key: string]: any;
}

export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://api.github.com/users/iamrayghazali/repos")
            .then(async (res) => {
                const filtered = filterRepos(res.data);
                console.log(filtered);
                setRepos(await createStructure(filtered));
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const filterRepos = (data: Repo[]) :Repo[] => {
        return data.filter(repo => repo.name !== "iamrayghazali" && repo.name !== "portfolio");
    }

    const createStructure = async (data: Repo[]) :Promise<Repo[]> => {
        const arr = [];
        for (const repo of data) {
            const imageArray = await fetchScreenshots(repo.name);
            const obj = {
                name: repo.name,
                img: imageArray,
                description: repo.description,
                url: repo.url,
            };
            arr.push(obj);
        }
        console.log("array ", arr);
        return arr;
    }

    const fetchScreenshots = async (repoName: string) => {
        try {
            const res = await axios.get(
                `https://api.github.com/repos/iamrayghazali/${repoName}/contents/screenshots`
            );
            console.log("Images: ", res);
            return res.data;
        } catch (err) {
            console.warn(`No screenshots for ${repoName}`, err);
            return [];
        }
    };

    const cacheScreenshots = async (reposWithScreenshots) => {
        reposWithScreenshots.forEach(repo => {
            repo.screenshots.forEach(img => {
                const link = document.createElement("link");
                link.rel = "preload";
                link.as = "image";
                link.href = img.download_url;
                document.head.appendChild(link);
            });
        });
    }


    return (
        <GitHubContext.Provider value={{ repos, loading }}>
            {children}
        </GitHubContext.Provider>
    );
};

export const useGitHub = () => useContext(GitHubContext);
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
        axios
            .get("https://api.github.com/users/iamrayghazali/repos")
            .then(async (res) => {
                const filtered = filterRepos(res.data);
                const reposWithScreenshots = await Promise.all(
                    filtered.map(async (repo) => {
                        const screenshots = await fetchScreenshots(repo.name);
                        return { ...repo, screenshots };
                    })
                );

                await cacheScreenshots(reposWithScreenshots);
                setRepos(reposWithScreenshots);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const filterRepos = (data: Repo[]) :Repo[] => {
        return data.filter(repo => repo.name !== "iamrayghazali" && repo.name !== "portfolio");
    }

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
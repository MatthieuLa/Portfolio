import { useState, useEffect } from "react";
import { GITHUB_TOKEN, GITHUB_REPOS } from "../config/github";

export const useGithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async (owner, repo, customInfo) => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
          {
            headers: {},
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error(`GitHub API Error: ${errorData.message}`);
          throw new Error(`Failed to fetch ${repo}: ${response.status}`);
        }

        const githubData = await response.json();

        return {
          id: githubData.id,
          name: githubData.name,
          description: githubData.description,
          language: githubData.language,
          stars: githubData.stargazers_count,
          forks: githubData.forks_count,
          url: githubData.html_url,
          homepage: githubData.homepage,
          topics: githubData.topics,
          //  Customized informations found in the config
          customInfo: customInfo,
        };
      } catch (err) {
        console.error(`Error fetching ${repo}:`, err);
        return null;
      }
    };

    const fetchAllProjects = async () => {
      try {
        const projectPromises = GITHUB_REPOS.map(
          ({ owner, repo, customInfo }) => fetchProject(owner, repo, customInfo)
        );

        const results = await Promise.allSettled(projectPromises);

        const formattedProjects = results
          .filter(
            (result) => result.status === "fulfilled" && result.value !== null
          )
          .map((result) => result.value);

        setProjects(formattedProjects);
        setError(null);
      } catch (err) {
        setError("Failed to fetch projects");
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProjects();
  }, []);

  return { projects, loading, error };
};

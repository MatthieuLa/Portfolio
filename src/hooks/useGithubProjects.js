import { useState, useEffect } from "react";
import { GITHUB_TOKEN, GITHUB_REPOS } from "../config/github";

export const useGithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async (owner, repo) => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error(`GitHub API Error: ${errorData.message}`);
          throw new Error(`Failed to fetch ${repo}: ${response.status}`);
        }

        return await response.json();
      } catch (err) {
        console.error(`Error fetching ${repo}:`, err);
        return null;
      }
    };

    const fetchAllProjects = async () => {
      try {
        const projectPromises = GITHUB_REPOS.map(({ owner, repo }) =>
          fetchProject(owner, repo)
        );

        const results = await Promise.allSettled(projectPromises);

        const formattedProjects = results
          .filter(
            (result) => result.status === "fulfilled" && result.value !== null
          )
          .map((result) => {
            const repo = result.value;
            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              language: repo.language,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              url: repo.html_url,
              homepage: repo.homepage,
              topics: repo.topics,
            };
          });

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

import React from "react";
import {
  GithubIcon,
  Code2Icon,
  StarIcon,
  GitForkIcon,
  ExternalLinkIcon,
} from "lucide-react";

const ProjectDetails = ({ project }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold">{project.name}</h2>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors"
        >
          <GithubIcon size={16} />
          <span>View on GitHub</span>
          <ExternalLinkIcon size={16} />
        </a>
      </div>

      <div className="flex gap-4 text-sm">
        {project.language && (
          <div className="flex items-center gap-1">
            <Code2Icon size={16} />
            <span>{project.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <StarIcon size={16} />
          <span>{project.stars} stars</span>
        </div>
        <div className="flex items-center gap-1">
          <GitForkIcon size={16} />
          <span>{project.forks} forks</span>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4">
        <p className="text-gray-300 mb-4">
          {project.description || "No description available"}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;

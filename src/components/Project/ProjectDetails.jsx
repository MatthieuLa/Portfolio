import React from "react";
import {
  GithubIcon,
  Code2Icon,
  StarIcon,
  GitForkIcon,
  ExternalLinkIcon,
} from "lucide-react";

const ProjectDetails = ({ project }) => {
  const { customInfo } = project;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">
            {customInfo?.title || project.name}
          </h2>
          {customInfo?.context && (
            <p className="text-sm text-gray-400">{customInfo.context}</p>
          )}
        </div>
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

      <div className="space-y-4 border-t border-gray-700 pt-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-300">{project.description}</p>
        </div>

        {customInfo?.technologies && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {customInfo.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-700 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {customInfo?.features && (
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Objectifs pédagogiques
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {customInfo.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;

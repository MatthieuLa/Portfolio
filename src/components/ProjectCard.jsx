import React from "react";
import { Code2Icon } from "lucide-react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <button
      onClick={() => onClick(project)}
      className="w-full h-24 lg:aspect-square border border-gray-600 bg-gray-800 p-2 hover:bg-gray-700 transition-colors overflow-hidden group relative"
    >
      {/* Project Title */}
      <div className="text-left mb-1 font-bold truncate text-xs lg:text-sm">
        {project.name}
      </div>

      {/* Project Stats */}
      <div className="flex flex-wrap gap-1 text-xs text-gray-400">
        {project.language && (
          <div className="flex items-center gap-1">
            <Code2Icon size={10} className="lg:w-3 lg:h-3" />
            <span className="text-[10px] lg:text-xs">{project.language}</span>
          </div>
        )}
      </div>

      {/* Project Description - Hidden by default, shown on hover */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-90 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
        <p className="text-[10px] lg:text-xs text-gray-300 line-clamp-4 lg:line-clamp-6">
          {project.description || "No description available"}
        </p>
      </div>
    </button>
  );
};

export default ProjectCard;

// src/components/Inventory/InventorySkills.jsx
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiVite, SiRedux, SiVisualstudiocode } from "react-icons/si";

export const skills = [
  { name: "HTML", icon: FaHtml5, level: "fine", color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, level: "fine", color: "text-blue-500" },
  {
    name: "VSCode",
    icon: SiVisualstudiocode,
    level: "fine",
    color: "text-blue-400",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    level: "caution",
    color: "text-yellow-400",
  },
  { name: "GitHub", icon: FaGithub, level: "caution", color: "text-gray-100" },
  { name: "React", icon: FaReact, level: "warning", color: "text-cyan-400" },
  { name: "Vite", icon: SiVite, level: "warning", color: "text-purple-500" },
  { name: "Redux", icon: SiRedux, level: "danger", color: "text-purple-400" },
];

const InventorySkills = ({ onSkillSelect, selectedSkill }) => {
  return (
    <div>
      <h2 className="text-xl mb-4">COMPETENCES</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <button
              key={skill.name}
              onClick={() => onSkillSelect(skill)}
              className={`p-4 rounded transition-all duration-200 flex flex-col items-center gap-2
                ${
                  selectedSkill?.name === skill.name
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }
              `}
            >
              <Icon className={`text-4xl ${skill.color}`} />
              <span className="text-sm">{skill.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InventorySkills;

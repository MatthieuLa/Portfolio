import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BorderedContainer,
  MenuButton,
  Modal,
} from "../components/ReComponents";
import ConditionMonitor from "../components/ConditionMonitor";

const PortfolioInterface = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username = "User", character = "Leon" } = location.state || {};
  const [selectedProject, setSelectedProject] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [currentSection, setCurrentSection] = useState("about");

  const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
    { id: 4, name: "Project 4" },
    { id: 5, name: "Project 5" },
    { id: 6, name: "Project 6" },
  ];

  const defaultItemImage =
    character.toLowerCase() === "leon" ? "lighter.webp" : "lockpick.webp";

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    setSelectedProject(null);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const renderContent = () => {
    if (selectedProject) {
      return (
        <div>
          <h2 className="text-xl mb-4">{selectedProject.name}</h2>
          <p className="font-mono">{selectedProject.id}</p>
        </div>
      );
    }

    switch (currentSection) {
      case "about":
        return (
          <div>
            <h2 className="text-xl mb-4">À PROPOS</h2>
            <p className="font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque iste dicta dolorem quaerat perspiciatis soluta amet est
              inventore voluptas magnam rerum iusto.
            </p>
          </div>
        );
      case "skills":
        return (
          <div>
            <h2 className="text-xl mb-4">COMPÉTENCES</h2>
            <p className="font-mono">Compétences</p>
          </div>
        );
      case "contact":
        return (
          <div>
            <h2 className="text-xl mb-4">CONTACT</h2>
            <p className="font-mono">VContact form</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-gray-300 min-h-screen flex items-center p-4 font-mono">
      <div className="max-w-7xl mx-auto w-full">
        <BorderedContainer className="grid grid-cols-12 gap-4">
          {/* Top Navigation Bar - Modifié */}
          <div className="col-span-12 flex justify-between items-center h-12 bg-gray-900 border-b border-gray-700">
            <h1 className="text-red-700 text-2xl font-bold px-6">
              RESIDENT FOLIO
            </h1>
            <div className="flex gap-2 px-4">
              <MenuButton
                active={currentSection === "about" && !selectedProject}
                onClick={() => handleSectionChange("about")}
              >
                A PROPOS
              </MenuButton>
              <MenuButton
                active={currentSection === "skills" && !selectedProject}
                onClick={() => handleSectionChange("skills")}
              >
                COMPETENCES
              </MenuButton>
              <MenuButton
                active={currentSection === "contact" && !selectedProject}
                onClick={() => handleSectionChange("contact")}
              >
                CONTACT
              </MenuButton>
              <MenuButton onClick={() => setShowOptions(true)}>
                OPTIONS
              </MenuButton>
              <MenuButton onClick={() => navigate("/")}>EXIT</MenuButton>
            </div>
          </div>

          {/* Left Column - Avatar, title & Status */}

          <div className="col-span-3 space-y-4">
            <BorderedContainer className="bg-gray-900">
              <div className="flex flex-col items-center">
                <span className="text-sm mb-1">{username.toUpperCase()}</span>
                <div className="w-24 h-24 bg-gray-800 border border-gray-600">
                  <img
                    src={`/${character.toLowerCase()}.webp`}
                    alt={character}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </BorderedContainer>
            <BorderedContainer className="bg-gray-900">
              <ConditionMonitor />
            </BorderedContainer>
          </div>

          {/* Main Content Area */}
          <div className="col-span-6">
            <BorderedContainer className="h-full min-h-[500px] bg-gray-900">
              <div className="h-full bg-gray-800 p-4 border border-gray-600">
                {renderContent()}
              </div>
            </BorderedContainer>
          </div>

          {/* Right Column - projects Grid */}
          <div className="col-span-3 space-y-4">
            <BorderedContainer className="bg-gray-900">
              <div className="flex justify-center items-center h-20">
                <img
                  src={`/${defaultItemImage}`}
                  alt="Default item"
                  className="h-full object-contain"
                />
              </div>
            </BorderedContainer>
            <BorderedContainer className="bg-gray-900">
              <div className="grid grid-cols-2 gap-2">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectSelect(project)}
                    className="bg-gray-800 border border-gray-600 h-16 hover:bg-gray-700 transition-colors"
                  />
                ))}
              </div>
            </BorderedContainer>
          </div>
        </BorderedContainer>
      </div>

      {/* Options Modal */}
      <Modal
        isOpen={showOptions}
        onClose={() => setShowOptions(false)}
        title="OPTIONS"
      >
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Musique</label>
            <input type="range" className="w-full" />
          </div>
          <div>
            <label className="block mb-2">Bruitages</label>
            <input type="range" className="w-full" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PortfolioInterface;

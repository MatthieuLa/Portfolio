import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BorderedContainer,
  MenuButton,
  Modal,
} from "../components/ReComponents";
import ConditionMonitor from "../components/ConditionMonitor";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import { useGithubProjects } from "../hooks/useGithubProjects";

const PortfolioInterface = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username = "User", character = "Leon" } = location.state || {};
  const [selectedProject, setSelectedProject] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [currentSection, setCurrentSection] = useState("about");
  const [showMenu, setShowMenu] = useState(false);

  const { projects, loading, error } = useGithubProjects("MatthieuLa");

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    setSelectedProject(null);
    setShowMenu(false);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentSection("project");
  };

  const renderContent = () => {
    if (selectedProject) {
      return <ProjectDetails project={selectedProject} />;
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
      default:
        return null;
    }
  };

  const renderNavButtons = () => (
    <>
      <MenuButton
        active={currentSection === "about" && !selectedProject}
        onClick={() => handleSectionChange("about")}
        className="text-sm"
      >
        A PROPOS
      </MenuButton>
      <MenuButton
        active={currentSection === "skills" && !selectedProject}
        onClick={() => handleSectionChange("skills")}
        className="text-sm"
      >
        COMPETENCES
      </MenuButton>
      <MenuButton
        active={currentSection === "contact" && !selectedProject}
        onClick={() => handleSectionChange("contact")}
        className="text-sm"
      >
        CONTACT
      </MenuButton>
      <MenuButton onClick={() => setShowOptions(true)} className="text-sm">
        OPTIONS
      </MenuButton>
      <MenuButton onClick={() => navigate("/")} className="text-sm">
        EXIT
      </MenuButton>
    </>
  );

  const renderCharacterInfo = () => (
    <BorderedContainer className="bg-gray-900 p-0">
      <div className="flex flex-col items-center justify-center p-2">
        <span className="text-sm mb-1">{username.toUpperCase()}</span>
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 border border-gray-600">
          <img
            src={`/${character.toLowerCase()}.webp`}
            alt={character}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </BorderedContainer>
  );

  const renderConditionMonitor = () => (
    <BorderedContainer className="bg-gray-900 p-0">
      <ConditionMonitor />
    </BorderedContainer>
  );

  return (
    <div className="bg-black text-gray-300 min-h-screen font-mono">
      <div className="container mx-auto p-2 md:p-4">
        {/* Navbar */}
        <BorderedContainer className="bg-gray-900 mb-2 p-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between p-2">
            <div className="flex justify-between items-center">
              <h1 className="text-red-700 text-xl md:text-2xl font-bold">
                RESIDENT FOLIO
              </h1>
              <button
                className="md:hidden"
                onClick={() => setShowMenu(!showMenu)}
              >
                ☰
              </button>
            </div>
            <div
              className={`${
                showMenu ? "flex" : "hidden"
              } md:flex flex-col md:flex-row gap-2 mt-2 md:mt-0`}
            >
              {renderNavButtons()}
            </div>
          </div>
        </BorderedContainer>

        {/* Main Content */}
        <div className="grid md:grid-cols-12 gap-2">
          {/* Left Column - Mobile Top Row */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-1 md:col-span-2">
            {renderCharacterInfo()}
            {renderConditionMonitor()}
          </div>

          {/* Center Content */}
          <BorderedContainer className="md:col-span-8 bg-gray-900 p-0">
            <div className="h-full bg-gray-800 p-4 border border-gray-600">
              {renderContent()}
            </div>
          </BorderedContainer>

          {/* Right Column */}
          <div className="md:col-span-2">
            {/* Item Container - Desktop Only */}
            <BorderedContainer className="hidden md:block bg-gray-900 mb-2 p-0">
              <div className="flex justify-center items-center aspect-square">
                <img
                  src={`/${
                    character.toLowerCase() === "leon"
                      ? "lighter.webp"
                      : "lockpick.webp"
                  }`}
                  alt="Default item"
                  className="h-4/5 object-contain"
                />
              </div>
            </BorderedContainer>

            {/* Projects Grid */}
            <BorderedContainer className="bg-gray-900 p-0">
              <div className="grid grid-cols-3 md:grid-cols-2 gap-0">
                {loading
                  ? [...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gray-800 border border-gray-600 animate-pulse"
                      />
                    ))
                  : error
                  ? [...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gray-800 border border-gray-600 flex items-center justify-center text-xs text-red-500"
                      >
                        Error
                      </div>
                    ))
                  : projects.map((project) => (
                      <div key={project.id}>
                        <ProjectCard
                          project={project}
                          onClick={handleProjectSelect}
                        />
                      </div>
                    ))}
              </div>
            </BorderedContainer>
          </div>
        </div>
      </div>

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

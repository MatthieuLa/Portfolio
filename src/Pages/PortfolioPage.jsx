import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  InventoryBorderedContainer,
  InventoryMenuButton,
  InventoryModal,
  InventoryConditionMonitor,
} from "../components/Inventory";
import ProjectCard from "../components/Project/ProjectCard";
import ProjectDetails from "../components/Project/ProjectDetails";
import { useGithubProjects } from "../hooks/useGithubProjects";
import ContactForm from "../components/Contact/ContactForm";
import ProjectPreview from "../components/Project/ProjectPreview";
import InventorySkills from "../components/Inventory/InventorySkills";

const PortfolioInterface = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username = "Matthieu", character = "Leon" } = location.state || {};
  const [selectedProject, setSelectedProject] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [currentSection, setCurrentSection] = useState("about");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

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

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
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
              Matthieu; en reconversion professionnel sur la formation
              Intégrateur web (front-end) OpenClassRooms. Ce portfolio est la
              dernière étape de mon parcours. Vous pourrez y retrouvez une
              sélection de mes projets réalisés tout au long de mon parcours
              ainsi que les compétences travaillés et un formulaire de contact
              (mockup). Ce portfolio est inspiré de l'inventaire des jeux vidéos
              Resident Evil et plus particulièrement de celui du deuxième opus
              (1998).
            </p>
          </div>
        );
      case "skills":
        return (
          <InventorySkills
            onSkillSelect={handleSkillSelect}
            selectedSkill={selectedSkill}
          />
        );
      case "contact":
        return <ContactForm />;
      default:
        return null;
    }
  };

  const renderCharacterInfo = () => (
    <InventoryBorderedContainer className="bg-gray-900 p-0">
      <div className="flex flex-col items-center justify-center p-2">
        <span className="text-sm mb-1">{username.toUpperCase()}</span>
        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-800 border border-gray-600">
          <img
            src={`/${character.toLowerCase()}.webp`}
            alt={character}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </InventoryBorderedContainer>
  );

  const renderConditionStatus = () => (
    <InventoryBorderedContainer className="bg-gray-900 p-0">
      <InventoryConditionMonitor status={selectedSkill?.level || "fine"} />
    </InventoryBorderedContainer>
  );

  const renderNavButtons = () => (
    <>
      <InventoryMenuButton
        active={currentSection === "about" && !selectedProject}
        onClick={() => handleSectionChange("about")}
        className="text-sm"
      >
        A PROPOS
      </InventoryMenuButton>
      <InventoryMenuButton
        active={currentSection === "skills" && !selectedProject}
        onClick={() => handleSectionChange("skills")}
        className="text-sm"
      >
        COMPETENCES
      </InventoryMenuButton>
      <InventoryMenuButton
        active={currentSection === "contact" && !selectedProject}
        onClick={() => handleSectionChange("contact")}
        className="text-sm"
      >
        CONTACT
      </InventoryMenuButton>

      <InventoryMenuButton onClick={() => navigate("/")} className="text-sm">
        EXIT
      </InventoryMenuButton>
    </>
  );

  return (
    <div className="bg-black text-gray-300 min-h-screen font-mono flex items-center justify-center">
      <div className="self-center container mx-auto p-2 lg:p-4 max-w-7xl">
        {/* Navbar */}
        <InventoryBorderedContainer className="bg-gray-900 mb-2 p-0">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between p-2">
            <div className="flex justify-between items-center">
              <h1 className="text-red-700 text-xl lg:text-2xl font-bold">
                MattieuLa's Portfolio
              </h1>
              <button
                className="lg:hidden"
                onClick={() => setShowMenu(!showMenu)}
              >
                ☰
              </button>
            </div>
            <div
              className={`${
                showMenu ? "flex" : "hidden"
              } lg:flex flex-col lg:flex-row gap-2 mt-2 lg:mt-0`}
            >
              {renderNavButtons()}
            </div>
          </div>
        </InventoryBorderedContainer>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-2">
          {/* Left Column - Mobile Top Row */}
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:col-span-2">
            {renderCharacterInfo()}
            {renderConditionStatus()}
          </div>

          {/* Center Content */}
          <InventoryBorderedContainer className="lg:col-span-8 bg-gray-900 p-0">
            <div className="h-full bg-gray-800 p-4 border border-gray-600">
              {renderContent()}
            </div>
          </InventoryBorderedContainer>

          {/* Right Column */}
          <div className="lg:col-span-2 max-h-[calc(100vh-8rem)] overflow-auto">
            {/* Item Container - Desktop Only */}
            <InventoryBorderedContainer className="hidden lg:block bg-gray-900 mb-2 p-0">
              {selectedProject ? (
                <ProjectPreview project={selectedProject} />
              ) : (
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
              )}
            </InventoryBorderedContainer>

            {/* Projects Grid */}
            <InventoryBorderedContainer className="bg-gray-900 p-0">
              <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 max-h-[60vh] lg:max-h-[calc(100vh-16rem)] overflow-y-auto p-2">
                {loading
                  ? [...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-24 lg:aspect-square bg-gray-800 border border-gray-600 animate-pulse"
                      />
                    ))
                  : error
                  ? [...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-24 lg:aspect-square bg-gray-800 border border-gray-600 flex items-center justify-center text-xs text-red-500"
                      >
                        Error
                      </div>
                    ))
                  : projects.map((project) => (
                      <div key={project.id} className="h-24 lg:h-auto">
                        <ProjectCard
                          project={project}
                          onClick={handleProjectSelect}
                          isSelected={selectedProject?.id === project.id}
                        />
                      </div>
                    ))}
              </div>
            </InventoryBorderedContainer>
          </div>
        </div>
      </div>

      <InventoryModal
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
      </InventoryModal>
    </div>
  );
};

export default PortfolioInterface;

import React, { useState, useEffect } from "react";

// Modal component
const ProjectPreviewModal = ({ isOpen, onClose, imageSrc, projectName }) => {
  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative h-[90vh] w-full max-w-4xl bg-gray-900 border border-gray-600 overflow-hidden flex self-center flex-col">
        {/* Header fixed*/}
        <div className="sticky top-0 flex justify-between items-center p-4 bg-gray-900 border-b border-gray-600">
          <h3 className="text-xl text-white">{projectName}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable container for image */}
        <div className="overflow-y-auto flex-1 p-4">
          <img src={imageSrc} alt={projectName} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

// Preview component
const ProjectPreview = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Repos names mapping to image src
  const getImageSrc = (repoName) => {
    const imageMap = {
      OCP3: "/P3.webp",
      OCP4: "/P4.webp",
      OCP6: "/P6.webp",
      OCP7: "/P7.webp",
      OCP9: "/P9.webp",
      OCP10: "/P10.webp",
    };
    return imageMap[repoName] || "";
  };

  const imageSrc = getImageSrc(project.name);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="flex justify-center items-center aspect-square cursor-pointer hover:opacity-80 transition-opacity"
      >
        <img
          src={imageSrc}
          alt={project.name}
          className="h-4/5 object-contain"
        />
      </div>
      <ProjectPreviewModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        imageSrc={imageSrc}
        projectName={project.customInfo?.title || project.name}
      />
    </>
  );
};

export default ProjectPreview;

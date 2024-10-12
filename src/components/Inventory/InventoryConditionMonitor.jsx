import React, { useEffect, useState, useCallback } from "react";

const ConditionMonitor = () => {
  const [path, setPath] = useState("");

  const generateRandomPath = useCallback(() => {
    const width = 200;
    const baselineY = 50;
    const points = [];

    // Fonction pour générer un pic
    const generatePeak = (startX) => {
      const peakHeight = Math.random() * 20 + 10; // Hauteur aléatoire entre 10 et 30
      const segmentWidth = 15; // Largeur fixe pour chaque segment du pic

      return [
        [startX, baselineY], // Point de départ
        [startX + segmentWidth * 0.2, baselineY], // Petit plateau
        [startX + segmentWidth * 0.3, baselineY - peakHeight], // Montée rapide
        [startX + segmentWidth * 0.4, baselineY + peakHeight * 0.3], // Descente
        [startX + segmentWidth * 0.5, baselineY - peakHeight * 0.2], // Rebond
        [startX + segmentWidth * 0.7, baselineY], // Retour à la ligne de base
        [startX + segmentWidth, baselineY], // Fin du segment
      ];
    };

    // Génération du chemin complet
    let currentX = 0;
    while (currentX < width) {
      if (currentX === 0) {
        // Straight start
        points.push([0, baselineY]);
        currentX += 20;
      } else if (currentX > width - 30) {
        // Straight end
        points.push([width, baselineY]);
        break;
      } else {
        // Peaks generation
        const peakPoints = generatePeak(currentX);
        points.push(...peakPoints);
        currentX += 65; // Spacing between peaks
      }
    }

    // Création du path SVG avec des lignes droites
    const pathCommands = points.map((point, index) => {
      if (index === 0) return `M ${point[0]},${point[1]}`;
      return `L ${point[0]},${point[1]}`;
    });

    return pathCommands.join(" ");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPath(generateRandomPath());
    }, 2000);

    return () => clearInterval(interval);
  }, [generateRandomPath]);

  return (
    <div className="text-green-500 font-mono">
      CONDITION
      <div className="mt-2 h-[100px] border border-gray-700 bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 condition-monitor" />
        <svg
          className="w-full h-full absolute"
          viewBox="0 0 200 100"
          preserveAspectRatio="none"
        >
          {/* Ligne principale */}
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="animate-pulse-line"
          />

          {/* Echo de la ligne */}
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="animate-pulse-line-echo"
            style={{ opacity: 0.3 }}
          />
        </svg>
        <div className="absolute bottom-2 right-2 text-xs">Fine</div>
      </div>
    </div>
  );
};

export default ConditionMonitor;

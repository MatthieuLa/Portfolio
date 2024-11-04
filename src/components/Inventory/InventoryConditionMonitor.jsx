// src/components/Inventory/InventoryConditionMonitor.jsx
import React, { useEffect, useState, useCallback } from "react";

const InventoryConditionMonitor = ({ status = "fine" }) => {
  const [path, setPath] = useState("");

  const statusStyles = {
    fine: {
      color: "text-green-500",
      label: "Fine",
    },
    caution: {
      color: "text-yellow-500",
      label: "Caution",
    },
    warning: {
      color: "text-orange-500",
      label: "Warning",
    },
    danger: {
      color: "text-red-500",
      label: "Danger",
    },
  };

  const generateRandomPath = useCallback(() => {
    const width = 200;
    const baselineY = 50;
    const points = [];

    const generatePeak = (startX) => {
      const peakHeight = Math.random() * 20 + 10;
      const segmentWidth = 15;

      return [
        [startX, baselineY],
        [startX + segmentWidth * 0.2, baselineY],
        [startX + segmentWidth * 0.3, baselineY - peakHeight],
        [startX + segmentWidth * 0.4, baselineY + peakHeight * 0.3],
        [startX + segmentWidth * 0.5, baselineY - peakHeight * 0.2],
        [startX + segmentWidth * 0.7, baselineY],
        [startX + segmentWidth, baselineY],
      ];
    };

    let currentX = 0;
    while (currentX < width) {
      if (currentX === 0) {
        points.push([0, baselineY]);
        currentX += 20;
      } else if (currentX > width - 30) {
        points.push([width, baselineY]);
        break;
      } else {
        const peakPoints = generatePeak(currentX);
        points.push(...peakPoints);
        currentX += 65;
      }
    }

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
    <div
      className={`${statusStyles[status].color} font-mono transition-colors duration-300`}
    >
      CONDITION
      <div className="mt-2 h-[100px] border border-gray-700 bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 condition-monitor" />
        <svg
          className="w-full h-full absolute"
          viewBox="0 0 200 100"
          preserveAspectRatio="none"
        >
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="animate-pulse-line"
          />
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="animate-pulse-line-echo"
            style={{ opacity: 0.3 }}
          />
        </svg>
        <div className="absolute bottom-2 right-2 text-xs">
          {statusStyles[status].label}
        </div>
      </div>
    </div>
  );
};

export default InventoryConditionMonitor;

import React from "react";

interface InvertedCornerProps {
  className?: string;
  color?: string;
  position: "top-right" | "bottom-left" | "top-left" | "bottom-right";
}

/**
 * InvertedCorner Component
 * 
 * Creates the "mask" effect for inverted rounded corners.
 * This is used to make buttons or labels look like they are
 * "cut out" from a parent rounded container.
 */
const InvertedCorner: React.FC<InvertedCornerProps> = ({ 
  className, 
  color = "#FFFFFF", 
  position 
}) => {
  // Rotate the SVG based on position
  const rotationMap = {
    "top-right": "rotate-0",
    "bottom-left": "rotate-180",
    "top-left": "rotate-270",
    "bottom-right": "rotate-90",
  };

  return (
    <svg
      className={`${rotationMap[position]} ${className}`}
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M150 150L150 1.52588e-05C150 75 75 150 -1.52588e-05 150L150 150Z"
        fill={color}
      />
    </svg>
  );
};

export default InvertedCorner;

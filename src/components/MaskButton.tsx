"use client";

import styles from "./MaskButton.module.css";

interface MaskButtonProps {
  text: string;
  backgroundColor?: string;
  borderColor?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  maskImage?: string;
  maskSize?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  letterSpacing?: number | string;
  onClick?: () => void;
  className?: string;
}

const MaskButton = ({
  text,
  backgroundColor = "#DC5817",
  width = 150,
  height = 50,
  borderRadius = 12,
  maskImage = "https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png",
  maskSize = "2300% 100%",
  // fontSize = 13,
  // fontWeight = 700,
  letterSpacing = 1,
  onClick,
  className = "",
}: MaskButtonProps) => {
  return (
    <div
      className={`text-[1.1rem] font-bold group relative overflow-hidden transition-all ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
        letterSpacing: typeof letterSpacing === "number" ? `${letterSpacing}px` : letterSpacing,
      }}
    >
      <div className={styles.whiteBg} />

      <span
        className={`absolute z-20 w-full text-center pointer-events-none top-1/2 -translate-y-1/2 transition-colors text-white group-hover:text-[#fd7435]`}
        style={{
          // fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
          // fontWeight: fontWeight,
          letterSpacing: typeof letterSpacing === "number" ? `${letterSpacing}px` : letterSpacing,
        }}
      >
        {text}
      </span>

      <button
        type="button"
        className={`relative z-10 w-full h-full border-none cursor-pointer text-transparent ${styles.button}`}
        onClick={onClick}
        style={{
          backgroundColor: backgroundColor,
          // color: "black",
          // fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
          // fontWeight: fontWeight,
          letterSpacing: typeof letterSpacing === "number" ? `${letterSpacing}px` : letterSpacing,
          WebkitMaskImage: `url("${maskImage}")`,
          maskImage: `url("${maskImage}")`,
          WebkitMaskSize: maskSize,
          maskSize: maskSize,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default MaskButton;

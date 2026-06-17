import React, { useRef, useState } from "react";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  intensity?: number;
  key?: React.Key;
}

export function TiltCard({ children, className = "", id = "", intensity = 8 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const box = cardRef.current.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Normalize coordinates from -1 to 1
    const normalizedX = x / (box.width / 2);
    const normalizedY = y / (box.height / 2);
    
    setCoords({ x: normalizedX, y: normalizedY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const rotateY = coords.x * intensity;
  const rotateX = -coords.y * intensity; 

  const style = {
    transform: isHovered 
      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: isHovered ? "transform 0.08s ease-out" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    transformStyle: "preserve-3d" as const,
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative overflow-hidden transition-shadow ${
        isHovered ? "shadow-[0_20px_50px_rgba(255,79,0,0.15)] border-[#FF4F00]/30" : "shadow-md"
      } ${className}`}
    >
      {/* 3D Glass shine reflection overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: isHovered 
            ? `radial-gradient(circle 280px at ${(coords.x * 0.5 + 0.5) * 100}% ${(coords.y * 0.5 + 0.5) * 100}%, rgba(255, 79, 0, 0.12), transparent 70%)`
            : "transparent",
          mixBlendMode: "screen",
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      {/* Inner container to allow 3D parallax layers */}
      <div style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </div>
  );
}

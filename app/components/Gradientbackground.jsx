"use client"
import React, { useState } from 'react';
import './GradientBackground.css';

const GradientBackground = () => {
  const [gradientStyle, setGradientStyle] = useState({});

  const handleMouseMove = (e) => {
    const x = (e.nativeEvent.clientX / window.innerWidth) * 100;
    const y = (e.nativeEvent.clientY / window.innerHeight) * 100;

    const gradient = `radial-gradient(circle at ${x}% ${y}%, #ff0000, #0000ff)`;
    setGradientStyle({ background: gradient });
  };

  return (
    <div className="  min-w-full min-h-full fixed pointer-events-none	bg-[#201c1c]  " onMouseMove={handleMouseMove} style={gradientStyle}></div>
  );
};

export default GradientBackground;

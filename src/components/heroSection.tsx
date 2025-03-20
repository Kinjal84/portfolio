'use client';
import React, { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="overlay">
        <div className="intro-content">
          <h1 className="text-center text-6xl text-white lato-light uppercase mb-3 tracking-[3px]">
            Hi, I&apos;m Kinjal
          </h1>
          <p className="text-center text-[#ddd] lato-light mb-2">
            Frontend Developer & UX Enthusiast
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

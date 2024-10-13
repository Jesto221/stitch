import React from 'react';
import './AboutSection.css'; // Import SCSS
import imageFile from './image/Stitch-Digital-Wallpaper-3.png'; 

export const AboutSection = () => {
  return (
    <div className="about-section" id='about'>
      <div className="about-content">
        <div className="left-content">
          <h2>About Me</h2>
          <p>
          Stitch, also known as Experiment 626 (pronounced "six two six"), is a fictional character from Disney's Lilo & Stitch franchise. A genetically engineered, extraterrestrial life-form resembling a blue koala, he is the more prominent of the franchise's two title protagonists, the other being his human adopter and best friend Lilo Pelekai.
          </p>
        </div>
        <div className="right-content">
          <img src={imageFile} alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
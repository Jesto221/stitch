import React, { useState } from 'react';
import './DateRequest.css';
import gifImage from './Image/stitch.gif'; // Update this with the correct path

export const DateRequests = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: '0%', left: '50%' });

  const handleYesClick = () => {
    setShowMessage(true);
  };

  const handleNoClick = () => {
    const randomTop = Math.random() * 80 + 10;
    const randomLeft = Math.random() * 80 + 10;
    setButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    <div className="date-request" id='special'>
      <h1>Will you go out on a date with me?</h1>

      {/* Add the GIF right below the text */}
      <img 
        src={gifImage} 
        alt="funny gif" 
        className="date-gif" 
      />

      <div className="buttons">
        <button className="yes" onClick={handleYesClick}>Yes</button>
        <button
          className="no"
          onClick={handleNoClick}
          style={{ top: buttonPosition.top, left: buttonPosition.left }}
        >
          No
        </button>
      </div>
      {showMessage && <p>Okay, text me when you want to go out! 😊</p>}
    </div>
  );
};

export default DateRequests;

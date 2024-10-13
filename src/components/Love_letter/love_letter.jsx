import React, { useState, useRef } from 'react';
import './love.css';

export const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        Порака од твојот Лопуш 💗,<br />
        Се надевам дека ова што го направив ќе ти се допадне и ова го направив за да ти се одолжам за поклонот што не успеав тогаш да ти го дадам, нека биде поклон од мене и се надевам дека ќе го прифатиш може ете не сме се виделе одамна но да знаеш дека сум трпелив и имам разбирања за работите, тука ќе ти бидам ако некад ти треба некоја помош или ако си во лош муд тука сум да те расположам. Во иднина ќе можеш многи работи други да правиш тука<br />Со почит,<br />
        Тимотеј Ристески<br />
      </div>
    </div>
  );
};

export default Letter;
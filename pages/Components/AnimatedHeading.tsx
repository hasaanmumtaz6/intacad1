import React, { useEffect, useState } from 'react';

const Heading = ({ heading, fontSize }: any) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        setAnimationStarted(prev => !prev);
      }, 2000);
  
      return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <b className={`${fontSize} font-bold`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {heading?.split(' ').map((word: string, wordIndex: number) => (
        <span key={wordIndex}>
          {word?.split('').map((letter: string, letterIndex: number) => (
            <span
              key={letterIndex}
              className={`effective-heading ${animationStarted && !isHovered ? 'animate' : ''}`}
              style={{ transitionDelay: `${0.1 * letterIndex}s` }}
            >
              {letter}
            </span>
          ))}
          {' '}
        </span>
      ))}
    </b>
  );
};

export default Heading;

import React from 'react';

const Heading = ({heading, fontSize}:any) => {
  const handleHover = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLSpanElement;
    target.style.color = '#fff'; 
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLSpanElement;
    target.style.color = ''; 
  };

  return (
    <b className={`${fontSize} font-bold`}>
      {`${heading}`.split('').map((letter, index) => (
        <span key={index} onMouseOver={handleHover} onMouseOut={handleMouseOut} className='effective-heading'>
          {letter}
        </span>
      ))}
    </b>
  );
};

export default Heading;

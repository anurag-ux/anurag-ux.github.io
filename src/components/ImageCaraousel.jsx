import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex === images.length ? 0 : newIndex);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  return (
    <div className='right-section'>
      <img className="project-snap transition" src={images[currentIndex]} alt="lendify project screenshots"/>
    </div>
  );
}

export default ImageCarousel;

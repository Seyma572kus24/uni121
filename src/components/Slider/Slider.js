import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  { src: 'image1.jpg', alt: 'Eğitim' },
  { src: 'image2.jpg', alt: 'Öğrenci' },
  { src: 'image3.jpg', alt: 'Akademik Başarı' }
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slider-image" />
    </div>
  );
}

export default Slider;

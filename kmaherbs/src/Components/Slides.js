// components/ImageSlide.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlide = () => {
  return (
    <Carousel>
      <div>
        <img src="../images/image7.jpg" alt="image 1" />
      </div>
      <div>
        <img src="../images/image11.jpg" alt="image 2" />
      </div>
      {/* Add more slides here */}
    </Carousel>
  );
};

export default ImageSlide;

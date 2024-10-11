// src/components/HeroSection.js
import React from 'react';
import Slider from 'react-slick';
import '../styles/HeroSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="hero-section">
      <Slider {...settings}>
        <div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXM9F_zbQAyu4MOLND2Io_SZP36zIo60Br3w&s" 
            alt="Slide 1" 
            className="carousel-image"
          />
        </div>
        <div>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Laptop_collage.jpg/800px-Laptop_collage.jpg" 
            alt="Slide 2" 
            className="carousel-image"
          />
        </div>
        <div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dAHs-fViSmLFkOXnAhwaF6F9sbYF5LWqoA&" 
            alt="Slide 3" 
            className="carousel-image"
          />
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;

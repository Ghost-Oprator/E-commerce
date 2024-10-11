import React from 'react';
import '../styles/About.css'; // Make sure this points to your new CSS file
import ArticlesSection from './ArticlesSection';
import AboutSection from './AboutSection';

const AboutNew = () => {
  return (
    <div>
      <div className="about-page-new">
        <div className="about-content-new">
          <div className="about-text-new">
            <h1>About Us</h1>
            <p>
            ShopSphere is more than just an e-commerce platform; it's a vibrant marketplace where enthusiasts and shoppers unite over shared passions. Designed to cater to a diverse range of interests, from fashion aficionados to tech enthusiasts, home decorators, fitness buffs, and beyond, ShopSphere offers an all-inclusive shopping experience that connects buyers with products that align with their unique tastes and preferences.Whether you’re hunting for the latest fashion trends, state-of-the-art electronics, or artisanal home décor, ShopSphere is designed to help you find exactly what you’re looking for—and more.ShopSphere is where passion meets purchase. We’re dedicated to helping you discover products that enhance your lifestyle, all while offering a seamless, enjoyable, and secure shopping experience.
            
            </p>
          </div>
          <div className="about-image-new">
            <img src="https://whidegroup.com/wp-content/uploads/cover-ecommerce-features-large-new.webp" />
          </div>
        </div>
      </div>
      <ArticlesSection />
    </div>
  );
};

export default AboutNew;

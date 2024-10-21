import React from "react";
import "../styles/ShoeInfoSection.css";

const ShoeInfoSection = () => {
  const shoeInfo = [
    {
      imgSrc:
        "https://sneakerank-store-newdemo.myshopify.com/cdn/shop/collections/image_299.jpg?v=1715068566&width=635",
      altText: "Sneakers Image",
      title: "Sneakers",
      description:
        "Explore our wide range of stylish and comfortable sneakers.",
    },
    {
      imgSrc:
        "https://content.jdmagicbox.com/comp/noida/x5/011pxx11.xx11.200922171935.n5x5/catalogue/maa-bhagwati-furniture-noida-d83in9w9gj.jpg",
      altText: "Furniture",
      title: "Furniture",
      description:
        "Elegant and sophisticated Furniture for home decoration. ",
    },
    {
      imgSrc:
        "https://i.pcmag.com/imagery/roundups/02BY7N9WahuHYvwm1eBbW7I-41..v1688582646.jpg",
      altText: "laptops",
      title: "Laptops",
      description:
        " Laptops include a built-in webcam and microphone, and many also have touchscreens.",
    },
  ];

  return (
    <section className="shoe-info-section">
      {shoeInfo.map((info, index) => (
        <div className="shoe-info-box" key={index}>
          <img src={info.imgSrc} alt={info.altText} />
          <h3>{info.title}</h3>
          <p>{info.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ShoeInfoSection;

import React from "react";
import coloredBack from "./images/back-img.jpg";
import content from "./images/ice-cream.png";
import colorlessContent from "./images/colorless-icream.png";

// Reusable HoverEffect Component
const HoverEffect = ({ title, subtitle, defaultImg, hoverImg, backgroundImg }) => {
  return (
    <div className="relative flex items-center justify-center group">
      {/* Background Image */}
      <img src={backgroundImg} alt="Background" className="w-full h-full object-cover" />

      {/* Default Text */}
      <h1 className="absolute text-[#272727] font-extrabold text-7xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-0 transition-all duration-700">
        {title}
      </h1>
      <h2 className="absolute text-[#6f6539] font-extrabold lg:text-2xl text-[1rem] md:text-[1.2rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-0 transition-all duration-700">
        {subtitle}
      </h2>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-100 group-hover:opacity-0 transition-all duration-700">
        <img src={defaultImg} alt="Default Content" className="w-28" />
      </div>

      {/* Hover Text */}
      <h1 className="absolute text-[#272727] font-extrabold text-7xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700">
        {title}
      </h1>
      <h2 className="absolute text-yellow-400 font-extrabold text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700">
        {subtitle}
      </h2>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <img src={hoverImg} alt="Hover Content" className="w-28" />
      </div>
    </div>
  );
};

// Main Component
const Practice = () => {
  return (
    <div className=" bg-[#1d202d] flex items-center justify-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 w-[90%]">
        {/* Render HoverEffect Components */}
        {[...Array(6)].map((_, index) => (
          <HoverEffect
            key={index}
            title="WEBSITE"
            subtitle="LAZZA ICE-CREAM"
            defaultImg={colorlessContent}
            hoverImg={content}
            backgroundImg={coloredBack}
          />
        ))}
      </div>
    </div>
  );
};

export default Practice;

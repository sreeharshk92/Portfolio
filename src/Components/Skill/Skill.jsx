import React, { useState, useRef, useEffect } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import './Skill.css'
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/javascript.png";
import tailwind from "../images/tailwind.png";
import laravel from "../images/laravel.png";
import php from "../images/php.png";
import git from "../images/git.png";
import github from "../images/github.png";
import react from "../images/react.png";
import aws from "../images/aws.png";
import mysql from "../images/mysql.png";
import firebase from "../images/firebase.png";


const skills = [
  { id: 1, imgpath: html, name:"HTML" },
  { id: 2, imgpath: css, name:"CSS" },
  { id: 3, imgpath: js, name:"JavaScript" },
  { id: 4, imgpath: tailwind, name:"Tailwind" },
  { id: 5, imgpath: react, name:"React" },
  { id: 6, imgpath: php, name:"PHP" },
  { id: 7, imgpath: laravel, name:"Laravel" },
  { id: 8, imgpath: mysql, name:"MySQL" },
  { id: 9, imgpath: git, name:"Git" },
  { id: 10, imgpath: github, name:"GitHub" },
  { id: 11, imgpath: aws, name:"AWS" },
  { id: 12, imgpath: firebase, name:"Firebase" },
];

const Skill = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      const newScrollPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });

      setTimeout(checkScroll, 300);
    }
  };

  return (
    <main className="  flex justify-center bg-customColor ">

    <section className=" md:w-[30rem] w-[28rem] lg:w-[58rem] py-5">
      <div className="relative w-full">
        <button
          className="absolute left-0 top-[50%] z-10 text-white hover:text-yellowColor"
          style={{
            transform: "translateY(-50%)",
            cursor: canScrollLeft ? "pointer" : "not-allowed",
            opacity: canScrollLeft ? 1 : 0.5,
          }}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <BiSolidLeftArrow />
        </button>

        <div ref={scrollRef} className="py-5 flex overflow-x-auto hide-scrollbar" style={{ scrollBehavior: "smooth" }} onScroll={checkScroll}>
  {skills.map((skill) => (
    <div key={skill.id} className="flex justify-center flex-shrink-0 w-[25%] relative group">
      <img
        className="object-cover hover:-translate-y-2.5 transition duration-500 ease-in-out lg:h-[10rem] lg:w-[10rem] h-16 w-16"
        src={skill.imgpath}
        alt={skill.name}
      />
      <span className="absolute left-1/2 transform -translate-x-1/2 top-full  text-slate-400 bg-black px-2 text-sm rounded opacity-0 group-hover:opacity-100 transition duration-300" style={{ fontFamily: 'Montserrat,sans-serif', fontWeight:900 }}>
        {skill.name}
      </span>
    </div>
  ))}
</div>


        <button
          className="text-white hover:text-yellowColor"
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            padding: "10px",
            cursor: canScrollRight ? "pointer" : "not-allowed",
            opacity: canScrollRight ? 1 : 0.5,
          }}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <BiSolidRightArrow />
        </button>
      </div>
    </section>
    </main>
  );
};

export default Skill;

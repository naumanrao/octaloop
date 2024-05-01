"use client";
import Image from "next/image";
import React, { useState } from "react";
import ArrowLeft from "@/assets/img/arrow-left.png";
import ArrowRight from "@/assets/img/arrow-right.png";
import { RoadmapSlidesComponents } from "@/types/roadmap";
import { SlideOne } from "./slide-one";
import { SlideTwo } from "./slide-two";

const Roadmap = () => {
  const gradientStyle = {
    backgroundColor: "#0d0d0d",
    background: `radial-gradient(circle, rgba(171,0,0,0.5830707282913166) 0%, rgba(121,9,9,1) 35%, rgba(0,0,0,1) 100%)`,
  };

  const [currentSlide, setCurrentSlide] =
    React.useState<RoadmapSlidesComponents>(RoadmapSlidesComponents.SLIDE_ONE);
  const [animationClass, setAnimationClass] = useState("");

  const handleSlideChange = (selectedSlide: RoadmapSlidesComponents) => {
    if (currentSlide !== selectedSlide) {
      const animClass =
        selectedSlide > currentSlide ? "slide-in-right" : "slide-in-left";
      setAnimationClass(animClass);
      setCurrentSlide(selectedSlide);
    }
  };

  const slides = {
    [RoadmapSlidesComponents.SLIDE_ONE]: (
      <>
        <SlideOne />
      </>
    ),
    [RoadmapSlidesComponents.SLIDE_TWO]: (
      <>
        <SlideTwo />
      </>
    ),
  };

  return (
    <div className="py-20 px-[10rem] w-full h-full" style={gradientStyle}>
      <h2 className="text-white font-zen-dots text-[2rem] text-center">
        Road<span className="text-red">map</span>
      </h2>
      <p className="text-white font-medium mt-5 font-sans px-10 text-center">
        Guiding the fusion of culture, AI, and Web3 innovation
      </p>
      <div className={`slides ${animationClass}`}>{slides[currentSlide]}</div>

      <div className="flex flex-row justify-center items-center mt-20 gap-x-5">
        <button
          onClick={() => handleSlideChange(RoadmapSlidesComponents.SLIDE_ONE)}
        >
          <Image
            src={
              currentSlide === RoadmapSlidesComponents.SLIDE_ONE
                ? ArrowLeft
                : ArrowRight
            }
            alt="arrow-left"
            width={24}
            height={24}
            className={
              currentSlide === RoadmapSlidesComponents.SLIDE_ONE
                ? ""
                : "rotate-180"
            }
          />
        </button>
        <button
          onClick={() => handleSlideChange(RoadmapSlidesComponents.SLIDE_TWO)}
        >
          <Image
            src={
              currentSlide == RoadmapSlidesComponents.SLIDE_TWO
                ? ArrowLeft
                : ArrowRight
            }
            alt="arrow-left"
            width={24}
            height={24}
            className={
              currentSlide === RoadmapSlidesComponents.SLIDE_TWO
                ? "rotate-180"
                : ""
            }
          />
        </button>
      </div>
    </div>
  );
};

export default Roadmap;

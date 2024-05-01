"use client";
import React, { useState } from "react";
import bg from "@/assets/img/services-bg.png";
import cardBorder from "@/assets/img/card-border.png";
import art from "@/assets/img/art.png";
import artist from "@/assets/img/artist.png";
import community from "@/assets/img/community.png";
import culture from "@/assets/img/culture.png";
import money from "@/assets/img/money.png";
import preservation from "@/assets/img/preservation.png";
import Image from "next/image";

const Services = () => {
  const style = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "100% 100%",
    backgroundAttachment: "scroll",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  };

  const cardStyles = {
    backgroundImage: `url(${cardBorder.src})`,
    backgroundSize: "contain",
    backgroundAttachment: "scroll",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  // Updated gradient style
  const gradientStyle = {
    backgroundColor: "#0d0d0d",
    background: `radial-gradient(circle, #00000066 10%, #0d0d0dbb 60%, #0d0d0d 100%)`,
  };
  return (
    <div
      className="h-screen w-full relative bg-img px-[10rem] py-10"
      style={style}
    >
      <div
        className="h-screen w-full absolute top-0 left-0 px-[10rem] py-10"
        style={gradientStyle}
      >
        <div className="grid grid-cols-12 py-10 gap-5">
          <div
            className="col-span-4 h-full w-full flex flex-col items-center p-[5rem] hover:cursor-pointer hover:bg-gradient-to-br-red"
            style={cardStyles}
          >
            <Image
              src={money}
              alt="money-icon"
              width={80}
              height={80}
              className="mb-10"
            />
            <p className="text-white font-medium text-lg font-sans text-center">
              Long-Term success <br />
              and stability
            </p>
          </div>

          <div
            className="col-span-4 h-full w-full flex flex-col items-center p-[5rem] hover:cursor-pointer"
            style={cardStyles}
          >
            <Image
              src={culture}
              alt="culture-icon"
              width={80}
              height={80}
              className="mb-10"
            />
            <p className="text-white font-medium text-lg font-sans text-center">
              Digital cultural
              <br />
              exchange
            </p>
          </div>

          <div
            className="col-span-4 h-full w-full flex flex-col items-center p-[5rem] hover:cursor-pointer"
            style={cardStyles}
          >
            <Image
              src={artist}
              alt="artist-icon"
              width={80}
              height={80}
              className="mb-10"
            />
            <p className="text-white font-medium text-lg font-sans text-center">
              Empowering <br />
              Artists
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 py-10 gap-5">
          <div
            className="col-span-4 h-full w-full flex flex-col items-center p-[5rem] hover:cursor-pointer"
            style={cardStyles}
          >
            <Image
              src={community}
              alt="community-icon"
              width={80}
              height={80}
              className="mb-10"
            />
            <p className="text-white font-medium text-lg font-sans text-center">
              Fostering a global <br />
              community
            </p>
          </div>

          <div
            className="col-span-4 h-full w-full flex flex-col items-center p-[5rem] hover:cursor-pointer"
            style={cardStyles}
          >
            <Image
              src={art}
              alt="art-icon"
              width={80}
              height={80}
              className="mb-10"
            />
            <p className="text-white font-medium text-lg font-sans text-center">
              Preservation of <br />
              cultural art
            </p>
          </div>

          <div
            className="col-span-4 h-full w-full flex flex-col items-center p-[5rem] hover:cursor-pointer"
            style={cardStyles}
          >
            <Image
              src={preservation}
              alt="preservation-icon"
              width={80}
              height={80}
              className="mb-10"
            />
            <p className="text-white font-medium text-lg font-sans text-center">
              Democratizing art <br />
              globally
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

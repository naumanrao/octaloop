import React from "react";
import bg from "@/assets/img/hero-bg.png";

const Hero = () => {
  const style = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "auto",
    backgroundAttachment: "scroll",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  };

  // Updated gradient style
  const gradientStyle = {
    backgroundColor: "#0d0d0d",
    background: `radial-gradient(circle, transparent 10%, #0d0d0dbb 60%, #0d0d0d 100%)`,
  };

  return (
    <div
      className="h-screen w-full relative bg-img px-[10rem] py-5"
      style={style}
    >
      <div
        className="h-screen w-full absolute top-0 left-0 px-[10rem] py-5"
        style={gradientStyle}
      >
        <div className="grid grid-cols-2 items-center h-full">
          <div className="col-span-1 pt-20">
            <h1 className="text-white font-zen-dots text-[4rem]">
              Generate with AI, Scan, Mint, Sell & Trade
            </h1>
            <p className="text-white font-normal font-sans">
              Explore 3dotlink, where Web3 meets cultural legacy, and
              <br /> AI breathes life into NFTs
            </p>
            <button className="bg-red px-10 py-4 font-semibold border-2 border-transparent rounded-lg text-white text-md mt-10 hover:animate-spin-once hover:bg-transparent hover:border-2 hover:border-red">
              Buy NFT's
            </button>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Image from "next/image";
import React from "react";
import { GalleryGrid } from "./grid";

const Gallery = () => {
  const gradientStyle = {
    backgroundColor: "#0d0d0d",
    background: `radial-gradient(circle, rgba(171,0,0,0.5830707282913166) 0%, rgba(121,9,9,1) 35%, rgba(0,0,0,1) 100%)`,
  };
  return (
    <div className="py-20 px-[10rem] w-full h-full" style={gradientStyle}>
      <h2 className="text-white font-zen-dots text-[2rem] text-center">
        Popular NFT’s generated by Artists
      </h2>
      <p className="text-white font-medium mt-5 font-sans px-10 text-center">
        3dotlink's AI integration is a game-changer in the NFT art world. It
        offers a powerful canvas for artists to redefine art creation and
        innovation while preserving cultural art in an entirely new format. With
        this platform, the convergence of human ingenuity and AI technology is
        set to redefine the boundaries of artistic expression and creative
        possibilities, ushering in a digital art renaissance.
      </p>
      <GalleryGrid />
    </div>
  );
};

export default Gallery;
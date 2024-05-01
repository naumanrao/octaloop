import React from "react";
import bg from "@/assets/img/vision-bg.png";

const Vision = () => {
  const style = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "100% 100%",
    backgroundAttachment: "scroll",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
  };

  // Updated gradient style
  const gradientStyle = {
    backgroundColor: "#0d0d0d",
    background: `radial-gradient(circle, #00000066 10%, #0d0d0ddd 60%, #0d0d0d 100%)`,
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
        <div className="flex flex-col justify-center items-center h-full w-full px-[15rem]">
          <h2 className="text-white font-zen-dots text-[3rem] mb-10">
            Our Vision
          </h2>
          <p className="text-md font-medium text-white text-center">
            The vision of 3dotlink is to be a transformative force at the
            intersection of culture, art, and technology within the Web3
            landscape. We envision a digital realm where the rich tapestry of
            cultural traditions, especially the intricate artistry of masks from
            diverse ethnic groups, is seamlessly woven into the fabric of the
            digital age. Our vision extends far beyond mere NFTs; it's about the
            preservation and celebration of cultural heritage in a dynamic,
            ever-evolving digital space. We strive to empower artists and
            creators, offering them a unique canvas to bring their cultural art
            to life while harnessing the capabilities of AI technology. We see
            3dotlink as a bridge between the past and the future, where ancient
            rituals and modern innovation converge, enriching our collective
            human experience and fostering a global community united by a shared
            appreciation for the art, history, and culture that defines us. In
            essence, our vision is to unlock the immense potential of cultural
            art within Web3, inviting the world to explore, create, and treasure
            the beauty of diverse traditions through the digital realm.
          </p>
          <button className="bg-red px-10 py-4 font-semibold border-2 border-transparent rounded-lg text-white text-md mt-10 hover:animate-spin-once hover:bg-transparent hover:border-2 hover:border-red">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vision;

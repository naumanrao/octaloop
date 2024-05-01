import React from "react";
import bg from "@/assets/img/divider.png";

const Divider = () => {
  const style = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "100% 100%",
    backgroundAttachment: "scroll",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return <div className="h-[600px] w-full" style={style}></div>;
};

export default Divider;

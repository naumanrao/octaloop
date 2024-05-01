import Image from "next/image";
import React from "react";
import Img1 from "@/assets/img/img-1.png";
import Img2 from "@/assets/img/img-2.png";
import Img3 from "@/assets/img/img-3.png";
import Img4 from "@/assets/img/img-4.png";
import Img5 from "@/assets/img/img-5.png";
import Img6 from "@/assets/img/img-6.png";
import Img7 from "@/assets/img/img-7.png";

export const GalleryGrid = () => {
  return (
    <div className="grid grid-cols-4 grid-row-3 gap-4 mt-5">
      <div className="col-span-1 row-span-1 relative hover:cursor-pointer">
        <div className="absolute inset-0 rounded-lg bg-red bg-opacity-30 border-2 border-red w-[95%] h-[95%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] opacity-0 hover:opacity-100 flex justify-start items-end p-4 transition-opacity duration-300">
          <div className="flex flex-col gap-y-1">
            <p className="text-white font-zen-dots text-2xl font-medium">
              Bagwaan
            </p>
            <p className="font-medium font-sans text-white">
              Art by <span className="text-red">xyz</span>
            </p>
          </div>
        </div>
        <Image
          src={Img1}
          alt="img-1"
          className="w-full h-full rounded-lg"
          width={1000}
          height={1000}
        />
      </div>
      <div className="col-span-2 row-span-2 relative hover:cursor-pointer">
        <div className="absolute inset-0 rounded-lg bg-red bg-opacity-30 border-2 border-red w-[95%] h-[95%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] opacity-0 hover:opacity-100 flex justify-start items-end p-4 transition-opacity duration-300">
          <div className="flex flex-col gap-y-1">
            <p className="text-white font-zen-dots text-2xl font-medium">
              Bagwaan
            </p>
            <p className="font-medium font-sans text-white">
              Art by <span className="text-red">xyz</span>
            </p>
          </div>
        </div>
        <Image
          src={Img2}
          alt="img-2"
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="col-span-1 row-span-1 relative hover:cursor-pointer">
        <div className="absolute inset-0 rounded-lg bg-red bg-opacity-30 border-2 border-red w-[95%] h-[95%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] opacity-0 hover:opacity-100 flex justify-start items-end p-4 transition-opacity duration-300">
          <div className="flex flex-col gap-y-1">
            <p className="text-white font-zen-dots text-2xl font-medium">
              Bagwaan
            </p>
            <p className="font-medium font-sans text-white">
              Art by <span className="text-red">xyz</span>
            </p>
          </div>
        </div>
        <Image
          src={Img3}
          alt="img-3"
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="col-span-1 row-span-2 relative hover:cursor-pointer">
        <div className="absolute inset-0 rounded-lg bg-red bg-opacity-30 border-2 border-red w-[95%] h-[95%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] opacity-0 hover:opacity-100 flex justify-start items-end p-4 transition-opacity duration-300">
          <div className="flex flex-col gap-y-1">
            <p className="text-white font-zen-dots text-2xl font-medium">
              Bagwaan
            </p>
            <p className="font-medium font-sans text-white">
              Art by <span className="text-red">xyz</span>
            </p>
          </div>
        </div>
        <Image
          src={Img4}
          alt="img-4"
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="col-span-1 row-span-1 relative hover:cursor-pointer">
        <div className="absolute inset-0 rounded-lg bg-red bg-opacity-30 border-2 border-red w-[95%] h-[95%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] opacity-0 hover:opacity-100 flex justify-start items-end p-4 transition-opacity duration-300">
          <div className="flex flex-col gap-y-1">
            <p className="text-white font-zen-dots text-2xl font-medium">
              Bagwaan
            </p>
            <p className="font-medium font-sans text-white">
              Art by <span className="text-red">xyz</span>
            </p>
          </div>
        </div>
        <Image
          src={Img7}
          alt="img-5"
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="col-span-1 row-span-1 relative hover:cursor-pointer">
        <div className="absolute inset-0 rounded-lg bg-red bg-opacity-30 border-2 border-red w-[95%] h-[95%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] opacity-0 hover:opacity-100 flex justify-start items-end p-4 transition-opacity duration-300">
          <div className="flex flex-col gap-y-1">
            <p className="text-white font-zen-dots text-2xl font-medium">
              Bagwaan
            </p>
            <p className="font-medium font-sans text-white">
              Art by <span className="text-red">xyz</span>
            </p>
          </div>
        </div>
        <Image
          src={Img5}
          alt="img-6"
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="col-span-2 row-span-1 relative hover:cursor-pointer">
        <div className="absolute inset-0 rounded-lg bg-red bg-opacity-30 border-2 border-red w-[95%] h-[95%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] opacity-0 hover:opacity-100 flex justify-start items-end p-4 transition-opacity duration-300">
          <div className="flex flex-col gap-y-1">
            <p className="text-white font-zen-dots text-2xl font-medium">
              Bagwaan
            </p>
            <p className="font-medium font-sans text-white">
              Art by <span className="text-red">xyz</span>
            </p>
          </div>
        </div>
        <Image
          src={Img6}
          alt="img-7"
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

import Image from "next/image";
import React from "react";
import Logo from "@/assets/img/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-[10rem] py-5 absolute top-0 w-full bg-transparent z-[10]">
      <div className="flex flex-row justify-between items-center">
        <div className="w-full">
          <Image src={Logo} alt="Logo" width={60} height={40} />
        </div>
        <div className="flex flex-row gap-x-10 items-center">
          <Link
            href={"/"}
            className="text-white font-medium text-sm active:text-red hover:text-red"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="text-white font-medium text-sm active:text-red hover:text-red"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="text-white font-medium text-sm active:text-red hover:text-red"
          >
            Artist
          </Link>
          <Link
            href={"/"}
            className="text-white font-medium text-sm active:text-red hover:text-red"
          >
            Staking
          </Link>
          <Link
            href={"/"}
            className="text-white font-medium text-sm active:text-red hover:text-red"
          >
            Roadmap
          </Link>
          <Link
            href={"/"}
            className="text-white font-medium text-sm active:text-red hover:text-red"
          >
            Team
          </Link>
          <Link
            href={"/"}
            className="text-white font-medium text-sm active:text-red hover:text-red"
          >
            Vesting
          </Link>
          <Link
            href={"/"}
            className="text-white font-medium text-sm active:text-red hover:text-red"
          >
            Marketplace
          </Link>
        </div>
        <div className="w-full text-end">
          <button className="bg-red px-4 py-2 rounded-lg text-white text-sm">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

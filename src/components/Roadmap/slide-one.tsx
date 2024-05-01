import Image from "next/image";
import dot from "@/assets/img/dot.png";
import line from "@/assets/img/line1.png";
import One from "@/assets/img/1.png";
import Two from "@/assets/img/2.png";
import Three from "@/assets/img/3.png";
import Four from "@/assets/img/4.png";

export const SlideOne = () => {
  return (
    <div className="grid grid-cols-12 gap-y-[9rem] grid-rows-4 pl-20 mt-[10rem]">
      <div className="col-span-1 row-span-4 flex flex-col items-center">
        <Image src={dot} alt="dot" width={25} height={25} />
        <Image src={line} alt="dot" width={5} height={5} />
        <Image src={dot} alt="dot" width={25} height={25} />
        <Image src={line} alt="dot" width={5} height={5} />
        <Image src={dot} alt="dot" width={25} height={25} />
        <Image src={line} alt="dot" width={5} height={5} />
        <Image src={dot} alt="dot" width={25} height={25} />
      </div>
      {/* Phase 1 */}
      <div className="col-span-11 row-span-1 gap-y-5 flex flex-col">
        <div className="bg-[#fd16404D] py-4 px-7 w-[462px]">
          <p className="font-medium text-md text-red font-zen-dots w-auto">
            Phase I
          </p>
        </div>
        <div className="bg-red w-full px-7 py-10">
          <div className="relative">
            <ul className="list-disc px-20">
              <li className="text-white font-normal text-sm">Goal Defining</li>
              <li className="text-white font-normal text-sm">
                Market Research
              </li>
              <li className="text-white font-normal text-sm">White Paper V1</li>
              <li className="text-white font-normal text-sm">
                Initial Funding Secured
              </li>
            </ul>
            <div className="absolute right-0 -bottom-10">
              <Image src={One} alt="one" width={220} height={220} />
            </div>
          </div>
        </div>
      </div>
      {/* Phase 2 */}
      <div className="col-span-11 row-span-1 gap-y-5 flex flex-col">
        <div className="bg-[#fd16404D] py-4 px-7 w-[462px] ml-[16.5rem]">
          <p className="font-medium text-md text-red font-zen-dots w-auto">
            Phase II
          </p>
        </div>
        <div className="bg-red w-full px-7 py-10">
          <div className="relative">
            <ul className="list-disc px-20 ml-[11rem]">
              <li className="text-white font-normal text-sm">
                AI Generative System Development
              </li>
              <li className="text-white font-normal text-sm">
                Early AI Generative System Testing
              </li>
              <li className="text-white font-normal text-sm">
                Preparing for NFTs Masks Collection Launch
              </li>
              <li className="text-white font-normal text-sm">
                Website Launch V1
              </li>
              <li className="text-white font-normal text-sm">White Listing</li>
            </ul>
            <div className="absolute left-0 -bottom-10">
              <Image src={Two} alt="one" width={240} height={240} />
            </div>
          </div>
        </div>
      </div>
      {/* Phase 3 */}
      <div className="col-span-11 row-span-1 gap-y-5 flex flex-col">
        <div className="bg-[#fd16404D] py-4 px-7 w-[462px]">
          <p className="font-medium text-md text-red font-zen-dots w-auto">
            Phase III
          </p>
        </div>
        <div className="bg-red w-full px-7 py-10">
          <div className="relative">
            <ul className="list-disc px-20">
              <li className="text-white font-normal text-sm">Goal Defining</li>
              <li className="text-white font-normal text-sm">
                Market Research
              </li>
              <li className="text-white font-normal text-sm">White Paper V1</li>
              <li className="text-white font-normal text-sm">
                Initial Funding Secured
              </li>
            </ul>
            <div className="absolute right-0 -bottom-10">
              <Image src={Three} alt="one" width={220} height={220} />
            </div>
          </div>
        </div>
      </div>
      {/* Phase 4 */}
      <div className="col-span-11 row-span-1 gap-y-5 flex flex-col">
        <div className="bg-[#fd16404D] py-4 px-7 w-[462px] ml-[16.5rem]">
          <p className="font-medium text-md text-red font-zen-dots w-auto">
            Phase IV
          </p>
        </div>
        <div className="bg-red w-full px-7 py-10">
          <div className="relative">
            <ul className="list-disc px-20 ml-[11rem]">
              <li className="text-white font-normal text-sm">
                AI Generative System Development
              </li>
              <li className="text-white font-normal text-sm">
                Early AI Generative System Testing
              </li>
              <li className="text-white font-normal text-sm">
                Preparing for NFTs Masks Collection Launch
              </li>
              <li className="text-white font-normal text-sm">
                Website Launch V1
              </li>
              <li className="text-white font-normal text-sm">White Listing</li>
            </ul>
            <div className="absolute left-0 -bottom-10">
              <Image src={Four} alt="one" width={240} height={240} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

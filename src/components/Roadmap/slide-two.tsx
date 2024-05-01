import Image from "next/image";
import dot from "@/assets/img/dot.png";
import line from "@/assets/img/line1.png";
import One from "@/assets/img/1.png";
import Two from "@/assets/img/2.png";
import Three from "@/assets/img/3.png";
import Four from "@/assets/img/4.png";

export const SlideTwo = () => {
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
      {/* Phase 5 */}
      <div className="col-span-11 row-span-1 gap-y-5 flex flex-col">
        <div className="bg-[#fd16404D] py-4 px-7 w-[462px]">
          <p className="font-medium text-md text-red font-zen-dots w-auto">
            Phase V
          </p>
        </div>
        <div className="bg-red w-full px-7 py-10">
          <div className="relative">
            <ul className="list-disc px-20">
              <li className="text-white font-normal text-sm">
                AI Technology Integration
              </li>
              <li className="text-white font-normal text-sm">
                Metaverse Initiatives
              </li>
              <li className="text-white font-normal text-sm">
                Extended AI Customization for Users
              </li>
              <li className="text-white font-normal text-sm">
                Expanded Global Marketing Campaigns
              </li>
            </ul>
            <div className="absolute right-0 -bottom-10">
              <Image src={One} alt="one" width={220} height={220} />
            </div>
          </div>
        </div>
      </div>
      {/* Phase 6 */}
      <div className="col-span-11 row-span-1 gap-y-5 flex flex-col">
        <div className="bg-[#fd16404D] py-4 px-7 w-[462px] ml-[16.5rem]">
          <p className="font-medium text-md text-red font-zen-dots w-auto">
            Phase VI
          </p>
        </div>
        <div className="bg-red w-full px-7 py-10">
          <div className="relative">
            <ul className="list-disc px-20 ml-[11rem]">
              <li className="text-white font-normal text-sm">
                3dotLink Metaverse Launch
              </li>
              <li className="text-white font-normal text-sm">
                NFT Promotion within Metaverse
              </li>
              <li className="text-white font-normal text-sm">
                Ensure Financial stability & visibility
              </li>
              <li className="text-white font-normal text-sm">
                Diversify revenue streams
              </li>
            </ul>
            <div className="absolute left-0 -bottom-10">
              <Image src={Two} alt="one" width={240} height={240} />
            </div>
          </div>
        </div>
      </div>
      {/* Phase 7 */}
      <div className="col-span-11 row-span-1 gap-y-5 flex flex-col">
        <div className="bg-[#fd16404D] py-4 px-7 w-[462px]">
          <p className="font-medium text-md text-red font-zen-dots w-auto">
            Phase VII
          </p>
        </div>
        <div className="bg-red w-full px-7 py-10">
          <div className="relative">
            <ul className="list-disc px-20">
              <li className="text-white font-normal text-sm">
                Staking Feature Implementation
              </li>
              <li className="text-white font-normal text-sm">
                Community Governance Integration
              </li>
              <li className="text-white font-normal text-sm">
                Tokenomics & Allocation
              </li>
              <li className="text-white font-normal text-sm">
                Reward Mechanism Development
              </li>
              <li className="text-white font-normal text-sm">
                User-Driven Governance Initiative
              </li>
            </ul>
            <div className="absolute right-0 -bottom-10">
              <Image src={Three} alt="one" width={220} height={220} />
            </div>
          </div>
        </div>
      </div>
      {/* Phase 8 */}
      <div className="col-span-11 row-span-1 gap-y-5 flex flex-col">
        <div className="bg-[#fd16404D] py-4 px-7 w-[462px] ml-[16.5rem]">
          <p className="font-medium text-md text-red font-zen-dots w-auto">
            Phase VIII
          </p>
        </div>
        <div className="bg-red w-full px-7 py-10">
          <div className="relative">
            <ul className="list-disc px-20 ml-[11rem]">
              <li className="text-white font-normal text-sm">
                AI Generated Website Launch V2
              </li>
              <li className="text-white font-normal text-sm">
                New Mask NFT Collection Releases
              </li>
              <li className="text-white font-normal text-sm">
                Global Art Community Expansion
              </li>
              <li className="text-white font-normal text-sm">
                Promoting 3DotLink as a Leading Cultural NFT Destination
              </li>
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

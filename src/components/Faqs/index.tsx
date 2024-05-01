"use client";
import React, { useRef, useState } from "react";
import { Accordion } from "./accordion";
import { FaqsTabsComponents } from "@/types/faqs";
import { Tabs } from "./tabs";
import Image from "next/image";
import FAQSImage from "@/assets/img/faqs-img.png";

const faqs = [
  {
    id: 1,
    header: "What is Lorem Ipsum?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 2,
    header: "Where does it come from?",
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    header: "Why do we use it?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  },
  {
    id: 4,
    header: "Where can I get some?",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
];

const FAQs = () => {
  const gradientStyle = {
    backgroundColor: "#0d0d0d",
    background: `radial-gradient(circle, rgba(171,0,0,0.5830707282913166) 0%, rgba(121,9,9,1) 35%, rgba(0,0,0,1) 100%)`,
  };

  const [active, setActive] = useState<any>(null);

  const handleToggle = (index: any) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  const [currentTab, setCurrentTab] = useState<FaqsTabsComponents>(
    FaqsTabsComponents.GENERAL
  );

  const handleTabChange = (selectedTab: FaqsTabsComponents) => {
    setCurrentTab(selectedTab);
  };

  const TabsLookup = {
    [FaqsTabsComponents.GENERAL]: (
      <>
        {faqs.map((faq, index) => {
          return (
            <Accordion
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          );
        })}
      </>
    ),
    [FaqsTabsComponents.PRE_ICE]: (
      <>
        <h2 className="font-zen-dots font-medium text-white mt-10 p-4">
          Pre Ice FAQs
        </h2>
      </>
    ),
    [FaqsTabsComponents.TOKEN]: (
      <>
        <h2 className="font-zen-dots font-medium text-white mt-10 p-4">
          Token FAQs
        </h2>
      </>
    ),
    [FaqsTabsComponents.CLIENT]: (
      <>
        <h2 className="font-zen-dots font-medium text-white mt-10 p-4">
          Clients FAQs
        </h2>
      </>
    ),
    [FaqsTabsComponents.LEGAL]: (
      <>
        <h2 className="font-zen-dots font-medium text-white mt-10 p-4">
          Legal FAQs
        </h2>
      </>
    ),
  };

  return (
    <div className="py-20 px-[10rem] w-full h-screen" style={gradientStyle}>
      <div className="grid grid-cols-2">
        <div className="col-span-1 justify-between">
          <h2 className="text-white font-zen-dots text-[2rem] text-start">
            Have Any Questoins?
          </h2>
          <p className="text-white font-medium mt-5 font-sans text-start">
            Curious about 3dotlink? Explore our frequently asked
            <br /> questions to find answers
          </p>
          <div className="flex flex-row items-center mt-10">
            <Tabs
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              handleTabChange={handleTabChange}
            />
          </div>
          <div className="mt-10">{TabsLookup[currentTab]}</div>
        </div>
        <div className="col-span-1 flex justify-center">
          <Image src={FAQSImage} alt="faqs-img" width={550} height={550} />
        </div>
      </div>
    </div>
  );
};

export default FAQs;

import { FaqsTabsComponents } from "@/types/faqs";
import { useState } from "react";

export const Tabs = ({
  currentTab,
  handleTabChange,
  setCurrentTab,
}: {
  currentTab: FaqsTabsComponents;
  handleTabChange: (selectedTab: FaqsTabsComponents) => void;
  setCurrentTab: (selectedTab: FaqsTabsComponents) => void;
}) => {
  return (
    <>
      <button
        className={`${
          currentTab === FaqsTabsComponents.GENERAL
            ? "border-b-2 border-red"
            : "border-b-2 border-transparent"
        } py-2 px-4 text-white font-zen-dots`}
        onClick={() => handleTabChange(FaqsTabsComponents.GENERAL)}
      >
        General
      </button>
      <button
        className={`${
          currentTab === FaqsTabsComponents.PRE_ICE
            ? "border-b-2 border-red"
            : "border-b-2 border-transparent"
        } py-2 px-4 text-white font-zen-dots`}
        onClick={() => handleTabChange(FaqsTabsComponents.PRE_ICE)}
      >
        Pre Ice
      </button>
      <button
        className={`${
          currentTab === FaqsTabsComponents.TOKEN
            ? "border-b-2 border-red"
            : "border-b-2 border-transparent"
        } py-2 px-4 text-white font-zen-dots`}
        onClick={() => handleTabChange(FaqsTabsComponents.TOKEN)}
      >
        Token
      </button>
      <button
        className={`${
          currentTab === FaqsTabsComponents.CLIENT
            ? "border-b-2 border-red"
            : "border-b-2 border-transparent"
        } py-2 px-4 text-white font-zen-dots`}
        onClick={() => handleTabChange(FaqsTabsComponents.CLIENT)}
      >
        Client
      </button>
      <button
        className={`${
          currentTab === FaqsTabsComponents.LEGAL
            ? "border-b-2 border-red"
            : "border-b-2 border-transparent"
        } py-2 px-4 text-white font-zen-dots`}
        onClick={() => handleTabChange(FaqsTabsComponents.LEGAL)}
      >
        Legal
      </button>
    </>
  );
};

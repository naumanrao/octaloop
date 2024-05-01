import { useRef } from "react";
import RightIcon from "@/assets/img/arrow-right.png";
import Image from "next/image";

export function Accordion(props: any) {
  const contentEl = useRef<HTMLDivElement>(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="bg-[#fd16404D] text-white rounded-xl mb-5">
      <div className="bg-[#fd16404D] text-white rounded-xl">
        <div
          className={`hover:cursor-pointer flex items-center justify-between p-4 ${
            active === id ? "bg-[#fd16404D] rounded-xl" : ""
          }`}
          onClick={() => handleToggle(id)}
        >
          <h5
            className={
              active !== id
                ? "text-white font-zen-dots"
                : "text-danger font-zen-dots"
            }
          >
            {header}
          </h5>
          <Image
            src={RightIcon}
            alt="accordion-icon"
            width={16}
            height={16}
            className={active === id ? "-rotate-90" : "rotate-90"}
          />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="text-white font-sans font-normal p-4 text-sm">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
}

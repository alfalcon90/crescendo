"use client";

import { TbChevronDown } from "react-icons/tb";
import Divider from "./Divider";
import { useState } from "react";
import Heading4 from "./Heading4";
import { PiCaretDown, PiCaretDownLight } from "react-icons/pi";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(true);

  return (
    <div className="flex w-full flex-col">
      <button
        className="flex items-center justify-between space-x-2 rounded-md p-2 hover:bg-beige/25 sm:px-4 sm:py-6"
        onClick={(_) => {
          if (isOpen) {
            setIsOpen(false);
            setTimeout(() => setHidden(true), 150);
          } else {
            setIsOpen(true);
            setHidden(false);
          }
        }}
      >
        <Heading4 className="text-start" >{title}</Heading4>
        <div className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all bg-red p-1 rounded-full`}>
          <PiCaretDownLight className="h-8 w-8 text-beige-light " />
        </div>
      </button>
      <div
        className={`p-4 ${isOpen ? "scale-y-100" : "scale-y-0"}
        ${hidden ? "hidden" : ""} origin-top transition-all`}
      >
        {children}
      </div>
      {isOpen ? <Divider className="bg-green-light" /> : null}
    </div>
  );
}

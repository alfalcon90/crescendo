"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import CircleButton from "./CircleButton";
import NextLink from "next/link";
import { PiArrowRightLight, PiListLight, PiXLight } from "react-icons/pi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-green-dark absolute flex h-16 w-full justify-center sm:h-[100px]">
      <div className=" flex max-w-6xl grow items-center justify-between px-2">
        <NextLink
          className="focus:ring-green focus:outline-none focus:ring"
          href={"/"}
        >
          <Image
            className={`${isOpen ? "opacity-0" : "opacity-100"} `}
            src="/logo.svg"
            alt="Crescendo logo"
            width={48}
            height={48}
            priority
          />
        </NextLink>

        <div
          className={`${
            isOpen ? "scale-y-100" : "scale-y-0"
          } absolute left-0 right-0 top-0 w-full origin-top items-center space-y-8 p-6 pt-14 transition-all sm:relative sm:flex sm:scale-y-100	sm:space-y-0 sm:bg-transparent sm:p-0`}
        >
          <div className="grow justify-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
            <NavLink href={"/"} label="Home" />
            <NavLink href={"/faq"} label="FAQ" />
            <NavLink href={"/about"} label="About" />
          </div>
          <div className="flex items-center space-x-4">
            <NextLink className="text-beige uppercase tracking-wider" href={'/contact'}>Contact</NextLink>
            <CircleButton icon={PiArrowRightLight} href={"/contact"} ></CircleButton>
          </div>
        </div>

        <div
          className={`transition-all sm:hidden ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <CircleButton
            icon={isOpen ? PiXLight : PiListLight}
            onClick={(_) => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </header>
  );
}

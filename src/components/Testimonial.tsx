"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Overline from "./Overline";
import Paragraph from "./Paragraph";

export default function Testimonial({
  content,
  avatar,
  description,
}: {
  content: React.ReactNode;
  avatar: string | StaticImport;
  description: string;
}) {

  return (
    <div className={`flex flex-col w-[340px] sm:w-[520px] md:w-[700px]  lg:w-[800px] space-y-8`}>
      <Paragraph large className="text-center" >{`"${content}"`}</Paragraph>
      <div className="flex flex-col w-full items-center space-x-4 space-y-4">
        <Image
          src={avatar}
          alt="Customer avatar image"
          height={64}
          width={64}
        />
        <Overline className="[&]:font-normal text-xl text-center">{description}</Overline>
      </div>
    </div>
  );
}

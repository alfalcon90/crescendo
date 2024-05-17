import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Paragraph from "./Paragraph";
import Heading3 from "./Heading3";

export default function FeatureItem({
  src,
  alt,
  title,
  body,
  reverse,
  className,
}: {
  src: string | StaticImport;
  alt: string;
  title: string;
  body?: string;
  dark?: boolean;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full justify-center ${className} z-10`}
    >
      <div
        className={`flex w-full max-w-7xl flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-between sm:space-x-8`}
      >
        <div className="max-w-[420px] md:max-w-[520px] p-2 sm:p-0 lg:max-w-none">
          <Image
            className="scale-[1.1]"
            src={src}
            alt={alt}
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col space-y-8 w-full lg:w-1/2">
          <div className="flex flex-col space-y-4  ">
            <Heading3 className="text-center lg:text-start" >{title}</Heading3>
            <Paragraph large>{body}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Url } from "next/dist/shared/lib/router/router";
import Button from "./Button";
import Heading2 from "./Heading2";
import Overline from "./Overline";
import Paragraph from "./Paragraph";

export default function SectionHeader({
  overline,
  title,
  subtitle,
  children,
  className,
  overlineClassName,
  innerClassName,
  href,
  dark,
}: {
  overline: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  overlineClassName?: string;
  innerClassName?: string;
  href?: Url;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex max-w-xl flex-col items-center text-center space-y-1 sm:space-y-2 ${className}`}
    >
      <Overline className={`${overlineClassName} text-red`}>{overline}</Overline>
      <div className={`${innerClassName} flex flex-col items-center space-y-3 sm:space-y-5`}>
        <Heading2 className={dark ? "[&]:text-beige" : "[&]:text-green-dark"} >{title}</Heading2>
        <Paragraph className={dark ? "[&]:text-beige" : "[&]:text-green"}>{subtitle}</Paragraph>
        {children}
        {href != undefined && <Button dark={dark} href={href}>Learn more</Button>}
      </div>
    </div>
  );
}

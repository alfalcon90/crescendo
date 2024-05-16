import { Url } from "next/dist/shared/lib/router/router";
import Button from "./Button";
import Heading2 from "./Heading2";
import Overline from "./Overline";
import Paragraph from "./Paragraph";

export default function SectionHeader({
  overline,
  title,
  subtitle,
  className,
  href,
}: {
  overline: string;
  title: string;
  subtitle: string;
  className?: string;
  href?: Url;
}) {
  return (
    <div
      className={`flex max-w-xl flex-col items-center text-center space-y-1 sm:space-y-2 ${className}`}
    >
      <Overline className="text-red" >{overline}</Overline>
      <div className="flex flex-col items-center space-y-3 sm:space-y-5">
        <Heading2>{title}</Heading2>
        <Paragraph className="text-green" >{subtitle}</Paragraph>
        {href != undefined && <Button href={href}>Learn more</Button>}
      </div>
    </div>
  );
}

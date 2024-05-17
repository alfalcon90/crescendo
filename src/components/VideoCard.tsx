import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function VideoCard({
  className,
  title,
  subtitle,
  href,
}: {
  className: string;
  title?: string;
  subtitle?: string;
  href: Url;
}) {
  return (
    <Link href={href} className={`${className} relative min-w-[200px] h-[240px] lg:h-[320px] overflow-clip rounded-2xl bg-green bg-cover`}>
      <div className="absolute flex flex-col w-full justify-center text-center p-4 backdrop-blur border border-t-white/30 bottom-0 bg-green-dark/90 space-y-1" >
        <p className="text-beige font-bold" >{title}</p>
        <p className="text-beige text-xs uppercase">{subtitle}</p>
      </div>
    </Link>
  );
}

import { Url } from "next/dist/shared/lib/router/router";
import NextLink from "next/link";

export default function Link({
  href,
  dark,
  underline,
  children,
}: {
  href: Url;
  dark?: boolean;
  underline?: boolean;
  children: React.ReactNode;
}) {
  return (
    <NextLink
      className={`${
        dark ? "text-beige" : "text-green-dark"
      } ${
        underline ? "underline" : ""
      } focus:ring-beige/25 rounded-sm underline-offset-8 hover:underline px-1 uppercase tracking-wider focus:outline-none focus:ring`}
      href={href}
    >
      {children}
    </NextLink>
  );
}

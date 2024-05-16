import Image from "next/image";
import NextLink from "next/link";
import Link from "./Link";
import Divider from "./Divider";
import { footerLinks } from "@/app/content/nav_links";



export default function Footer() {
  return (
    <footer className="w-full flex-col bg-green-dark p-8 items-center justify-center sm:py-20 sm:space-y-[80px]">
      <div className="flex w-full justify-center">
        <div className="flex w-full flex-col items-center max-w-6xl space-y-8 sm:flex-row-reverse sm:justify-between sm:space-y-0 ">
          <ul className="space-y-4 text-center sm:inline sm:space-x-4">
            {footerLinks.map((link) => (
              <li className="sm:inline" key={link.page}>
                <Link dark href={link.page}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <NextLink href="/" className="flex justify-center space-x-2">
            <Image
              src="/logo.png"
              alt="Crescendo logo"
              width={48}
              height={48}
            />
          </NextLink>
        </div>
      </div>
      
      <div className="flex-col">
        <Divider className="bg-green-light" />
        <p className="text-center text-xs tracking-wide text-green-light	">
          {new Date().getFullYear()} Crescendo Performance Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

"use client";

import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "./Link";

export default function NavLink({ href, label }: { href: Url; label: string }) {
  const pathname = usePathname();
  const isSelected = pathname == href;

  return (
    <Link href={href} dark underline={isSelected}>{label}</Link>
  );
}

'use client'

import React, { MouseEventHandler } from "react";
import { useRouter } from 'next/navigation'
import { IconType } from "react-icons";
import { Url } from "next/dist/shared/lib/router/router";

export const circleButtonStyle =
  "sm:hover:bg-beige-dark focus:ring-green rounded-full p-3 focus:outline-none sm:focus:ring";

export default function CircleButton({
  onClick,
  href,
  icon,
  className,
}: {
  onClick?: MouseEventHandler;
  href?: string;
  icon: IconType;
  className?: string;
}) {
  const router = useRouter()

  return (
    <button
      className={`bg-beige text-green-dark ${circleButtonStyle} ${className}`}
      onClick={onClick ?? (() => router.push(href ?? '/'))}
    >
      {React.createElement(icon, { className: "h-6 w-6" })}
    </button>
  );
}

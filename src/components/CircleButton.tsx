'use client'

import React, { MouseEventHandler } from "react";
import { useRouter } from 'next/navigation'
import { IconType } from "react-icons";

export const circleButtonStyle =
  "sm:hover:bg-beige/75 focus:ring-beige/50 rounded-full p-3 focus:outline-none sm:focus:ring";

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

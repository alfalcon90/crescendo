import React from "react";

export default function Overline({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`font-bold uppercase	tracking-wider ${className}`}
    >
      {children}
    </p>
  );
}

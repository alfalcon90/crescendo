import { playfair } from "../ui/fonts";

export default function Heading1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`${playfair.className} ${className} text-green-dark text-6xl sm:text-[80px] [&]:leading-tight`}
    >
      {children}
    </h1>
  );
}

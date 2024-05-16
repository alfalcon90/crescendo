import { playfair } from "../ui/fonts";

export default function Heading4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={`${playfair.className} ${className} text-green-dark text-xl sm:text-2xl font-bold [&]:leading-tight`}
    >
      {children}
    </h4>
  );
}

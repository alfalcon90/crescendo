import { playfair } from "../ui/fonts";

export default function Heading3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`${playfair.className} ${className} text-green-dark text-3xl sm:text-4xl font-bold [&]:leading-tight`}
    >
      {children}
    </h3>
  );
}

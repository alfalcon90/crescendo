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
      className={`${playfair.className} ${className} text-green-dark text-4xl sm:text-5xl font-medium [&]:leading-tight`}
    >
      {children}
    </h1>
  );
}

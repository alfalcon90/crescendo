export default function Paragraph({
  children,
  className,
  large,
}: {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
}) {
  return (
    <p
      className={`${
        large
          ? "text-lg sm:text-2xl leading-relaxed"
          : "text-base font-medium text-green-dark"
      } ${className}`}
    >
      {children}
    </p>
  );
}

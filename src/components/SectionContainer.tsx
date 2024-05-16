export default function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} flex w-full max-w-4xl flex-col items-center space-y-4 px-4 py-12 sm:space-y-8 sm:py-24`}
    >
      {children}
    </div>
  );
}

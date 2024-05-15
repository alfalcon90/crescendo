export default function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex w-full flex-col items-center pt-[100px] ${className}`}>
      {children}
    </div>
  );
}

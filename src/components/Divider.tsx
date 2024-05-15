export default function Divider({
  className,
  vertical,
}: {
  className?: string;
  vertical?: boolean;
}) {
  return (
    <div
      className={`${
        vertical ? "mx-4 w-[1px]" : "my-8 h-[1px]"
      } rounded-full ${className}`}
    ></div>
  );
}

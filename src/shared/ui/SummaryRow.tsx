export default function SummaryRow({
  label,
  value,
  bold,
  className = "",
}: {
  label: string;
  value: string;
  bold?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex justify-between ${
        bold ? "text-foreground-900 text-xl font-semibold" : "text-foreground-700"
      } ${className}`}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

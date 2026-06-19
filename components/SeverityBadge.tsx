interface SeverityBadgeProps {
  severity: string;
}

export default function SeverityBadge({ severity }: SeverityBadgeProps) {
  const styles = {
    HIGH: "bg-red-600",
    MEDIUM: "bg-yellow-600",
    LOW: "bg-green-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded text-white ${
        styles[severity as keyof typeof styles] || "bg-gray-600"
      }`}
    >
      {severity}
    </span>
  );
}

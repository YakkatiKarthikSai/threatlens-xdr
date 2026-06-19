interface DashboardCardProps {
  title: string;
  value: number;
  color: string;
}

export default function DashboardCard({
  title,
  value,
  color,
}: DashboardCardProps) {
  return (
    <div
      className={`
        p-6
        rounded-xl
        border
        ${color}
        bg-gray-900
        hover:scale-105
        hover:shadow-xl
        transition-all
        duration-300
      `}
    >
      <h3 className="text-gray-400 text-sm uppercase tracking-wide">{title}</h3>

      <p className="text-4xl font-bold mt-3">{value}</p>
    </div>
  );
}

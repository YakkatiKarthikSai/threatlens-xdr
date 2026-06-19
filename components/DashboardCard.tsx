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
    <div className={`p-6 rounded-lg border ${color}`}>
      <h3 className="text-gray-300">{title}</h3>

      <p className="text-4xl font-bold mt-2">{value}</p>
    </div>
  );
}

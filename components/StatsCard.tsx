interface StatsCardProps {
  title: string;
  value: string;
}

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
      <h3 className="text-gray-400 text-sm">{title}</h3>

      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

interface AlertCardProps {
  title: string;
  count: string;
  color: string;
}

export default function AlertCard({ title, count, color }: AlertCardProps) {
  return (
    <div className={`p-6 rounded-lg text-white ${color}`}>
      <h3>{title}</h3>

      <p className="text-4xl font-bold mt-2">{count}</p>
    </div>
  );
}

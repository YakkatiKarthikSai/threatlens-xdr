"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface ThreatRecord {
  type: string;
  severity: string;
  occurrences: number;
  timestamp: string;
}

interface ThreatPieChartProps {
  history: ThreatRecord[];
}

export default function ThreatPieChart({ history }: ThreatPieChartProps) {
  const counts = {
    "Brute Force Attack": 0,
    "Port Scan Activity": 0,
    "Suspicious IP Activity": 0,
  };

  history.forEach((item) => {
    if (counts[item.type as keyof typeof counts] !== undefined) {
      counts[item.type as keyof typeof counts]++;
    }
  });

  const data = Object.entries(counts).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ["#ef4444", "#3b82f6", "#22c55e"];

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Threat Distribution</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

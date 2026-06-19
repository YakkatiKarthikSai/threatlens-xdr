"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Brute Force",
    threats: 12,
  },
  {
    name: "Suspicious IP",
    threats: 8,
  },
  {
    name: "Port Scan",
    threats: 5,
  },
];

export default function ThreatChart() {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Threat Distribution</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="threats" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

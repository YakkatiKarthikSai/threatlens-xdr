"use client";

import { useState } from "react";
import StatsCard from "../../components/StatsCard";
import ThreatChart from "../../components/ThreatChart";
import { dashboardData } from "../../lib/detectors/dashboardData";
import { getThreatHistory } from "../../lib/detectors/storage";
import { ThreatRecord } from "../../lib/detectors/threatHistory";
import SeverityBadge from "../../components/SeverityBadge";
import ExportCSV from "../../components/ExportCSV";
import DashboardCard from "../../components/DashboardCard";
import ThreatPieChart from "../../components/ThreatPieChart";
import ClearHistory from "../../components/ClearHistory";

export default function DashboardPage() {
  const [history] = useState<ThreatRecord[]>(() => getThreatHistory());

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">ThreatLens XDR Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Alerts"
          value={history.length}
          color="border-blue-600"
        />

        <DashboardCard
          title="Critical Threats"
          value={history.filter((item) => item.severity === "HIGH").length}
          color="border-red-600"
        />

        <DashboardCard
          title="Medium Threats"
          value={history.filter((item) => item.severity === "MEDIUM").length}
          color="border-yellow-600"
        />

        <DashboardCard
          title="Low Threats"
          value={history.filter((item) => item.severity === "LOW").length}
          color="border-green-600"
        />
      </div>
      <ThreatPieChart history={history} />

      <div className="mb-6">
        <div className="flex">
          <ExportCSV data={history} />

          <ClearHistory onClear={() => setHistory([])} />
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Threat History</h2>

        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left pb-3">Threat Type</th>

              <th className="text-left pb-3">Severity</th>

              <th className="text-left pb-3">Time</th>
            </tr>
          </thead>

          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-6 text-gray-400">
                  No threats detected yet
                </td>
              </tr>
            ) : (
              history.map((threat, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="py-3">{threat.type}</td>

                  <td className="py-3">
                    <SeverityBadge severity={threat.severity} />
                  </td>

                  <td className="py-3">{threat.timestamp}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import { getThreatHistory } from "../../lib/detectors/storage";
import { ThreatRecord } from "../../lib/detectors/threatHistory";
import SeverityBadge from "../../components/SeverityBadge";
import ExportCSV from "../../components/ExportCSV";
import DashboardCard from "../../components/DashboardCard";
import ThreatPieChart from "../../components/ThreatPieChart";
import ClearHistory from "../../components/ClearHistory";

export default function DashboardPage() {
  const [history, setHistory] = useState<ThreatRecord[]>(() =>
    getThreatHistory(),
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white p-10">
      <div className="mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          ThreatLens XDR
        </h1>

        <p className="text-gray-400 mt-2">
          Security Operations Center • Threat Intelligence • Incident Response
        </p>
      </div>
      <div className="flex gap-4 mb-8">
        <ExportCSV data={history} />

        <ClearHistory onClear={() => setHistory([])} />

        <button className="bg-cyan-600 px-4 py-2 rounded-lg">
          Generate Report
        </button>
      </div>
      <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-xl p-5 mb-8">
        <h2 className="text-xl font-bold">SOC Status</h2>

        <p className="text-green-400 mt-2">✓ Monitoring Active</p>

        <p className="text-gray-400">Threat Detection Engines Online</p>
      </div>

      <div className="mb-8">
        <div className="bg-gray-900 border border-cyan-500/30 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Current Threat Level</h2>

          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>

            <span className="text-red-400 font-semibold text-lg">HIGH</span>
          </div>

          <p className="text-gray-400 mt-2">
            Multiple suspicious activities detected in recent scans.
          </p>
        </div>
      </div>
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
        <div className="mt-10 text-center text-gray-500 text-sm">
          ThreatLens XDR v3 • Security Monitoring Platform
          <br />
          Developed by Karthik Sai Yakkati
        </div>
      </div>
    </main>
  );
}

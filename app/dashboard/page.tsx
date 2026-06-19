import StatsCard from "../../components/StatsCard";
import ThreatChart from "../../components/ThreatChart";
import { dashboardData } from "../../lib/detectors/dashboardData";
import { threatHistory } from "../../lib/detectors/threatHistory";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">ThreatLens XDR Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Alerts"
          value={dashboardData.totalAlerts.toString()}
        />

        <StatsCard
          title="Critical Alerts"
          value={dashboardData.criticalAlerts.toString()}
        />

        <StatsCard
          title="High Severity"
          value={dashboardData.criticalAlerts.toString()}
        />

        <StatsCard
          title="Scans Performed"
          value={dashboardData.scansPerformed.toString()}
        />
      </div>

      <ThreatChart />

      <div className="mt-10 bg-gray-900 border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Alerts</h2>

        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left pb-3">Alert</th>
              <th className="text-left pb-3">Severity</th>
              <th className="text-left pb-3">Time</th>
            </tr>
          </thead>

          <tbody>
            {threatHistory.map((threat, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="py-3">{threat.type}</td>

                <td className="py-3">{threat.severity}</td>

                <td className="py-3">{threat.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

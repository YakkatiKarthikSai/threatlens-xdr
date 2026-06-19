import StatsCard from "../../components/StatsCard";
import ThreatChart from "../../components/ThreatChart";
import { dashboardData } from "../../lib/detectors/dashboardData";

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
              <th className="text-left pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Brute Force Attack</td>
              <td>HIGH</td>
              <td>OPEN</td>
            </tr>

            <tr>
              <td>Suspicious IP Activity</td>
              <td>HIGH</td>
              <td>OPEN</td>
            </tr>

            <tr>
              <td>Port Scan</td>
              <td>MEDIUM</td>
              <td>INVESTIGATING</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

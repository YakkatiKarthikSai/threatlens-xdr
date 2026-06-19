export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-7xl font-bold mb-4 text-center">ThreatLens XDR</h1>

      <p className="text-2xl text-cyan-400 mb-4 text-center">
        Security Monitoring & Threat Detection Platform
      </p>

      <p className="text-gray-400 max-w-3xl text-center mb-10">
        Analyze security logs, detect cyber threats, generate incident reports,
        and monitor alerts through a SOC-style dashboard designed for Blue Team
        operations and cybersecurity analysis.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="/analyzer"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Analyze Logs
        </a>

        <a
          href="/dashboard"
          className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
        >
          Dashboard
        </a>

        <a
          href="/reports"
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          Reports
        </a>
      </div>
    </main>
  );
}

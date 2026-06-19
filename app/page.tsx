export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">ThreatLens XDR</h1>

      <p className="text-xl text-gray-400 mb-8 text-center">
        AI-Powered Security Monitoring & Threat Detection Platform
      </p>

      <div className="flex gap-4">
        <a href="/analyzer" className="px-6 py-3 bg-blue-600 rounded-lg">
          Analyze Logs
        </a>

        <a href="/dashboard" className="px-6 py-3 bg-gray-800 rounded-lg">
          Dashboard
        </a>

        <a href="/reports" className="px-6 py-3 bg-green-600 rounded-lg">
          Reports
        </a>
      </div>
    </main>
  );
}

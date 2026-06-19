"use client";

import { useState } from "react";
import {
  detectBruteForce,
  DetectionResult,
} from "../../lib/detectors/bruteForce";
import { detectSuspiciousIP } from "../../lib/detectors/suspiciousIP";
import { dashboardData } from "../../lib/detectors/dashboardData";
import FileUpload from "../../components/FileUpload";
import { detectPortScan } from "../../lib/detectors/portScan";
import SeverityBadge from "../../components/SeverityBadge";
import { threatHistory } from "../../lib/detectors/threatHistory";

export default function AnalyzerPage() {
  const [content, setContent] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const [result, setResult] = useState<DetectionResult | null>(null);

  const handleAnalyze = () => {
    const bruteForce = detectBruteForce(content);

    const suspiciousIP = detectSuspiciousIP(content);

    const portScan = detectPortScan(content);

    dashboardData.scansPerformed += 1;

    const results = [bruteForce, suspiciousIP, portScan];

    const highestThreat = results.reduce((prev, current) =>
      prev.occurrences > current.occurrences ? prev : current,
    );

    if (highestThreat.occurrences > 0) {
      dashboardData.totalAlerts += 1;
    }

    if (highestThreat.severity === "HIGH") {
      dashboardData.criticalAlerts += 1;
    }

    threatHistory.push({
      type: highestThreat.alertType,
      severity: highestThreat.severity,
      occurrences: highestThreat.occurrences,
      timestamp: new Date().toLocaleString(),
    });

    setResult(highestThreat);
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Log Analyzer</h1>

      <FileUpload
        onFileRead={(text) => {
          setContent(text);
          setUploaded(true);
        }}
      />

      {uploaded && (
        <p className="text-green-500 mb-4">Log file uploaded successfully</p>
      )}

      <textarea
        className="w-full h-64 p-4 rounded bg-gray-900 border border-gray-700"
        placeholder="Paste log content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handleAnalyze}
        className="mt-4 px-6 py-3 bg-blue-600 rounded-lg"
      >
        Analyze
      </button>

      {result && (
        <div className="mt-6 border border-gray-700 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Detection Result</h2>

          <p>
            <strong>Type:</strong> {result.alertType}
          </p>

          <p>
            <strong>Occurrences:</strong> {result.occurrences}
          </p>

          <div className="mt-2">
            <strong>Severity:</strong>{" "}
            <SeverityBadge severity={result.severity} />
          </div>
        </div>
      )}
    </main>
  );
}

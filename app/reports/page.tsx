"use client";

import jsPDF from "jspdf";

export default function ReportsPage() {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("ThreatLens XDR Report", 20, 20);

    doc.setFontSize(12);

    doc.text("Alert Type: Brute Force Attack", 20, 50);

    doc.text("Severity: HIGH", 20, 60);

    doc.text("Occurrences: 5", 20, 70);

    doc.text("Recommendation:", 20, 90);

    doc.text(
      "Investigate source IP and enforce account lockout policies.",
      20,
      100,
    );

    doc.save("ThreatLens_Report.pdf");
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Incident Reports</h1>

      <button
        onClick={generatePDF}
        className="bg-blue-600 px-6 py-3 rounded-lg"
      >
        Generate PDF Report
      </button>
    </main>
  );
}

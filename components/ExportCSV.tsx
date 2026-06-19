"use client";

interface ThreatRecord {
  type: string;
  severity: string;
  occurrences: number;
  timestamp: string;
}

interface ExportCSVProps {
  data: ThreatRecord[];
}

export default function ExportCSV({ data }: ExportCSVProps) {
  const exportCSV = () => {
    const headers = "Threat Type,Severity,Occurrences,Timestamp\n";

    const rows = data
      .map(
        (item) =>
          `${item.type},${item.severity},${item.occurrences},${item.timestamp}`,
      )
      .join("\n");

    const csv = headers + rows;

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "ThreatHistory.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  return (
    <button onClick={exportCSV} className="bg-green-600 px-4 py-2 rounded-lg">
      Export CSV
    </button>
  );
}

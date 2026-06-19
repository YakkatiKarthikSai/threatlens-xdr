export interface PortScanResult {
  alertType: string;
  occurrences: number;
  severity: string;
}

export function detectPortScan(log: string): PortScanResult {
  const patterns = [
    "nmap",
    "syn scan",
    "port sweep",
    "xmas scan",
    "masscan",
  ];

  let count = 0;

  patterns.forEach((pattern) => {
    const matches = log.match(
      new RegExp(pattern, "gi")
    );

    if (matches) {
      count += matches.length;
    }
  });

  return {
    alertType: "Port Scan Activity",
    occurrences: count,
    severity: count >= 3 ? "HIGH" : "LOW",
  };
}
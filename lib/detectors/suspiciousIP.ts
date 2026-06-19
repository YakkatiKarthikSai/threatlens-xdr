export interface SuspiciousIPResult {
  alertType: string;
  occurrences: number;
  severity: string;
}

export function detectSuspiciousIP(log: string): SuspiciousIPResult {
  const suspiciousIPs = [
    "192.168.1.100",
    "10.0.0.50",
    "172.16.0.99",
  ];

  let count = 0;

  suspiciousIPs.forEach((ip) => {
    const matches = log.match(
      new RegExp(ip.replace(/\./g, "\\."), "g")
    );

    if (matches) {
      count += matches.length;
    }
  });

  return {
    alertType: "Suspicious IP Activity",
    occurrences: count,
    severity: count >= 2 ? "HIGH" : "LOW",
  };
}
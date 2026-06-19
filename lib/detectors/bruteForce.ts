export interface DetectionResult {
  alertType: string;
  occurrences: number;
  severity: string;
}

export function detectBruteForce(log: string): DetectionResult {
  const patterns = [
    "Failed password",
    "authentication failure",
    "invalid user",
  ];

  let count = 0;

  patterns.forEach((pattern) => {
    const matches = log.match(new RegExp(pattern, "gi"));

    if (matches) {
      count += matches.length;
    }
  });

  return {
    alertType: "Brute Force Attack",
    occurrences: count,
    severity: count >= 5 ? "HIGH" : "LOW",
  };
}
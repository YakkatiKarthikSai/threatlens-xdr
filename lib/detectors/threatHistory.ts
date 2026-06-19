export interface ThreatRecord {
    type: string;
    severity: string;
    occurrences: number;
    timestamp: string;
}

export const threatHistory: ThreatRecord[] = [];

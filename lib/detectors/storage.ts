import { ThreatRecord } from "./threatHistory";

export const saveThreatHistory = (history: ThreatRecord[]) => {
    localStorage.setItem(
        "threatHistory",
        JSON.stringify(history)
    );
};

export const getThreatHistory = (): ThreatRecord[] => {
    const data = localStorage.getItem(
        "threatHistory"
    );

    return data ? (JSON.parse(data) as ThreatRecord[]) : [];
};
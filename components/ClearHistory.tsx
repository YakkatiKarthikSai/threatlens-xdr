"use client";

interface ClearHistoryProps {
  onClear: () => void;
}

export default function ClearHistory({ onClear }: ClearHistoryProps) {
  const handleClear = () => {
    localStorage.removeItem("threatHistory");

    onClear();
  };

  return (
    <button
      onClick={handleClear}
      className="bg-red-600 px-4 py-2 rounded-lg ml-3"
    >
      Clear History
    </button>
  );
}

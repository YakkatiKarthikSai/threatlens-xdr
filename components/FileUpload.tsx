"use client";

interface FileUploadProps {
  onFileRead: (content: string) => void;
}

export default function FileUpload({ onFileRead }: FileUploadProps) {
  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target?.result as string;
      onFileRead(text);
    };

    reader.readAsText(file);
  };

  return (
    <div className="mb-6">
      <input
        type="file"
        accept=".log,.txt"
        onChange={handleFile}
        className="border border-gray-700 p-2 rounded"
      />
    </div>
  );
}

"use client";

interface FieldInputProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  placeholder?: string;
}

export default function FieldInput({
  label,
  value,
  onChange,
  type = "text",
  error,
  placeholder,
}: FieldInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground-700 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-gray-900 ${
          error ? "border-red-400" : "border-gray-200"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

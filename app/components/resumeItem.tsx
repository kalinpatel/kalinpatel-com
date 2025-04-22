import { ReactNode } from "react";

export default function ResumeItem({
  title,
  subtitle,
  dates,
  description,
}: {
  title: string;
  subtitle?: string;
  dates?: string;
  description?: (string | ReactNode)[];
}) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-bold">{title}</h3>
      {subtitle && <p className="text-base text-gray-500">{subtitle}</p>}
      {dates && <p className="text-base text-gray-500">{dates}</p>}
      {description && (
        <ul className="list-disc list-inside text-base text-gray-700 mt-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

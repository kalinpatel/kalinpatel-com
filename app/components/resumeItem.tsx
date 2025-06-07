import { ReactNode } from "react";

export default function ResumeItem({
  title,
  subtitle,
  dates,
  description,
}: {
  title: string;
  subtitle?: string;
  dates: string;
  description?: (string | ReactNode)[];
}) {
  return (
    <div className="mb-4 flex items-start gap-4">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base text-gray-500 font-light">
          <span className="font-bold text-indigo-700">{subtitle}</span>
          {subtitle && dates ? " // " : ""}
          <span className="text-gray-700 font-normal">{dates}</span>
        </p>

        {description && (
          <ul className="list-disc list-inside text-base text-gray-700 mt-2">
            {description.map((item, index) => (typeof item === "string" ? <li key={index}>{item}</li> : item))}
          </ul>
        )}
      </div>
    </div>
  );
}

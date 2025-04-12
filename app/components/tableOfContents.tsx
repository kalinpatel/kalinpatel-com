// components/toc.tsx
"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function TableOfContents() {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;

      let current = "";
      let index = 0;

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el && scrollY >= el.offsetTop) {
          current = sections[i].id;
          index = i;
        }
      }

      setActive(current);
      setProgress((index + 1) / sections.length);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-10 hidden lg:block">
      <div className="relative pl-6">
        {/* Vertical track */}
        <div className="absolute left-1 top-0 h-full w-0.5 bg-gray-300 rounded" />

        {/* Animated indicator */}
        <div
          className="absolute left-1 top-0 w-0.5 bg-gray-800 rounded transition-all duration-300"
          style={{ height: `${progress * 100}%` }}
        />

        {/* Section links */}
        <ul className="space-y-4 text-sm text-gray-500">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block transition-all ${active === section.id ? "text-gray-800 font-semibold" : ""}`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

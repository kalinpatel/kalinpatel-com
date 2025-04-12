import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "https://vercel.com/templates/next.js/portfolio-starter-kit": {
    name: "deploy",
  },
};

export function Navbar() {
  return (
    <nav className="w-full mb-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          Kalin Patel
        </Link>

        <div className="hidden sm:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="https://github.com/kalinpatel" target="_blank" className="hover:text-black">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/kalinbpatel/" target="_blank" className="hover:text-black">
            LinkedIn
          </Link>
          <Link href="mailto:hello@kalinpatel.me" className="hover:text-black">
            Email
          </Link>
        </div>
      </div>
    </nav>
  );
}

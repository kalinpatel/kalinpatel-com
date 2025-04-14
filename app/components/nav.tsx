import Link from "next/link";
import { Fragment } from "react";
import { FaHome } from "react-icons/fa";

const navItems = {
  "/": {
    name: "home",
    icon: <FaHome className="text-gray-500" />,
  },
};

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 shadow-lg rounded-2xl px-2 py-2 flex items-center space-x-2 z-100">
      <Link className="text-black ml-2 hover:text-indigo-900 transition-colors duration-200 font-semibold" href="/">
        Kalin Patel
      </Link>
      <div className="w-px h-6 bg-gray-300 ml-2"></div>
      {Object.entries(navItems).map(([href, { name }], index) => (
        <Fragment key={href}>
          <Link
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-gray-700 border border-gray-300 transition duration-200 ease-in-out"
          >
            {navItems[href].icon}
            <span>{name}</span>
          </Link>
        </Fragment>
      ))}
    </nav>
  );
}

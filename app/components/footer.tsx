import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-18 text-sm text-gray-500 mb-8">
      <div className="flex flex-col items-center space-y-2">
        <div>
          © {new Date().getFullYear()} / <span className="text-black">Kalin Patel</span>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://github.com/kalinpatel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-gray-500 hover:text-black" size={20} />
          </a>
          <a href="https://linkedin.com/in/kalinpatel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-gray-500 hover:text-black" size={20} />
          </a>
          <a href="mailto:hello@kalinpatel.me" aria-label="Email">
            <FaEnvelope className="text-gray-500 hover:text-black" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

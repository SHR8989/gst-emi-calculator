import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-black py-4 pt-[3rem] dark:text-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Left - Copyright */}
        <p className="text-xs md:text-sm mb-4 sm:mb-0">
          © Copyright {new Date().getFullYear()} Shreyansh.dev. All Rights Reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/SHR8989"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shreyansh-sahu-9823b2279"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shreyansh8989@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

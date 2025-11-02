// components/VisitCourseButton.js
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function VisitCourseButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit course on Udemy"
      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-full shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 hover:shadow-2xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400"
    >
      <FaExternalLinkAlt className="mr-2 text-lg" />
      Visit Course on Udemy
    </a>
  );
}

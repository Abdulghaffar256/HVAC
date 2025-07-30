// components/VisitCourseButton.js

import { FaWhatsapp } from 'react-icons/fa'; // Assuming react-icons is installed; install via npm if needed

export default function VisitCourseButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 hover:from-green-600 hover:via-green-700 hover:to-green-800 transition-all duration-300 ease-in-out dark:from-green-600 dark:via-green-700 dark:to-green-800 dark:hover:from-green-500 dark:hover:via-green-600 dark:hover:to-green-700 dark:shadow-green-900/50"
    >
      <FaWhatsapp className="mr-2 text-xl" />
      Contact Us on WhatsApp for Any Help
    </a>
  );
}

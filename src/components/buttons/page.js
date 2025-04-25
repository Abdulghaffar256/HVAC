// components/VisitCourseLink.js

export default function VisitCourseButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      type="button"
      className=" bg-accent dark:bg-accentDark text-light dark:text-dark py-2 text-light dark:text-dark font-semibold transition-colors  duration-300"
    >
      Click Here to Get Course
    </a>
  );
}

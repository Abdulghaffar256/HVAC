import { useRouter } from 'next/navigation'; // Use this for App Router

const Button = ({ children, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <button
      className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

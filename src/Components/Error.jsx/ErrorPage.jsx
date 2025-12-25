import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex flex-col items-center justify-center text-white px-6">
      <FaExclamationTriangle className="text-yellow-400 text-6xl animate-bounce mb-4" />
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <h2 className="text-2xl mb-4 font-semibold">Oops! Page Not Found</h2>
      <p className="text-center max-w-md mb-6">
        The page you're looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-2 rounded bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition duration-200"
      >
        Go Back Home
      </Link>

      {/* Glowing circle effect */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-30 animate-ping" />
    </div>
  );
};

export default ErrorPage;

import { CheckSquare, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <CheckSquare size={34} className="text-blue-600" />

          <span className="text-2xl font-bold text-gray-800">
            TaskTracker
          </span>
        </Link>

        {/* Public Navbar */}

        {!isAuthenticated ? (
          <>
            <div className="hidden md:flex items-center gap-8">

              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Features
              </a>

              <a
                href="#stats"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Statistics
              </a>

              <a
                href="#footer"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Contact
              </a>

            </div>

            <div className="hidden md:flex gap-4">

              <Link
                to="/signin"
                className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>

            </div>
          </>
        ) : (
          <>
            {/* Dashboard Navbar */}

            <div className="hidden md:flex items-center gap-8">

              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Dashboard
              </Link>

              <Link
                to="/create-task"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                New Task
              </Link>

            </div>

            <div className="hidden md:flex items-center gap-5">

              <div className="text-right">

                <p className="text-sm text-gray-500">
                  Welcome
                </p>

                <p className="font-semibold text-gray-800">
                  {user?.name}
                </p>

              </div>

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>

            </div>
          </>
        )}

        {/* Mobile */}

        <button className="md:hidden">
          <Menu size={30} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
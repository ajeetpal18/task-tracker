import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { User, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/api";

const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/register", formData);

      alert(
        response.data.message || "Account created successfully!"
      );

      // If backend returns token & user -> Auto Login
      if (response.data.token && response.data.user) {
        login(response.data.user, response.data.token);
        navigate("/dashboard");
      } else {
        // Otherwise redirect to Sign In
        navigate("/signin");
      }

    } catch (error) {
      alert(
        error.response?.data?.message || "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start managing your tasks today."
    >
      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* Name */}
        <div>
          <label className="font-medium">Full Name</label>

          <div className="flex items-center border rounded-xl mt-2 px-4">
            <User size={18} />

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 outline-none"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="font-medium">Email</label>

          <div className="flex items-center border rounded-xl mt-2 px-4">
            <Mail size={18} />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 outline-none"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="font-medium">Password</label>

          <div className="flex items-center border rounded-xl mt-2 px-4">
            <Lock size={18} />

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 outline-none"
              required
              minLength={6}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 disabled:bg-blue-400 transition"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-center text-gray-600">
          Already have an account?
          <Link
            to="/signin"
            className="text-blue-600 ml-2 hover:underline"
          >
            Sign In
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
};

export default SignUp;
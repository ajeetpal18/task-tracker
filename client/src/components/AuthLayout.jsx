import { CheckSquare } from "lucide-react";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}

      <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-blue-700 via-blue-600 to-indigo-700 text-white px-20">

        <CheckSquare size={70} />

        <h1 className="text-5xl font-bold mt-8">
          TaskTracker
        </h1>

        <p className="mt-6 text-lg leading-8 text-blue-100">
          Organize your tasks, increase productivity,
          and collaborate effortlessly with a modern
          task management platform.
        </p>

        <div className="mt-12 space-y-5">

          <div>✔ Create unlimited tasks</div>

          <div>✔ Track deadlines easily</div>

          <div>✔ Secure cloud storage</div>

          <div>✔ Fast and responsive</div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex justify-center items-center bg-gray-50">

        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10">

          <h2 className="text-4xl font-bold">
            {title}
          </h2>

          <p className="text-gray-500 mt-3">
            {subtitle}
          </p>

          <div className="mt-8">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-3xl px-10 py-20 text-center text-white shadow-2xl">

          <h2 className="text-5xl font-bold">
            Ready To Organize Your Work?
          </h2>

          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of users who simplify their workflow using
            Task Tracker. Create tasks, manage deadlines, and stay productive
            every day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

            <Link
              to="/signup"
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/signin"
              className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition"
            >
              Sign In
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;
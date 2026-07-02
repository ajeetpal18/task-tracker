import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-40 pb-24 bg-linear-to-br from-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            🚀 Organize Work Smarter
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Manage Every
            <span className="text-blue-600"> Task </span>
            With Confidence
          </h1>

          <p className="text-gray-600 mt-8 text-lg">
            Create, organize and track your daily work with a beautiful
            and intuitive task management platform.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-blue-700">
              Get Started
              <ArrowRight size={20}/>
            </button>

            <button className="border px-8 py-4 rounded-xl">
              Learn More
            </button>

          </div>

          <div className="flex gap-6 mt-10">

            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500"/>
              Free Forever
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500"/>
              Responsive
            </div>

          </div>

        </div>

        <img
          src="/hero.png"
          alt="Dashboard"
          className="w-full"
        />

      </div>

    </section>
  );
};

export default Hero;
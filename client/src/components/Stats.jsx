import {
  CheckCircle2,
  Users,
  Clock3,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: <CheckCircle2 size={40} />,
    value: "25K+",
    title: "Tasks Completed",
  },
  {
    icon: <Users size={40} />,
    value: "8K+",
    title: "Active Users",
  },
  {
    icon: <Clock3 size={40} />,
    value: "99.9%",
    title: "Uptime",
  },
  {
    icon: <TrendingUp size={40} />,
    value: "95%",
    title: "Productivity Boost",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Statistics
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Trusted By Teams Around The World
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Our platform helps thousands of users manage projects,
            improve productivity, and stay organized every day.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-10 text-center"
            >

              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {stat.icon}
              </div>

              <h3 className="text-5xl font-bold text-gray-800">
                {stat.value}
              </h3>

              <p className="mt-4 text-lg text-gray-600">
                {stat.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;
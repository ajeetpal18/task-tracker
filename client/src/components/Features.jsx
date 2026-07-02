import {
  CheckCircle2,
  Clock3,
  LayoutDashboard,
  BellRing,
  ShieldCheck,
  Search,
} from "lucide-react";

const features = [
  {
    icon: <LayoutDashboard size={35} />,
    title: "Smart Dashboard",
    description:
      "View all your tasks in one organized dashboard with an intuitive interface.",
  },
  {
    icon: <CheckCircle2 size={35} />,
    title: "Task Management",
    description:
      "Create, update, delete, and organize tasks effortlessly with real-time updates.",
  },
  {
    icon: <Clock3 size={35} />,
    title: "Due Date Tracking",
    description:
      "Stay on schedule by managing deadlines and tracking upcoming tasks.",
  },
  {
    icon: <Search size={35} />,
    title: "Quick Search",
    description:
      "Instantly find any task using fast and efficient search capabilities.",
  },
  {
    icon: <BellRing size={35} />,
    title: "Notifications",
    description:
      "Receive reminders and never miss an important deadline again.",
  },
  {
    icon: <ShieldCheck size={35} />,
    title: "Secure Data",
    description:
      "Your task information is securely stored and always available when you need it.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Everything You Need To Stay Productive
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Manage your daily work with powerful tools designed to improve
            productivity and simplify task management.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;
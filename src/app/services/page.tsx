import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Code,
  Globe,
  BarChart2,
  Lightbulb,
  Megaphone,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Digital Strategy",
    color: "blue",
    description:
      "Comprehensive digital transformation strategies tailored to your business goals and market position.",
  },
  {
    icon: BarChart2,
    title: "Data Analytics",
    color: "indigo",
    description:
      "Transform raw data into actionable insights with our advanced analytics and visualization solutions.",
  },
  {
    icon: Code,
    title: "Technical Consulting",
    color: "purple",
    description:
      "Expert guidance on technology stack selection, architecture, and implementation strategies.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    color: "blue",
    description:
      "Stay ahead with cutting-edge technology solutions and future-proof strategies.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    color: "indigo",
    description:
      "Data-driven marketing strategies to increase your online presence and engagement.",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    color: "purple",
    description:
      "Protect your digital assets with comprehensive security assessments and solutions.",
  },
];

const getGradientClasses = (color: string) => {
  const gradients = {
    blue: "from-sky-50 to-white border-sky-100 bg-blue-500",
    indigo: "from-indigo-50 to-white border-indigo-100 bg-indigo-500",
    purple: "from-purple-50 to-white border-purple-100 bg-purple-500",
  };
  return gradients[color as keyof typeof gradients];
};

export default function Services() {
  return (
    <main className="pt-24 pb-16 px-4 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive digital solutions to transform your business"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const gradientClass = getGradientClasses(service.color);
            return (
              <div
                key={index}
                className={`p-8 bg-gradient-to-b ${
                  gradientClass.split(" ")[0]
                } ${
                  gradientClass.split(" ")[1]
                } rounded-2xl shadow-lg hover:shadow-xl transition-all border ${
                  gradientClass.split(" ")[2]
                }`}
              >
                <div
                  className={`w-14 h-14 ${
                    gradientClass.split(" ")[3]
                  } rounded-xl flex items-center justify-center mb-6`}
                >
                  {<service.icon className="h-7 w-7 text-white" />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

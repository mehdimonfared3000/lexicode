import { SectionHeader } from "@/components/ui/SectionHeader";
import { Users, Target, Award } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "We put our clients first, ensuring solutions that truly meet their needs and exceed expectations.",
  },
  {
    icon: Target,
    title: "Innovation-Driven",
    description:
      "Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to delivering the highest quality in every project we undertake.",
  },
];

export default function About() {
  return (
    <main className="pt-24 pb-16 px-4 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About MonfyMedia"
          subtitle="Transforming businesses through digital excellence"
        />

        <div className="prose max-w-3xl mx-auto mb-16 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <p className="text-lg text-gray-600 mb-6">
            MonfyMedia is a leading digital consultancy firm specializing in
            helping businesses navigate the complex digital landscape. With
            years of experience and a team of expert consultants, we deliver
            innovative solutions that drive real business results.
          </p>
          <p className="text-lg text-gray-600">
            Our approach combines deep technical expertise with strategic
            business insight, ensuring that every solution we deliver is not
            just technically sound but also aligned with our clients&apos;
            business objectives.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {<value.icon className="h-8 w-8 text-white" />}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Code, Globe, BarChart2, Lightbulb, Megaphone, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Comprehensive digital transformation strategies tailored to your business goals and market position."
  },
  {
    icon: BarChart2,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics and visualization solutions."
  },
  {
    icon: Code,
    title: "Technical Consulting",
    description: "Expert guidance on technology stack selection, architecture, and implementation strategies."
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description: "Stay ahead with cutting-edge technology solutions and future-proof strategies."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to increase your online presence and engagement."
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Protect your digital assets with comprehensive security assessments and solutions."
  }
];

export default function Services() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Our Services" 
          subtitle="Comprehensive digital solutions to transform your business"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {<service.icon className="h-6 w-6 text-blue-600" />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
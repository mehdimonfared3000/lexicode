import Link from "next/link";
import { ArrowRight, BarChart2, Globe, Lightbulb } from "lucide-react";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
        <ParallaxSection className="max-w-7xl mx-auto" offset={20}>
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We help businesses thrive in the digital age with strategic
              consulting and innovative solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </ParallaxSection>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ParallaxSection offset={30}>
            <h2 className="text-3xl font-bold text-center mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive solutions to drive your business forward
            </p>
          </ParallaxSection>

          <div className="grid md:grid-cols-3 gap-8">
            <ParallaxSection offset={40} className="flex">
              <div className="p-8 bg-gradient-to-b from-sky-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-sky-100 w-full">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Strategy</h3>
                <p className="text-gray-600">
                  Comprehensive digital transformation strategies tailored to
                  your business goals.
                </p>
              </div>
            </ParallaxSection>

            <ParallaxSection offset={60} className="flex">
              <div className="p-8 bg-gradient-to-b from-indigo-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-indigo-100 w-full">
                <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center mb-6">
                  <BarChart2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
                <p className="text-gray-600">
                  Turn your data into actionable insights with our advanced
                  analytics solutions.
                </p>
              </div>
            </ParallaxSection>

            <ParallaxSection offset={80} className="flex">
              <div className="p-8 bg-gradient-to-b from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-purple-100 w-full">
                <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Innovation Consulting
                </h3>
                <p className="text-gray-600">
                  Stay ahead of the curve with cutting-edge technology solutions
                  and strategies.
                </p>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <ParallaxSection className="max-w-7xl mx-auto" offset={40}>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to achieve your digital goals and drive
              meaningful results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </ParallaxSection>
      </section>
    </main>
  );
}

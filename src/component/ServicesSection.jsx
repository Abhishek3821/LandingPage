import React from "react";
import { motion } from "framer-motion";

const coreServices = [
  {
    title: "UI/UX Design",
    subtitle: "Interfaces which seem effortless.",
    points: [
      "Journey mapping and user research.",
      "Interactive prototyping and testing.",
      "Responsive systems based on mobile.",
      "Web applications and SaaS dashboard.",
    ],
    outcome: "Outcome: 40% reduction in the bounces, 2 times session time.",
  },
  {
    title: "Website Design",
    subtitle: "Your Digital Headquarters",
    points: [
      "Converting landing pages with 15%+ landing pages.",
      "Company websites that gain credibility immediately.",
      "SEO architecture Day one.",
      "Full design systems/style guides.",
    ],
    outcome: "Output: Scalable, developed to be built.",
  },
  {
    title: "Branding & Identity Design",
    subtitle: "Brands That Get Remembered",
    points: [
      "Logo suites and graphic systems.",
      "Psychology of colors and typography knowledge.",
      "Brand books to be executed consistently.",
      "Differentiating positioning.",
    ],
    outcome: "Outcome: Premium priced authority.",
  },
  {
    title: "E-commerce Design",
    subtitle: "The Stores that Sell automatically.",
    points: [
      "Optimized product pages in terms of AOV.",
      "Checkout process has abandonment of less than 2%.",
      "Converting mobile shopping experiences.",
      "Confidence indicators that minimize reluctance.",
    ],
    outcome: "Deliverable: 25% or more increase in purchases made.",
  },
  {
    title: "CMS Design",
    subtitle: "Self-publishing Content.",
    points: [
      "Marketer templates which are modular.",
      "Drag and drop section builders.",
      "WordPress, headless-ready Webflow.",
      "Scalable content team-growing systems.",
    ],
    outcome: "Outcome: 5x faster marketing organizations.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function CoreServices() {
  return (
    <section className="relative w-full py-32 lg:py-40 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      <div className="absolute -top-56 -left-56 w-[560px] h-[560px] bg-blue-600/20 rounded-full blur-[200px]" />
      <div className="absolute -bottom-56 -right-56 w-[600px] h-[600px] bg-slate-500/20 rounded-full blur-[220px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Our Core Services
          </h2>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {coreServices.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative p-12 rounded-3xl
              bg-slate-900/80 backdrop-blur
              border border-slate-700
              hover:border-blue-500
              shadow-xl shadow-black/50
              hover:shadow-blue-600/30
              transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>

              <p className="text-slate-400 font-medium mb-6">
                {service.subtitle}
              </p>

              <ul className="space-y-3 text-slate-300 mb-10">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-700 text-blue-400 font-semibold">
                {service.outcome}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

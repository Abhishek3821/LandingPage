import { motion } from "framer-motion";
import {
  MessageCircle,
  Lightbulb,
  Map,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Discover & Audit",
      description:
        "We understand your business model, audience, conversion funnel, and identify UX gaps that are holding growth back.",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Structure",
      description:
        "Every key screen is mapped with clear site architecture, user journeys, and defined page objectives.",
    },
    {
      icon: Map,
      title: "Wireframes & UX",
      description:
        "Low-fidelity wireframes focused on layout clarity, hierarchy, and seamless user path alignment.",
    },
    {
      icon: ShieldCheck,
      title: "Visual Design & Prototypes",
      description:
        "High-fidelity UI designs ready for testing, aligned with your branding, components, and micro-interactions.",
    },
    {
      icon: Rocket,
      title: "Handoff & Support",
      description:
        "Developer-ready assets, specifications, and continuous support during optimization and post-launch.",
    },
  ];

  return (
    <section className="w-full bg-[#0a1b2e] py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Proven{" "}
            <span className="text-red-500">5-Step Design Process</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Normal Schedule: <strong>6–8 weeks</strong> &nbsp;|&nbsp; Rewrites:
            <strong> No limit until perfect</strong>
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-slate-700 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#0f2742] border border-slate-700 shadow-md flex items-center justify-center">
                    <step.icon size={24} className="text-red-500" />
                  </div>

                  {/* Step Number */}
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>

                  {/* Mobile Indicator */}
                  <div className="mt-6 md:hidden w-12 h-1 bg-red-500/30 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="bg-red-500 text-white px-12 py-4 rounded-full font-bold hover:bg-red-600 transition-all shadow-xl shadow-red-900/20">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}

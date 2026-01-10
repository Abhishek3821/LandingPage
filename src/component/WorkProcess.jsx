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
        "We know your business model, audience, funnel, and the problems with UX that you have.",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Structure",
      description:
        "Each of each key screen has its own site architecture, user journeys, and page objectives",
    },
    {
      icon: Map,
      title: "Wireframes & UX",
      description:
        "Low-fidelity flows to achieve layout, hierarchy and user path alignment.",
    },
    {
      icon: ShieldCheck,
      title: "Visual Design & Prototypes",
      description:
        "Ready to test and present High-fidelity UI, your branding, components, and micro-interactions.",
    },
    {
      icon: Rocket,
      title: "Handoff & Support",
      description:
        "Developing ready exports, specifications, and after sales service during optimisation in the building and post-launch.",
    },
  ];

  return (
    <section className="w-full bg-[#0a1b2e] py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Proven{" "}
            <span className="text-blue-500">5-Step Design Process</span>
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
                  <div className="w-14 h-14 rounded-md bg-[#0f2742] border border-slate-700 shadow-md flex items-center justify-center">
                    <step.icon size={24} className="text-blue-500" />
                  </div>

                  {/* Step Number */}
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
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
                  <div className="mt-6 md:hidden w-12 h-1 bg-blue-500/30 rounded-md" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

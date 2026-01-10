import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const coreServices = [
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "Interfaces that seem effortless.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop",
    points: [
      "Journey mapping and user research.",
      "Interactive prototyping and testing.",
      "Responsive systems based on mobile.",
      "Web applications and SaaS dashboard.",
    ],
    outcome: "40% reduction in the bounces, 2 times session time.",
    accent: "blue",
  },
  {
    id: "web",
    title: "Website Design",
    description: "Your Design Headquarters",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    points: [
      "Converting landing pages with 15%+ landing pages.",
      "Company websites that gain credibility immediately.",
      "SEO architecture Day one.",
      "Full design systems/style guides.",
    ],
    outcome: "Scalable, developed to be built.",
    accent: "indigo",
  },
  {
    id: "brand",
    title: "Branding & Identity Design",
    description: "Brands That Get Remembered",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    points: [
      "Logo suites and graphic systems.",
      "Psychology of colors and typography knowledge.",
      "Brand books to be executed consistently.",
      "Differentiating positioning.",
    ],
    outcome: "Premium priced authority.",
    accent: "purple",
  },
  {
    id: "ecom",
    title: "E-commerce Design",
    description: "The Stores that Sell automatically.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop",
    points: [
      "Optimized product pages in terms of AOV.",
      "Checkout process has an abandonment rate of less than 2%.",
      "Converting mobile shopping experiences.",
      "Confidence indicators that minimize reluctance.",
    ],
    outcome: "25% or more increase in purchases made.",
    accent: "rose",
  },
  {
    id: "cms",
    title: "CMS Design",
    description: "Self-publishing Content.",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1600&auto=format&fit=crop",
    points: [
      "Marketer templates which are modular.",
      "Drag and drop section builders.",
      "WordPress, headless-ready Webflow.",
      "Scalable content team-growing systems.",
    ],
    outcome: "5x faster marketing organizations.",
    accent: "emerald",
  },
];

const accentGradients = {
  blue: "from-blue-500 to-cyan-400",
  indigo: "from-indigo-500 to-blue-400",
  purple: "from-purple-500 to-fuchsia-400",
  rose: "from-rose-500 to-pink-400",
  emerald: "from-emerald-500 to-teal-400",
};

function ServiceCard({ service, isActive, onHover }) {
  const [aiInsight, setAiInsight] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAiInsight = async (e) => {
    e.stopPropagation();
    if (aiInsight || loading) return;

    setLoading(true);
    const data = await generateServiceStrategy(service.title);
    setAiInsight(data);
    setLoading(false);
  };

  return (
    <motion.div
      onMouseEnter={onHover}
      className={`relative p-8 rounded-[2rem] transition-all duration-500 cursor-pointer border ${
        isActive
          ? "bg-white/5 border-white/20 shadow-2xl"
          : "bg-transparent border-transparent hover:border-white/5"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3
            className={`text-2xl font-bold transition-colors duration-300 ${
              isActive ? "text-white" : "text-slate-500"
            }`}
          >
            {service.title}
          </h3>

          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border border-white/10 transition-transform duration-500 ${
              isActive ? "rotate-45 scale-110 border-white/30" : ""
            }`}
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>

        <p
          className={`text-sm leading-relaxed transition-opacity duration-300 ${
            isActive ? "text-slate-300" : "text-slate-600 line-clamp-1"
          }`}
        >
          {service.description}
        </p>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 pt-2 pb-4">
                {service.points.map((p, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-400"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block mb-1">
                    Outcome
                  </span>
                  <span
                    className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                      accentGradients[service.accent]
                    }`}
                  >
                    {service.outcome}
                  </span>
                </div>
              </div>

              {aiInsight && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-5 rounded-2xl bg-black/40 border border-white/5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-black tracking-widest text-blue-400 uppercase">
                      Gemini Intelligence
                    </span>
                    <div className="h-px flex-grow bg-white/5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {aiInsight.strategy}
                  </h4>
                  <p className="text-xs text-slate-500 italic leading-relaxed">
                    "{aiInsight.reasoning}"
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function CoreServices() {
  const [activeId, setActiveId] = useState(coreServices[0].id);
  const activeService = coreServices.find((s) => s.id === activeId);

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col lg:flex-row">
      {/* LEFT IMAGE */}
      <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.image}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-1/2 p-6 lg:p-24">
        <div className="max-w-xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mt-4 mb-6">
              Our Core Services
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {coreServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isActive={activeId === service.id}
                onHover={() => setActiveId(service.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

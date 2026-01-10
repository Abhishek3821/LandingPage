import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

/* ============================
   DATA
============================ */
const strategyPoints = [
  {
    title: "SaaS & Tech Products",
    text: "UI Dashboard - Feature Landing Pages - Onboarding Flows.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "emerald",
  },
  {
    title: "E-commerce & D2C Brands",
    text: "Product Pages - Checkout Optimization - Brand Stores.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "rose",
  },
  {
    title: "B2B Service Businesses",
    text: "Lead Generation Web Sites - Portfolio Systems - Authority Hubs.",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    color: "indigo",
  },
  {
    title: "Content & Media Companies",
    text: "Resource Libraries - Membership Sites - CMS Templates.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    color: "purple",
  },
];

const accentColors = {
  emerald: "from-emerald-500 to-teal-400",
  rose: "from-rose-500 to-pink-400",
  indigo: "from-indigo-500 to-blue-400",
  purple: "from-purple-500 to-fuchsia-400",
};

/* ============================
   STRATEGY CARD
============================ */
const StrategyCard = ({ item, index }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="
        group relative p-8 rounded-[2rem]
        bg-zinc-900/80
        border border-zinc-700/50
        hover:border-zinc-500/80
        transition-all duration-500
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      "
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-bold tracking-[0.35em] text-zinc-400 font-mono uppercase">
            {item.label}
          </span>

          <div
            className={`w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center
            transition-all group-hover:scale-110 group-hover:bg-gradient-to-br
            ${accentColors[item.color]}`}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={item.icon}
              />
            </svg>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-zinc-100 mb-4">
          {item.title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
      </div>

      <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

/* ============================
   MAIN SECTION
============================ */
export default function WhyCapyngen() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 lg:py-56 bg-black overflow-hidden"
    >
      {/* Background grid */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-16">
          Perfect For Fast-Growing Companies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategyPoints.map((point, idx) => (
            <StrategyCard key={idx} item={point} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
    title: "Strategy-First Approach",
    text: "We do not begin with design trends but with your business objectives, audience psychology and revenue needs.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "blue",
  },
  {
    title: "Performance Obsessed",
    text: "No design fails our 95-point UX inspection, which is reviewed by the client. Lighthouse scores: 95 and above ensured.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10",
    color: "emerald",
  },
  {
    title: "Revenue-Focused",
    text: "We do not put together conversion paths, we put together screens. All CTA, all flows, all microcopies optimized.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2",
    color: "rose",
  },
  {
    title: "Developer-Ready",
    text: "Seamless handoff using Figma components, specs, and style guides. No surprises of the lost in translation.",
    icon: "M8 9l3 3-3 3m5 0h3",
    color: "indigo",
  },
];

/* ============================
   STRATEGY CARD
============================ */
const StrategyCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const onMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group p-8 rounded-[2rem] bg-white/[0.05] border border-white/10 hover:border-white/30 transition-all duration-500"
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
      </div>
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

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-56 bg-black overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.06]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* SECTION HEADING */}
        <div className="mb-24 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Why Growing Your Business with{" "}
            <span className="text-blue-400">Trusted Capyngen?</span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 font-medium">
            No Templates. No Guesswork. Just Results.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-20">
          {/* LEFT IMAGE */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 hidden lg:block">
            <motion.div
              style={{ y: imageY }}
              className="relative h-[520px] rounded-[2.5rem] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600"
                alt="Strategy Visual"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </motion.div>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            {strategyPoints.map((p, i) => (
              <StrategyCard key={i} item={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ============================
   DATA
============================ */
const testimonials = [
  {
    id: "01",
    quote:
      "Capyngen rebuilt our SaaS dashboard and we booked two times more in 45 days. The UI is high quality, loads right away and our churn reduced by 28%.",
    author: "Priya Sharma",
    role: "CTO, ScaleMetrics",
    impact: "+100% Revenue Growth",
    color: "blue",
  },
  {
    id: "02",
    quote:
      "After their redesigning, our e-commerce store improved conversion to 4.2%, compared to 1.8%. Cart abandonment has reduced to below 15%.",
    author: "Rohan Desai",
    role: "Founder, UrbanThread",
    impact: "+133% Conversion Lift",
    color: "indigo",
  },
  {
    id: "03",
    quote:
      "They designed our brand system and site within 7 weeks. Now we sound like we are in authority and are landing much bigger enterprise deals.",
    author: "Neha Kapoor",
    role: "Growth Lead, ConsultEdge",
    impact: "Premium Market Authority",
    color: "emerald",
  },
];

const accentColors = {
  blue: "from-blue-500 to-cyan-400",
  indigo: "from-indigo-500 to-blue-400",
  emerald: "from-emerald-500 to-teal-400",
};

/* ============================
   TESTIMONIAL CARD
============================ */
const TestimonialCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(useSpring(y), [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(useSpring(x), [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative p-10 rounded-[2.5rem] 
                 bg-white/[0.06] border border-white/10 
                 hover:border-white/25 shadow-2xl transition-all"
    >
      {/* Quote */}
      <p className="text-lg md:text-xl text-white leading-relaxed font-medium mb-10">
        “{item.quote}”
      </p>

      {/* Footer */}
      <div className="flex items-end justify-between border-t border-white/10 pt-6">
        <div>
          <h4 className="text-lg font-bold text-white">{item.author}</h4>
          <p className="text-sm text-slate-300 font-medium">{item.role}</p>
        </div>
      </div>

      {/* Subtle glow */}
      <div
        className={`absolute -inset-px rounded-[2.5rem] 
        bg-gradient-to-br ${accentColors[item.color]} 
        opacity-[0.04] pointer-events-none`}
      />
    </motion.div>
  );
};

/* ============================
   MAIN SECTION
============================ */
export default function RealResults() {
  return (
    <section className="relative w-full py-32 lg:py-48 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-24"
        >
          Documented{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic">
            Impact.
          </span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* Parallax */
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-black selection:bg-blue-500/30"
    >
      {/* BACKGROUND */}
      <motion.div
        style={{ y: yBg, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
          alt="Technical Background"
          className="w-full h-full object-cover opacity-40 grayscale-[40%] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </motion.div>

      {/* HUD GRID */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/10 rounded-full"
        />
      </div>

      {/* SCAN LINE */}
      <motion.div
        initial={{ top: "-100%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-10 pointer-events-none"
      />

      {/* CONTENT */}
      <motion.div
        style={{
          y: yContent,
          opacity: opacityHero,
          scale: scaleHero,
        }}
        className="relative z-20 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
      >
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase font-mono">
              Status: System Online
            </span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter"
            >
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                Digital Alpha.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium"
            >
              India's leading design engine for startups and enterprises ready
              to command their market.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-6 pt-6"
          >
            <button className="px-10 py-5 bg-white text-black font-black rounded-2xl text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10 group flex items-center gap-3">
              Initiate Project
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            <div className="flex items-center gap-4 px-6 border-l border-white/10">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-black bg-slate-800"
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                500+ Nodes Deployed
              </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="relative p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.1)]">
            <div className="absolute top-0 right-0 p-6 opacity-20 font-mono text-[10px] text-white">
              ID_VERIFIED // 2025
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Access Portal
              </h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                Connect with our core team
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Full Name"
                  className="px-5 py-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-white/20 outline-none"
                />
                <input
                  placeholder="Email"
                  className="px-5 py-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-white/20 outline-none"
                />
              </div>

              <select className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-xl text-white/40 outline-none">
                <option className="bg-slate-900">Select Strategic Goal</option>
                <option className="bg-slate-900">
                  Experience Design (UX/UI)
                </option>
                <option className="bg-slate-900">Platform Engineering</option>
                <option className="bg-slate-900">
                  Market Intelligence (Brand)
                </option>
              </select>

              <textarea
                rows={3}
                placeholder="Project vision summary..."
                className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-white/20 outline-none resize-none"
              />

              <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]">
                Request Data Audit
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[8px] font-black tracking-widest text-white uppercase">
          Discovery
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [openForm, setOpenForm] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* Parallax */
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const handleCTA = () => {
    if (window.innerWidth >= 1024) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setOpenForm(true);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* BACKGROUND */}
      <motion.div style={{ y: yBg, scale: 1.1 }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ y: yContent, opacity: opacityHero, scale: scaleHero }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center"
      >
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight"
          >
            Transform Your Digital Presence with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Capyngen
            </span>
          </motion.h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0">
            Conversion-driven UX, branding, and digital experiences built for
            growth-focused businesses.
          </p>

          <p className="text-slate-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
            We design high-impact interfaces, scalable platforms, and digital
            systems that turn ideas into measurable success.
          </p>

          <button
            onClick={handleCTA}
            className="inline-flex items-center gap-3 px-8 py-4 
            bg-gradient-to-r from-blue-500 to-indigo-500
            text-white font-black text-xs uppercase tracking-widest
            rounded-2xl shadow-xl shadow-blue-500/30
            hover:scale-105 active:scale-95 transition-all"
          >
            Start Your Project
            <span>→</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-[10px]">
              Free Consultation
            </span>
          </button>
        </div>

        {/* RIGHT FORM – DESKTOP ONLY */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block lg:col-span-5"
        >
          <FormCard />
        </motion.div>
      </motion.div>

      {/* MOBILE FORM MODAL */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md"
            >
              <FormCard onClose={() => setOpenForm(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ================= FORM CARD ================= */

function FormCard({ onClose }) {
  return (
    <div className="relative p-8 rounded-xl bg-white/[0.04] backdrop-blur-3xl border border-white/10">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 text-xl"
        >
          ✕
        </button>
      )}

      <h3 className="text-2xl font-bold text-white mb-6">
        Request Free Consultation
      </h3>

      <form className="space-y-4">
        <input
          required
          placeholder="Full Name*"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
        />

        <input
          required
          type="email"
          placeholder="Email*"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
        />

        <input
          required
          type="tel"
          placeholder="Number*"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
        />

        <input
          required
          placeholder="Business / Brand Name*"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
        />

        <input
          placeholder="What Type of Business Do You Have?"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
        />

        <input
          required
          placeholder="City / Location*"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
        />

        <select
          required
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
        >
          <option value="">Service Type*</option>
          <option>UI/UX Design</option>
          <option>Website Design</option>
          <option>Branding & Identity Design</option>
          <option>Ecommerce Design</option>
          <option>CMS Design</option>
        </select>

        <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-xs uppercase tracking-widest">
          Submit
        </button>
      </form>
    </div>
  );
}

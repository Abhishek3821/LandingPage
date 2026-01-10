import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/* ============================
   HERO SECTION
============================ */
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
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ y: yContent, opacity: opacityHero, scale: scaleHero }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center"
      >
        {/* LEFT CONTENT */}
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
            className="
              inline-flex items-center gap-3 px-8 py-4
              bg-gradient-to-r from-blue-500 to-indigo-500
              text-white font-black text-xs uppercase tracking-widest
              rounded-2xl shadow-xl shadow-blue-500/30
              hover:scale-105 active:scale-95 transition-all
            "
          >
            Start Your Project →
            <span className="px-3 py-1 rounded-full bg-white/10 text-[10px]">
              Free Consultation
            </span>
          </button>
        </div>

        {/* DESKTOP FORM */}
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

/* ============================
   FORM CARD (NO DEFAULT EXPORT)
============================ */
function FormCard({ onClose }) {
  return (
    <div
      className="
        relative w-full
        max-h-[80vh] lg:max-h-[560px]
        p-6 lg:p-8
        rounded-2xl
        bg-white/[0.04]
        backdrop-blur-3xl
        border border-white/10
        flex flex-col
        overflow-hidden

        
      "
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 text-xl hover:text-white transition"
        >
          ✕
        </button>
      )}

      <h3 className="text-2xl font-bold text-white mb-4">
        Request Free Consultation
      </h3>

      <form className="space-y-4 overflow-y-auto flex-1 pr-1">
        {[
          "Full Name*",
          "Email*",
          "Number*",
          "Business / Brand Name*",
          "What Type of Business Do You Have?",
          "City / Location*",
        ].map((placeholder, i) => (
          <input
            key={i}
            required={placeholder.includes("*")}
            placeholder={placeholder}
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
          />
        ))}

        <select
          required
          className="
            w-full px-5 py-4
            bg-black/40 backdrop-blur-md
            border border-white/20
            rounded-xl
            text-white
            outline-none appearance-none
          "
        >
          <option value="" className="bg-slate-900 text-slate-400">
            Service Type*
          </option>
          <option className="bg-slate-900 text-white">UI/UX Design</option>
          <option className="bg-slate-900 text-white">Website Design</option>
          <option className="bg-slate-900 text-white">
            Branding & Identity Design
          </option>
          <option className="bg-slate-900 text-white">Ecommerce Design</option>
          <option className="bg-slate-900 text-white">CMS Design</option>
        </select>

        <button
          type="submit"
          className="
            w-full py-4
            bg-blue-600 hover:bg-blue-500
            text-white font-black
            rounded-xl
            text-xs uppercase tracking-widest
            sticky bottom-0
          "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

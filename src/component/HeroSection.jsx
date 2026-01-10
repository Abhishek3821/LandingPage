import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/* ============================
   INPUT STYLE (REUSED)
============================ */
const inputClass =
  "w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none placeholder:text-slate-400";

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
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000"
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

      {/* MOBILE MODAL */}
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
   2-STEP FORM CARD
============================ */
function FormCard({ onClose }) {
  const [step, setStep] = useState(1);

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

      {/* HEADER */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white">
          Request Free Consultation
        </h3>
        <p className="text-sm text-slate-300 mt-1">Step {step} of 2</p>

        <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            animate={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>

      {/* BODY */}
      <div className="flex-1 overflow-y-auto pr-1">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-4"
            >
              <input placeholder="Full Name*" required className={inputClass} />
              <input
                placeholder="Email*"
                type="email"
                required
                className={inputClass}
              />
              <input
                placeholder="Phone Number*"
                required
                className={inputClass}
              />
              <input
                placeholder="Business / Brand Name"
                className={inputClass}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-4"
            >
              <input
                placeholder="City / Location*"
                required
                className={inputClass}
              />

              <select required className={`${inputClass} bg-black/40`}>
                <option value="" className="bg-slate-900 text-slate-400">
                  Service Type*
                </option>
                <option className="bg-slate-900 text-white">
                  UI/UX Design
                </option>
                <option className="bg-slate-900 text-white">
                  Website Design
                </option>
                <option className="bg-slate-900 text-white">
                  Branding & Identity Design
                </option>
                <option className="bg-slate-900 text-white">
                  Ecommerce Design
                </option>
                <option className="bg-slate-900 text-white">CMS Design</option>
              </select>

              <textarea
                rows={3}
                placeholder="Tell us briefly about your project"
                className={`${inputClass} resize-none`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ACTIONS */}
      <div className="mt-4 flex justify-between gap-3">
        {step === 2 && (
          <button
            onClick={() => setStep(1)}
            className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition"
          >
            Back
          </button>
        )}

        {step === 1 ? (
          <button
            onClick={() => setStep(2)}
            className="ml-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="ml-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

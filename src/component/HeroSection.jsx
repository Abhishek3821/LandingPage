import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/* ============================
   INPUT STYLE
============================ */
const inputClass =
  "w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all";

/* ============================
   HERO SECTION
============================ */
export default function HeroSection() {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  const handleCTA = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* STATIC BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl  font-black text-white leading-tight"
          >
            Transform Your Digital Presence with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Capyngen
            </span>{" "}
            – India's Leading Design Agency
          </motion.h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0">
            Ready to captivate your audience and convert visitors into
            customers?
          </p>

          <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0">
            Capyngen makes jaw-dropping UX/UI, conversion-driven sites,
            memorable brands, high-functioning e-commerce sites, and flexible
            CMSes that generate actual business outcomes. Our design prowess
            brings to life ideas in the form of digital success stories in
            startups and enterprises alike.
          </p>

          <button
            onClick={handleCTA}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            Start Your Project Today →
            <span className="px-3 py-1 rounded-full bg-white/10 text-[10px]">
              Free Consultation
            </span>
          </button>
        </div>

        {/* FORM */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <FormCard />
        </motion.div>
      </div>
    </section>
  );
}

/* ============================
   FORM CARD
============================ */
function FormCard() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-h-[80vh] lg:max-h-[560px] p-6 lg:p-8 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col">
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
        {step === 1 && (
          <div className="space-y-4">
            <input placeholder="Full Name*" className={inputClass} />
            <input placeholder="Email*" type="email" className={inputClass} />
            <input placeholder="Phone Number*" className={inputClass} />
            <input placeholder="Business / Brand Name" className={inputClass} />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input placeholder="City / Location*" className={inputClass} />

            <div className="relative">
              <select
                defaultValue=""
                className={`${inputClass} appearance-none cursor-pointer pr-12 bg-slate-900`}
              >
                <option value="" disabled className="bg-slate-900 text-white">
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

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                ▼
              </span>
            </div>

            <textarea
              rows={3}
              placeholder="Tell us briefly about your project"
              className={`${inputClass} resize-none`}
            />
          </div>
        )}
      </div>

      {/* ACTIONS */}
      <div className="mt-4 flex justify-between gap-3">
        {step === 2 && (
          <button
            onClick={() => setStep(1)}
            className="px-5 py-3 rounded-xl border border-white/20 text-white"
          >
            Back
          </button>
        )}

        <button
          onClick={() => step === 1 && setStep(2)}
          className="ml-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl"
        >
          {step === 1 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
}

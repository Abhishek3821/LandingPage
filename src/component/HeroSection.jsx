import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
      {/* CLOSE */}
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

        {/* PROGRESS BAR */}
        <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: step === 1 ? "50%" : "100%" }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* FORM BODY */}
      <div className="relative flex-1 overflow-y-auto pr-1">
        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
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
                placeholder="Phone Number*"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
              />

              <input
                placeholder="Business / Brand Name"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
              />
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <input
                required
                placeholder="City / Location*"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
              />

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
                placeholder="Tell us briefly about your project (optional)"
                rows={3}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none resize-none"
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
            className="px-5 py-3 rounded-xl border border-white/20 text-white text-sm hover:bg-white/5 transition"
          >
            Back
          </button>
        )}

        {step === 1 ? (
          <button
            onClick={() => setStep(2)}
            className="
              ml-auto px-6 py-3
              bg-blue-600 hover:bg-blue-500
              text-white font-bold
              rounded-xl
              text-sm uppercase tracking-widest
            "
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="
              ml-auto px-6 py-3
              bg-blue-600 hover:bg-blue-500
              text-white font-bold
              rounded-xl
              text-sm uppercase tracking-widest
            "
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default FormCard;

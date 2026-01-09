import { motion } from "framer-motion";

export default function ProblemsSolved() {
  return (
    <section className="relative w-full py-32 lg:py-40 bg-slate-950 overflow-hidden">
      {/* BACKGROUND COLOR EFFECTS */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute -top-56 -left-56 w-[560px] h-[560px] bg-blue-600/20 rounded-full blur-[180px]" />
      <div className="absolute -bottom-56 -right-56 w-[620px] h-[620px] bg-slate-500/20 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-3xl mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Your Digital Challenges, Solved
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-8 text-xl md:text-2xl text-slate-300 font-medium"
          >
            Quit the Ugly Websites that are not Converting.
          </motion.p>
        </div>

        {/* PROBLEM + SOLUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          {/* PROBLEM CARD – SLIDES FROM LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -140 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative p-12 rounded-md
            bg-slate-900/80 backdrop-blur
            border border-slate-700
            shadow-xl shadow-black/40"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 h-full w-1 bg-slate-500 rounded-md" />

            <h3 className="text-2xl font-bold text-white mb-10 pl-5">
              The Problem:
            </h3>

            <ul className="space-y-6 text-slate-300 leading-relaxed pl-5 text-lg">
              <li>Attractive layouts and disoriented navigation.</li>
              <li>Lay outs that irritate the user.</li>
              <li>Brands that fail to shine in the saturated markets.</li>
              <li>Online shops that have high cart abandonment.</li>
              <li>Slow down your team with content systems.</li>
            </ul>
          </motion.div>

          {/* SOLUTION CARD – SLIDES FROM RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 140 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            className="relative p-12 rounded-md
            bg-blue-600 text-white
            shadow-2xl shadow-blue-600/40
            overflow-hidden"
          >
            {/* Color glow */}
            <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-white/15 rounded-full blur-[160px]" />

            <h3 className="text-2xl font-bold mb-10 relative z-10">
              Capyngen's Solution:
            </h3>

            <p className="relative z-10 text-blue-50 leading-relaxed text-lg">
              Our design is revenue goal oriented. Each interface will be
              designed with user psychology, conversion trigger, and scalable
              infrastructure, which can expand with your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

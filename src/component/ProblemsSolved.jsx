import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function ProblemsSolved() {
  return (
    <section className="relative w-full py-32 lg:py-40 bg-slate-950 overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute -top-56 -left-56 w-[560px] h-[560px] bg-blue-600/20 rounded-full blur-[180px]" />
      <div className="absolute -bottom-56 -right-56 w-[620px] h-[620px] bg-indigo-500/20 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-3xl mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Your Digital Challenges, Solved
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-8 text-xl md:text-2xl text-slate-300 font-medium"
          >
            Quit the ugly websites that don’t convert.
          </motion.p>
        </div>

        {/* PROBLEM + SOLUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          {/* PROBLEM CARD */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="relative p-12 rounded-xl
            bg-slate-900/80 backdrop-blur
            border border-slate-700
            shadow-xl shadow-black/40
            group"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-slate-600/10 to-transparent" />

            {/* Accent bar */}
            <div className="absolute top-0 left-0 h-full w-1 bg-slate-500 rounded-l-xl" />

            <h3 className="text-2xl font-bold text-white mb-10 pl-5 relative z-10">
              The Problem
            </h3>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 text-slate-300 leading-relaxed pl-5 text-lg relative z-10"
            >
              {[
                "Attractive layouts with disoriented navigation.",
                "Layouts that irritate instead of guiding users.",
                "Brands that fail to stand out in saturated markets.",
                "Online stores suffering from cart abandonment.",
                "Content systems that slow teams down.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex gap-3"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* SOLUTION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="relative p-12 rounded-xl
            bg-gradient-to-br from-blue-600 to-indigo-600
            shadow-2xl shadow-blue-600/40
            overflow-hidden group"
          >
            {/* Animated glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-white/20 rounded-full blur-[160px]"
            />

            <h3 className="text-2xl font-bold mb-8 relative z-10">
              Capyngen’s Solution
            </h3>

            <p className="relative z-10 text-blue-50 leading-relaxed text-lg">
              Our design is revenue-oriented. Every interface is built using
              user psychology, conversion triggers, and scalable architecture —
              ensuring your product grows effortlessly with your business.
            </p>

            {/* CTA hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute bottom-6 right-6 text-sm text-white/70"
            >
              Built for growth →
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const points = [
  {
    title: "Strategy-First Approach",
    text: "We do not begin with design trends but with your business objectives, audience psychology and revenue needs.",
  },
  {
    title: "Performance Obsessed",
    text: "No design fails our 95-point UX inspection, which is reviewed by the client. Lighthouse scores: 95 and above ensured.",
  },
  {
    title: "Revenue-Focused",
    text: "We do not put together conversion paths, we put together screens. All CTA, all flows, all microcopies optimized.",
  },
  {
    title: "Developer-Ready",
    text: "Idyllic handoff using Figma components, specs, and style guides. No surprises of the lost in translation.",
  },
  {
    title: "Future-Proof Systems",
    text: "Scalable design systems that scale with you. Create pages, features or teams without redesign.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function WhyCapyngen() {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-black overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-600/15 rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 w-[460px] h-[460px] bg-slate-500/15 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why Growing Your Business with Trusted Capyngen?
          </h2>

          <p className="mt-4 text-lg text-blue-400 font-semibold">
            No Templates. No Guesswork. Just Results.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              alt="Strategy and design team working"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/40 to-transparent" />

            {/* Floating label */}
            <div className="absolute bottom-6 left-6 text-white text-base font-semibold">
              Strategy. Performance. Growth.
            </div>
          </motion.div>

          {/* TEXT CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {points.map((item, index) => (
              <motion.div
                key={index}
                variants={card}
                className="group relative p-7 rounded-2xl
                bg-slate-900/70 backdrop-blur
                border border-slate-800
                shadow-lg shadow-black/40
                hover:border-blue-500/60
                transition-all duration-300"
              >
                {/* LEFT GLOW STRIP */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2
                  h-[55%] w-[2px]
                  bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0
                  opacity-40 group-hover:opacity-100 transition"
                />

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

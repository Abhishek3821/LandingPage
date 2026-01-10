import { motion } from "framer-motion";

const points = [
  "The designs that scored 95 or higher on Lighthouse.",
  "User journeys with a conversion goal.",
  "Team expansion systems.",
  "Figma handoff that developers can use.",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ConversionCTA() {
  return (
    <section className="relative w-full py-28 bg-black overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      <div className="absolute -top-48 -left-48 w-[520px] h-[520px] bg-blue-600/20 rounded-full blur-[180px]" />
      <div className="absolute -bottom-48 -right-48 w-[520px] h-[520px] bg-slate-400/20 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Build Something That Converts?
          </h2>

          <p className="text-xl text-slate-300">
            Stop spending ad money on websites that do not work.
          </p>
        </motion.div>

        {/* ADVANTAGE LIST */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="max-w-3xl space-y-6"
        >
          <h3 className="text-blue-400 text-lg font-semibold mb-4">
            Get the Capyngen advantage:
          </h3>

          {points.map((text, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-start gap-4"
            >
              {/* Accent dot */}
              <div className="mt-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.8)]" />

              <p className="text-slate-200 text-lg leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c)",
        }}
      />

      {/* DARK BRAND OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-900/95" />

      {/* SOFT BRAND COLOR WASH (BLUE + GREY ONLY) */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-slate-400/15 to-blue-600/20"
      />

      {/* GLOW ORBS (BRAND SAFE) */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-600/25 rounded-full blur-[160px]" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-slate-400/25 rounded-full blur-[160px]" />

      {/* NOISE TEXTURE */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.035]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* LEFT CONTENT — TEXT UNCHANGED */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-9"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Transform Your Digital Presence with Capyngen – India's Leading
              Design Agency
            </h1>

            <p className="text-xl text-slate-300 max-w-xl">
              Ready to captivate your audience and convert visitors into
              customers?
            </p>

            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Capyngen makes jaw-dropping UX/UI, conversion-driven sites,
              memorable brands, high-functioning e-commerce sites, and flexible
              CMSes that generate actual business outcomes. Our design prowess
              brings to life ideas in the form of digital success stories in
              startups and enterprises alike.
            </p>

            {/* BRAND CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4
              bg-blue-600 hover:bg-blue-700
              text-white font-semibold rounded-xl
              shadow-lg shadow-blue-600/40
              transition"
            >
              Start Your Project Today → Free Consultation
            </motion.button>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative rounded-3xl p-8
            bg-slate-900/80 backdrop-blur-2xl
            border border-slate-700
            shadow-[0_0_80px_rgba(37,99,235,0.18)]"
          >
            {/* FORM EDGE GLOW */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-600/25 via-slate-400/20 to-blue-600/25 blur-xl -z-10" />

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg
                bg-slate-800 border border-slate-700
                text-white placeholder-slate-400
                focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg
                bg-slate-800 border border-slate-700
                text-white placeholder-slate-400
                focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg
                bg-slate-800 border border-slate-700
                text-white placeholder-slate-400
                focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <select className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Select Service</option>
                <option>UX / UI Design</option>
                <option>Website Design</option>
                <option>E-commerce Design</option>
                <option>Brand Identity</option>
              </select>

              <select className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Expected Budget</option>
                <option>₹25,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000+</option>
              </select>

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg
                bg-slate-800 border border-slate-700
                text-white placeholder-slate-400
                focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-xl font-semibold text-white
                bg-blue-600 hover:bg-blue-700
                shadow-lg shadow-blue-600/40
                transition"
              >
                Get a Quote
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

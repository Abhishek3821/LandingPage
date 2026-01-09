import { motion } from "framer-motion";
import { Mail, Clock, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-400/10 rounded-full blur-[100px] -ml-32 -mb-32" />

        <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 flex flex-col items-center text-center">
          {/* Heading — UNCHANGED */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight max-w-3xl"
          >
            Ready to Start?
          </motion.h2>

          {/* Text — UNCHANGED */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed"
          >
            Request a free consultation. We can do an audit of your existing
            model and map out your UI/UX Design change.
            <br />
            <br />
            Get in touch with Capyngen now- your touchpoint to a digital
            experience.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ delay: 0.2 }}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group"
          >
            Request Free Consultation
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-8 text-slate-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>hello@capyngen.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

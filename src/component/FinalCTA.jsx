import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles, Clock } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -ml-32 -mb-32" />

        <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 flex flex-col items-center text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight max-w-3xl"
          >
            Ready to move forward <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              with confidence?
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            Partner with Capyngen to transform your vision into a dependable,
            enterprise-grade digital solution. Let’s build something that lasts.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group">
              Contact Capyngen
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button className="w-full sm:w-auto px-10 py-5 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold text-lg transition-all border border-slate-700">
              View Our Work
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-slate-500 text-sm"
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

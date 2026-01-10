import { motion } from "framer-motion";
import {
  Mail,
  Clock,
  ArrowRight,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

/* ============================
   SOCIAL LINKS
============================ */
const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100086626928653",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/capyngen-private-limited-5ba173390",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/capyngen/",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://x.com/capyngen",
    label: "Twitter",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@Capyngen-pvt-ltd",
    label: "YouTube",
  },
];

export default function FinalCTA() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-400/10 rounded-full blur-[100px] -ml-32 -mb-32" />

        <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 flex flex-col items-center text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight max-w-3xl"
          >
            Ready to Start?
          </motion.h2>

          {/* Text */}
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

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-8 text-slate-400 text-sm"
          >
            {/* Website */}
            <a
              href="https://www.capyngen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Clock size={16} />
              <span>www.capyngen.com</span>
            </a>

            {/* Email */}
            <a
              href="mailto:sales@capyngen.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={16} />
              <span>sales@capyngen.com</span>
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10
                           flex items-center justify-center text-slate-300
                           hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40
                           transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

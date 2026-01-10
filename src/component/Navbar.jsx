import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import capyngenLogo from "../assets/Newlogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { label: "Home", href: "home" },

    { label: "Our Services", href: "services" },
    // UI/UX, Website Design, Branding, E-commerce, CMS

    { label: "Why Capyngen", href: "why-capyngen" },
    // Strategy-First, Performance Obsessed, Revenue-Focused

    { label: "Our Process", href: "process" },
    // Proven 5-Step Design Process

    { label: "Who It's For", href: "industries" },
    // SaaS, E-commerce, B2B, Content & Media

    { label: "Results", href: "results" },
    // Stats + testimonials

    { label: "Contact", href: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.04)]"
    >
      {/* Subtle brand wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-transparent to-blue-50/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex items-center"
        >
          <img src={capyngenLogo} alt="Capyngen" className="w-28 " />
        </motion.div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="relative"
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className="group text-sm font-medium text-slate-700 hover:text-blue-600 transition"
              >
                {item.label}

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </button>
            </motion.li>
          ))}

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection("contact")}
            className="ml-3 px-4 py-1.5 rounded-md font-semibold text-white text-sm
            bg-blue-600 hover:bg-blue-700
            shadow-md shadow-blue-600/30 transition"
          >
            Free Consultation
          </motion.button>
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-800"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <ul className="flex flex-col items-center py-5 space-y-5">
              {menuItems.map((item) => (
                <motion.li key={item.href} whileTap={{ scale: 0.96 }}>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollToSection(item.href), 250);
                    }}
                    className="text-base font-medium text-slate-700 hover:text-blue-600 transition"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}

              {/* MOBILE CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection("contact")}
                className="mt-1 px-5 py-2 rounded-lg font-semibold text-white
                bg-blue-600 hover:bg-blue-700
                shadow-md shadow-blue-600/30 transition"
              >
                Free Consultation
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

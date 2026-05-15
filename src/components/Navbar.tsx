import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/1lH8LD8OIzcbSJONdjPwn7pN8EAgw3PQj/view?usp=drive_link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on nav link click
  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center px-3 md:px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full max-w-5xl px-4 md:px-6 py-2.5 md:py-3 rounded-full border border-white/20 bg-black/80 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex justify-between items-center relative overflow-hidden transition-all duration-300 ${scrolled ? 'border-white/30 bg-black/90' : ''}`}
        >
          {/* Glossy Reflection Overlay */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/Subtract.svg"
              alt="Logo"
              className="h-6 md:h-9 w-auto"
            />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-display text-[10px] font-black uppercase tracking-[0.25em] text-white hover:text-neon-lime transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neon-lime text-charcoal px-5 py-2 rounded-full font-display font-bold uppercase text-[10px] tracking-widest shadow-[0_0_15px_rgba(191,255,0,0.3)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(191, 255, 0, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile: Resume + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neon-lime text-charcoal px-3 py-1.5 rounded-full font-display font-bold uppercase text-[9px] tracking-widest"
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>

            <motion.button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="w-8 h-8 flex items-center justify-center text-white rounded-full border border-white/20 hover:border-neon-lime/50 hover:text-neon-lime transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-[72px] left-3 right-3 z-40 md:hidden rounded-2xl border border-white/15 bg-black/95 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Top shine */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-lime/30 to-transparent" />

            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="px-4 py-3 rounded-xl font-display text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-neon-lime hover:bg-white/5 transition-all"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.06 }}
                className="mx-1 px-4 py-3 rounded-xl bg-neon-lime text-charcoal text-center font-display font-black uppercase text-xs tracking-widest hover:bg-white transition-colors"
              >
                View Resume ↗
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop close */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

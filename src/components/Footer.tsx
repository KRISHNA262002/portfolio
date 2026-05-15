import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer Anchored at bottom */}
      <footer className="text-white border-t border-white/10 relative z-20 pt-12 md:pt-16 pb-12 md:pb-16 px-4 sm:px-6 md:px-12 backdrop-blur-sm bg-black/20">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 w-full relative">
          
          {/* Left: Direct Contact */}
          <div className="flex flex-col gap-6 w-full md:w-1/3 order-2 md:order-1 items-center md:items-start">
            <div className="space-y-4">
              <a href="mailto:krishnavkhurad262@gmail.com" className="flex items-center gap-4 group w-fit">
                <Mail size={18} className="text-white/40 group-hover:text-neon-lime transition-colors" />
                <span className="text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">krishnavkhurad262@gmail.com</span>
              </a>
              <a href="tel:7773944214" className="flex items-center gap-4 group w-fit">
                <Phone size={18} className="text-white/40 group-hover:text-neon-lime transition-colors" />
                <span className="text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">7773944214</span>
              </a>
            </div>
          </div>

          {/* Right: Social Media */}
          <div className="flex flex-col gap-6 w-full md:w-1/3 order-3 md:order-3 items-center md:items-end">
            <div className="flex flex-col items-start md:items-end gap-4">
              <a href="https://www.linkedin.com/in/krishna-khurad/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group w-fit">
                <span className="text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">LinkedIn</span>
                <ArrowUpRight size={16} className="text-white/40 group-hover:text-neon-lime group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </a>
              <a href="https://www.behance.net/krishnakhurad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group w-fit">
                <span className="text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">Behance</span>
                <ArrowUpRight size={16} className="text-white/40 group-hover:text-neon-lime group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
          
          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="md:absolute -right-2 top-1/2 md:-translate-y-1/2 mt-12 md:mt-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-neon-lime hover:border-neon-lime transition-colors group bg-white/5 mx-auto md:mx-0 order-4 md:hidden lg:flex"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </footer>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  details: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Perfect Park",
    category: "UI/UX • App Design",
    details: "As cities expand, finding a parking spot often becomes a daily hassle. This mobile app case study explores intuitive solutions to transform that quiet struggle into a smooth, seamless experience from start to finish.",
    image: `${import.meta.env.BASE_URL}p1.jpg`,
    link: "https://www.behance.net/gallery/223491979/Perfect-Park-(UIUX-case-study-)"
  },
  {
    id: 2,
    title: "Medibuddy Homescreen Redesign",
    category: "UI/UX • App Redesign • Responsive Design",
    details: "A comprehensive redesign of Medibuddy’s In-clinic Doctor Consultation landing screen. This case study focuses on optimizing the journey for new corporate users on Android, adapting the interface for returning users, and scaling the experience seamlessly to desktop.",
    image: `${import.meta.env.BASE_URL}p2.png`,
    link: "https://www.behance.net/gallery/224807673/Redesigning-Medibuddys-Homepage"
  },
  {
    id: 3,
    title: "FinSmart",
    category: "UI/UX • FinTech",
    details: "Empowering users to take control of their finances, this app simplifies expense tracking and budgeting to promote financial literacy. The platform offers personalized insights and real-time monitoring within a secure, intuitive interface to help users achieve your financial goals.",
    image: `${import.meta.env.BASE_URL}p3.png`,
    link: "https://www.behance.net/gallery/211237039/Finsmart-Case-Study"
  },
  {
    id: 4,
    title: "Re-Root Regenerative Toothbrush",
    category: "Sustainable Design • Product Design",
    details: "Emerging from an intensive workshop on regenerative principles, the Reroot-Brush emphasizes ecological responsibility, material awareness, and circular thinking. This project explores sustainable materials to reconnect everyday design with natural systems.",
    image: `${import.meta.env.BASE_URL}p4.jpg`,
    link: "https://www.behance.net/gallery/248228377/Design-for-a-Living-Biosphere"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div 
      className="relative h-[400px] md:h-[500px] w-full perspective-2000 group cursor-crosshair"
    >
      <div
        className="w-full h-full relative transition-all duration-700 preserve-3d group-hover:[transform:rotateY(180deg)_scale(1.02)] z-0 group-hover:z-30"
      >
        {/* Front Face: High-Tech Visual */}
        <div 
          className="absolute inset-0 backface-hidden rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-black/10 bg-charcoal shadow-2xl z-[2] group-hover:pointer-events-none"
        >
          {/* Animated Scanlines */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
          
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
          />
          
          {/* Subtle global darkening and bottom-heavy gradient */}
          <div className="absolute inset-0 bg-black/10 z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />
          
          {/* Corner Decals */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-neon-lime/30 z-20" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-neon-lime/30 z-20" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse" />
              <span className="font-display text-neon-lime text-[10px] uppercase tracking-[0.4em] font-black">
                {project.category}
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase italic leading-none group-hover:translate-x-2 transition-transform duration-500">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Back Face: Technical Intel */}
        <div 
          className="absolute inset-0 backface-hidden rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 bg-charcoal flex flex-col justify-between border-2 border-neon-lime/20 shadow-[0_0_80px_-20px_rgba(191,255,0,0.1)] [transform:rotateY(180deg)] z-0 pointer-events-none group-hover:pointer-events-auto"
        >
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div />
              <span className="text-[9px] font-mono text-white/20">#{project.id.toString().padStart(4, '0')}</span>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold text-white uppercase italic tracking-tighter mb-4 leading-tight">{project.title}</h4>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light mb-6 font-display max-w-xl line-clamp-4 md:line-clamp-6">
              {project.details}
            </p>
          </div>

          <div className="mt-auto">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative w-full h-12 md:h-16 bg-neon-lime flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/20 transition-all hover:scale-[0.98] active:scale-95 pointer-events-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 font-display text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-charcoal">
                View Project
              </span>
              <ArrowUpRight size={18} className="relative z-10 text-charcoal group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="pt-32 md:pt-48 pb-16 px-5 sm:px-8 md:px-24 relative overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="font-display text-neon-lime uppercase tracking-[0.4em] text-xs mb-6 block font-black">
              Field Reports
            </span>
            <h2 className="text-5xl md:text-[7rem] font-bold tracking-tighter leading-[0.85] uppercase italic mt-4">
              FEATURED<br /><span className="text-neon-lime">PROJECTS.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-xl leading-relaxed font-light border-l-2 border-neon-lime/20 pl-8 mb-2">
            A comprehensive terminal of digital strikes, where raw technical agility meets pixel-perfect execution.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 flex justify-center relative z-20">
          <motion.a 
            href="https://www.behance.net/krishnakhurad"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group/btn relative w-72 md:w-96 h-14 md:h-16 bg-neon-lime flex items-center justify-center gap-4 overflow-hidden rounded-xl border border-white/20 transition-all hover:scale-[0.98] active:scale-95 shadow-[0_0_30px_rgba(191,255,0,0.15)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            <img src={`${import.meta.env.BASE_URL}Software/Behance.png`} alt="Behance" className="w-5 h-5 relative z-10 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="relative z-10 font-display text-xs md:text-sm font-black uppercase tracking-[0.2em] text-charcoal">
              Explore more work
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

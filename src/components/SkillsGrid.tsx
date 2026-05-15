import React from 'react';
import { motion } from 'motion/react';
import MagicBento from './MagicBento';

// ─── Types & Data ──────────────────────────────────────────────────────────────

const skillBlocks = [
  {
    title: 'Design Methodologies',
    items: [
      'Interaction Design', 'User Research', 'Wireframing', 'Prototyping', 
      'User Flows', 'Usability Testing', 'Design Systems', 
      'Information Architecture', 'Branding', 'Visual Design'
    ]
  },
  {
    title: 'Software & Tools',
    items: [] // Rendered using softwareIcons below
  },
  {
    title: 'Creative & Professional Skills',
    items: [
      'Visual Communication', 'Typography', 'Problem-solving', 
      'Cross-functional Collaboration', 'Storytelling', 'Discipline', 'Adaptability'
    ]
  }
];

const softwareIcons = [
  { name: 'Adobe Illustrator', src: `${import.meta.env.BASE_URL}Software/Adobe Illustrator.png` },
  { name: 'Adobe Photoshop', src: `${import.meta.env.BASE_URL}Software/Adobe Photshop.png` },
  { name: 'Adobe XD', src: `${import.meta.env.BASE_URL}Software/Adobe XD.png` },
  { name: 'Adobe', src: `${import.meta.env.BASE_URL}Software/Adobe.png` },
  { name: 'Figma', src: `${import.meta.env.BASE_URL}Software/Figma.png` },
  { name: 'Framer', src: `${import.meta.env.BASE_URL}Software/Framer.png` },
  { name: 'GitHub', src: `${import.meta.env.BASE_URL}Software/GitHub.png` },
  { name: 'Miro', src: `${import.meta.env.BASE_URL}Software/Miro.png` },
  { name: 'Notion', src: `${import.meta.env.BASE_URL}Software/Notion.png` },
  { name: 'Orange', src: `${import.meta.env.BASE_URL}Software/Orange.png` },
  { name: 'Power BI', src: `${import.meta.env.BASE_URL}Software/Power Bi.png` },
];



// ─── Sub-Components removed — now using MagicBento ───────────────────────────

// ─── Main Section ──────────────────────────────────────────────────────────────

export default function SkillsGrid() {
  return (
    <section
      id="expertise"
      className="relative w-full bg-black text-white overflow-hidden py-20 md:py-40 px-4 sm:px-6 md:px-12"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}bgs3.jpg`}
          alt="Technical Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-black/40 to-[#050505]/90" />
      </div>

      {/* Carbon fibre texture */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none z-[1]"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section Header ──────────────────────────────── */}
        <header className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-neon-lime mb-6"
          >
            <div className="w-12 h-px bg-neon-lime" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black italic">Capabilities</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter leading-[0.85] uppercase italic mt-4"
            >
              MY SKILL<br />SETS.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="max-w-sm text-white/40 text-sm leading-relaxed font-display
                border-l-2 border-white/10 pl-6 mb-1"
            >
              A comprehensive suite of technical and creative abilities honed to deliver
              high-performance product artifacts.
            </motion.p>
          </div>
        </header>

        {/* ── Skills Blocks ────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillBlocks.map((block, blockIndex) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: blockIndex * 0.15 }}
              className="bg-black/50 border border-white/10 backdrop-blur-lg rounded-2xl p-6 h-full
                hover:border-neon-lime/20 hover:shadow-[0_20px_48px_-16px_rgba(191,255,0,0.07)]
                transition-all duration-400"
            >
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-neon-lime mb-4 font-display">
                {block.title}
              </h3>
                {block.title === 'Software & Tools' ? (
                  <div className="flex flex-wrap gap-4 justify-evenly">
                    {softwareIcons.map((icon, i) => (
                      <motion.div 
                        key={i} 
                        className="w-20 h-20 flex items-center justify-center cursor-pointer"
                        title={icon.name}
                        whileHover={{ scale: 1.2, rotateY: 360 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <img src={icon.src} alt={icon.name} className="w-full h-full object-contain" />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {block.items.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-white/[0.04] rounded-lg text-xs text-white/70 border border-white/5 hover:bg-white/[0.08] hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
            </motion.div>
          ))}
        </div>

        {/* ── Services — MagicBento ────────────────────────── */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="text-3xl text-neon-lime font-hand">
              What I can help with
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </motion.div>

          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={320}
            particleCount={10}
            glowColor="191, 255, 0"
          />
        </div>
      </div>
    </section>
  );
}

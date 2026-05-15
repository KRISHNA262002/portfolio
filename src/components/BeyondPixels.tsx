import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const ALL_IMAGES = [
  "BePx/Frame 376.png",
  "BePx/Frame 377.png",
  "BePx/Frame 378.png",
  "BePx/Frame 379.png",
  "BePx/Frame 380.png",
  "BePx/Frame 381.png",
  "BePx/Frame 382.png",
  "BePx/Frame 383.png",
  "BePx/Frame 384.png",
  "BePx/Frame 385.png",
  "BePx/Frame 386.png",
  "BePx/Frame 387.png",
  "BePx/Frame 388.png",
  "BePx/Frame 389.png",
  "BePx/Frame 390.png",
  "BePx/Frame 391.png",
  "BePx/Frame 392.png",
  "BePx/Frame 393.png",
  "BePx/Frame 394.png",
  "BePx/Frame 395.png",
  "BePx/Frame 396.png",
  "BePx/Frame 397.png",
  "BePx/Frame 398.png",
  "BePx/Frame 399.png",
  "BePx/Frame 400.png",
  "BePx/Frame 401.png",
].map(path => `${import.meta.env.BASE_URL}${path}`);

// Split 26 images across 3 rows
const row1 = ALL_IMAGES.slice(0, 9);
const row2 = ALL_IMAGES.slice(9, 18);
const row3 = ALL_IMAGES.slice(18, 26);

const ScrollingRow = React.memo(({
  images,
  reverse = false,
  duration = 40,
  isInView = true,
}: {
  images: string[];
  reverse?: boolean;
  duration?: number;
  isInView?: boolean;
}) => {
  // Use 2 copies instead of 3 to reduce DOM nodes and memory.
  // 8 images at 320px = 2560px, which is plenty for 2x on most screens.
  const items = React.useMemo(() => [...images, ...images], [images]);
  
  return (
    <div className="flex overflow-hidden w-full select-none" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div
        className="flex gap-4 py-2 flex-shrink-0 will-change-transform"
        style={{
          animation: `${reverse ? 'marquee-reverse-optimized' : 'marquee-optimized'} ${duration}s linear infinite`,
          animationPlayState: isInView ? 'running' : 'paused',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        {items.map((src, i) => (
          <div
            key={i}
            className="h-[140px] sm:h-[180px] md:h-[220px] w-[170px] sm:w-[210px] md:w-[260px] flex-shrink-0 overflow-hidden rounded-3xl bg-white/5 border border-white/10"
            style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-transform duration-500 pointer-events-none"
              style={{ backfaceVisibility: 'hidden' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default function BeyondPixels() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "400px" });

  return (
    <section
      ref={containerRef}
      id="beyond"
      className="pt-20 md:pt-48 pb-20 relative overflow-hidden bg-[#050505]"
    >
      {/* Background Decorative Type */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03] select-none">
        <span className="text-[15rem] md:text-[30rem] font-black italic tracking-tighter leading-none text-white">
          LIFE
        </span>
      </div>

      <div className="relative z-10">
        <div className="max-container px-4 md:px-6 mb-16 md:mb-32">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 text-neon-lime"
              >
                <div className="w-12 h-[1px] bg-neon-lime" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black italic">
                  Personal Chronicles
                </span>
              </motion.div>
              <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] uppercase italic text-white text-left">
                BEYOND
                <br />
                LOGIC.
              </h2>
            </div>

            <p className="max-w-md text-white/50 text-xs md:text-sm leading-relaxed font-mono uppercase tracking-wider text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-neon-lime/30 pl-4 md:pl-0 md:pr-4">
              When I'm not pushing pixels or refactoring components, you can
              find me exploring the raw textures of life. Here's a glimpse into
              my world outside the terminal.
            </p>
          </header>
        </div>

        {/* Moving Wall */}
        <div className="space-y-6">
          <ScrollingRow images={row1} duration={60} isInView={isInView} />
          <ScrollingRow images={row2} reverse duration={70} isInView={isInView} />
          <ScrollingRow images={row3} duration={80} isInView={isInView} />
        </div>

        {/* Closing Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mt-20 md:mt-40 text-center"
        >
          <span className="text-white/10 text-[10px] uppercase tracking-[1.5em] font-black italic">
            Curiosity is the primary engine.
          </span>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
          backgroundSize: '60px 60px',
        }}
      />
    </section>
  );
}



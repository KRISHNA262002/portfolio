import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const marqueeItems = [
    'Wire-framing', 'UX Writing', 'UI Audit', 'Product Design', 'Branding', 
    'Interaction Design', 'Usability Testing', 'User Research'
  ];

  const [isHindi, setIsHindi] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHindi(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] bg-[#050505] overflow-x-hidden flex flex-col items-center pt-[72px] md:pt-[88px]">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      {/* 1. Deep Background - Tunnel/Grid Perspective */}
      <div className="absolute inset-0 z-0 select-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="grid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BFFF00" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#BFFF00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.g
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            {[...Array(20)].map((_, i) => (
              <rect
                key={i}
                x={500 - (i * 30)}
                y={500 - (i * 30)}
                width={i * 60}
                height={i * 60}
                fill="none"
                stroke="url(#grid-grad)"
                strokeWidth="0.5"
                className="origin-center"
              />
            ))}
          </motion.g>
        </svg>
      </div>

      {/* 2. Middle Layer - Large Background Text & Greeting */}
      <div className="absolute inset-x-0 top-[32%] md:top-[38%] flex items-center justify-center z-10 pointer-events-none px-4">
        <div className="flex flex-col items-start">
          {/* Greeting Overlay - Fixed height to prevent layout shift */}
          <div className="h-[40px] md:h-[60px] flex items-end mb-4 md:mb-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-white font-display text-base md:text-2xl tracking-tight font-medium flex items-center gap-2 md:gap-4 h-full">
                <span className="shrink-0">Hey Folks I'am</span>
                <div className="relative w-[130px] md:w-[220px] h-full flex items-center overflow-visible">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isHindi ? 'hindi' : 'english'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute left-0 whitespace-nowrap font-bold ${isHindi ? 'font-hindi text-neon-lime text-2xl md:text-3xl' : 'font-hand text-neon-lime text-3xl md:text-4xl'}`}
                    >
                      {isHindi ? 'कृष्णा' : 'KRISHNA'}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h2>
            </motion.div>
          </div>

          {/* Headline Container */}
          <div className="flex flex-col items-start">
            <motion.h1 
              className="text-[clamp(3.5rem,12vw,8rem)] font-bold leading-none select-none flex flex-col md:flex-row items-baseline justify-start w-full tracking-tighter md:gap-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-neon-lime scale-y-125 inline-block">PRODUCT</span>
              <span className="text-transparent scale-y-125 inline-block md:ml-12" style={{ WebkitTextStroke: '1.5px #BFFF00' }}>DESIGNER</span>
            </motion.h1>
          </div>
        </div>
      </div>

      {/* 3. Foreground Layer - Profile Image */}
      <div className="relative z-20 flex flex-col items-center w-full">
        <motion.div 
          className="relative w-[340px] h-[340px] md:w-[700px] md:h-[700px] -mt-16 md:-mt-24"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}Firefly.png`} 
            alt="Krishna Khurad"
            className="w-full h-full object-contain brightness-105 contrast-125 mask-image-linear"
          />
        </motion.div>
      </div>

      {/* 4. Bottom Layer - Ticker/Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none overflow-hidden select-none translate-y-[80%]">
        <img 
          src={`${import.meta.env.BASE_URL}mid1-2.png`} 
          alt="Splitter" 
          className="w-full h-auto scale-[1.1] origin-center"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-white py-4 md:py-6 z-30 overflow-hidden border-t-4 border-neon-lime">
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex gap-12 px-12"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="text-charcoal font-display font-black text-2xl md:text-3xl uppercase tracking-tighter italic">
                  {item}
                </span>
                <span className="text-neon-lime text-3xl font-black">✱</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}

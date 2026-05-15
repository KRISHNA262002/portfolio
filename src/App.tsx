/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import SkillsGrid from './components/SkillsGrid';
import BeyondPixels from './components/BeyondPixels';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Loader from './components/Loader';
import SplashCursor from './components/SplashCursor'
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative selection:bg-neon-lime selection:text-charcoal bg-[#050505]">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="content">
            <SmoothScroll />

            <Navbar />
            
            <Hero />
            <Projects />
            
            <div className="w-full h-32 md:h-64 relative z-30 -mb-16 md:-mb-32 pointer-events-none">
              <img 
                src="/mid1-2.png" 
                alt="Technical Schematic Divider" 
                className="w-full h-full object-cover mix-blend-screen opacity-60"
              />
            </div>

            <About />
            
            <div className="w-full h-32 md:h-64 relative z-30 -mt-16 md:-mt-32 -mb-16 md:-mb-32 rotate-180 pointer-events-none">
              <img 
                src="/mid1-2.png" 
                alt="Technical Schematic Divider" 
                className="w-full h-full object-cover mix-blend-screen opacity-60"
              />
            </div>

            <SkillsGrid />
            
            <div className="w-full h-32 md:h-64 relative z-30 -mb-16 md:-mb-32 pointer-events-none">
              <img 
                src="/mid1-2.png" 
                alt="Technical Schematic Divider" 
                className="w-full h-full object-cover mix-blend-screen opacity-60"
              />
            </div>

            <BeyondPixels />
            
            <div className="w-full h-32 md:h-64 relative z-40 -mt-16 md:-mt-32 -mb-16 md:-mb-32 rotate-180 pointer-events-none">
              <img 
                src="/mid1-2.png" 
                alt="Technical Schematic Divider" 
                className="w-full h-full object-cover mix-blend-screen opacity-90"
              />
            </div>

            <div className="relative w-full bg-[#050505] z-30">
              <div className="absolute inset-0 bg-[url('/lbg.jpg')] bg-cover bg-center opacity-30 pointer-events-none" />
              <div className="relative z-10">
                <Contact />
                <Footer />
              </div>
            </div>

            <SplashCursor
              DENSITY_DISSIPATION={3.5}
              VELOCITY_DISSIPATION={2}
              PRESSURE={0.1}
              CURL={3}
              SPLAT_RADIUS={0.2}
              SPLAT_FORCE={6000}
              COLOR_UPDATE_SPEED={10}
              SHADING
              RAINBOW_MODE={false}
              COLOR="#D0EF3A"
            />
            <CustomCursor />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

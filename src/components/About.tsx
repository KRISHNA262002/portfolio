import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="pt-24 md:pt-40 pb-24 md:pb-32 px-5 sm:px-8 md:px-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}abg.jpg`} 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Carbon layer overlay */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none z-[1]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-lime/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 z-[1]" />
      
      <div className="max-w-7xl mx-auto relative z-10 pt-12 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
          
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="font-display text-xs font-black uppercase tracking-[0.5em] text-neon-lime mb-6 block">
              Identity Protocol // Ver 2.0
            </span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-none italic uppercase">
              ABOUT <br />
              <span className="text-neon-lime">KRISHNA.</span>
            </h2>
            
            <div className="space-y-6 text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-snug">
              <p>
                M.Des Student at <span className="font-hand text-neon-lime text-3xl">NIFT Bangalore</span>
              </p>
              <p>
                Bridging the gap between <span className="font-hand text-neon-lime text-3xl">analytical logic</span> and intuitive, <span className="font-hand text-neon-lime text-3xl">human-centered design</span>. I focus on building robust digital architectures that balance strategic functionality with seamless user experiences.
              </p>
              <p>
                Currently dedicated to crafting <span className="font-hand text-neon-lime text-3xl">scalable products</span> through <span className="font-hand text-neon-lime text-3xl">geometric rigor</span> and systematic problem-solving.
              </p>
            </div>

            {/* Resume CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <a 
                href="https://drive.google.com/file/d/1lH8LD8OIzcbSJONdjPwn7pN8EAgw3PQj/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-neon-lime text-charcoal px-6 md:px-8 py-3 md:py-4 font-black uppercase tracking-[0.2em] text-sm italic hover:bg-white transition-colors group"
              >
                <span>Download Resume</span>
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <div className="space-y-6">
                <h4 className="text-xs uppercase tracking-[0.4em] text-neon-lime font-black">Experience</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-display font-bold text-lg leading-tight uppercase italic">Aeronovate Solutions</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Product Designer • 2023-Pres.</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg leading-tight uppercase italic">DevKalp Technology</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest mt-1">UX Designer • 2022-2023</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xs uppercase tracking-[0.4em] text-neon-lime font-black">Education</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-display font-bold text-lg leading-tight uppercase italic">M.Des UX Design</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest mt-1">NIFT Bangalore • 2022-2024</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg leading-tight uppercase italic">B.E. Computer Eng.</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest mt-1">SPPU Pune • 2017-2021</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Image and 3D Cubes */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[1000px] flex items-center justify-center">
            {/* Main Portrait Placeholder */}
            <motion.div 
              className="absolute w-[280px] h-[380px] sm:w-[350px] sm:h-[500px] md:w-[640px] md:h-[960px] bg-transparent z-10 grayscale-0 hover:grayscale transition-all duration-700"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img 
                src={`${import.meta.env.BASE_URL}myy.png`} 
                alt="Krishna Khurad" 
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

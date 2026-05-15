import { motion } from 'motion/react';
import { Award, Trophy, Rocket } from 'lucide-react';

export default function Achievements() {
  const items = [
    {
      icon: <Award className="text-neon-lime" />,
      text: "Successfully transitioned from Software Engineering to Product Design"
    },
    {
      icon: <Trophy className="text-electric-blue" />,
      text: "Represented at National level Sports events (Competitive Resilience)"
    },
    {
      icon: <Rocket className="text-neon-lime" />,
      text: "Optimized aviation data viz workflows by 40%"
    },
    {
      icon: <Award className="text-electric-blue" />,
      text: "Certified Interaction Design Professional"
    }
  ];

  return (
    <section className="py-24 bg-[#050505] overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      <div className="flex whitespace-nowrap relative z-10">
        <motion.div 
          className="flex gap-12"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items, ...items].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 text-white/70">
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full bg-white/5">
                {item.icon}
              </div>
              <span className="font-display uppercase tracking-[0.2em] text-sm font-medium">
                {item.text}
              </span>
              <div className="w-2 h-2 bg-white/20 rounded-full mx-4" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

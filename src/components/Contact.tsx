import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 text-white relative overflow-hidden z-40">
      {/* Decorative Grid Layer */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 text-neon-lime mb-6">
            <div className="w-12 h-[1px] bg-neon-lime" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black italic">Initiate Protocol</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight uppercase italic mb-6">
            LET'S BUILD <br />
            <span className="text-neon-lime">SOMETHING.</span>
          </h2>
          <p className="text-white/40 max-w-xl text-sm md:text-base leading-relaxed font-display border-l-2 border-white/10 pl-6">
            Ready to merge technical feasibility with deep design thinking? Drop a message to start the conversation.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24">
          
          {/* Left Column: Direct Info */}
          <motion.div 
            className="flex flex-col gap-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neon-lime group-hover:scale-110 group-hover:border-neon-lime/50 transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(191,255,0,0)] group-hover:shadow-[0_0_15px_rgba(191,255,0,0.1)]">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] font-display uppercase tracking-[0.2em] text-white/40 block mb-2 font-black">Email</span>
                  <a href="mailto:krishnavkhurad262@gmail.com" className="text-lg md:text-xl font-medium hover:text-neon-lime transition-colors">krishnavkhurad262@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neon-lime group-hover:scale-110 group-hover:border-neon-lime/50 transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(191,255,0,0)] group-hover:shadow-[0_0_15px_rgba(191,255,0,0.1)]">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] font-display uppercase tracking-[0.2em] text-white/40 block mb-2 font-black">Phone</span>
                  <a href="tel:7773944214" className="text-lg md:text-xl font-medium hover:text-neon-lime transition-colors">7773944214</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neon-lime group-hover:scale-110 group-hover:border-neon-lime/50 transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(191,255,0,0)] group-hover:shadow-[0_0_15px_rgba(191,255,0,0.1)]">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] font-display uppercase tracking-[0.2em] text-white/40 block mb-2 font-black">Location</span>
                  <p className="text-lg md:text-xl font-medium">Pune / Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-sm text-white/60 leading-relaxed font-display relative z-10 italic">
                "Great products are built at the intersection of aesthetic precision and engineering rigor. Let's engineer the future together."
              </p>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.form 
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const subject = formData.get('subject');
              const message = formData.get('message');
              
              const mailtoLink = `mailto:krishnavkhurad262@gmail.com?subject=${encodeURIComponent(subject as string || 'Project Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
              window.location.href = mailtoLink;
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-2 group">
                <label htmlFor="name" className="text-[10px] font-display uppercase tracking-[0.2em] text-white/40 font-black group-focus-within:text-neon-lime transition-colors">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/20 pb-3 pt-2 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-lime transition-colors font-display"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 group">
                <label htmlFor="email" className="text-[10px] font-display uppercase tracking-[0.2em] text-white/40 font-black group-focus-within:text-neon-lime transition-colors">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/20 pb-3 pt-2 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-lime transition-colors font-display"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-2 group">
              <label htmlFor="subject" className="text-[10px] font-display uppercase tracking-[0.2em] text-white/40 font-black group-focus-within:text-neon-lime transition-colors">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                placeholder="Project Inquiry"
                className="w-full bg-transparent border-b border-white/20 pb-3 pt-2 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-lime transition-colors font-display"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2 group">
              <label htmlFor="message" className="text-[10px] font-display uppercase tracking-[0.2em] text-white/40 font-black group-focus-within:text-neon-lime transition-colors">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-b border-white/20 pb-3 pt-2 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-lime transition-colors font-display resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              className="mt-6 bg-neon-lime text-charcoal px-8 py-4 font-display font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300 w-fit shadow-[0_0_20px_rgba(191,255,0,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

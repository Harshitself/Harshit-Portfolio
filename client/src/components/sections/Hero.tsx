import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@assets/aurashot-37w12wzmx_1768390772534.png";
import bgImage from "@assets/generated_images/dark_abstract_digital_network_mesh_background.png";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-6"
          >
            Available for Hire
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient-x">
              {portfolioData.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white/60 mb-8 font-light">
            {portfolioData.title} & Tech Enthusiast
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            {portfolioData.summary}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-primary/25 rounded-full px-8">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex gap-4 items-center ml-4">
              <a href={portfolioData.social.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 border border-white/10">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={portfolioData.social.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 border border-white/10">
                <Github className="h-5 w-5" />
              </a>
              <a href={`mailto:${portfolioData.email}`} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 border border-white/10">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-[100px] rounded-full" />
            
            {/* Main Image with "Diluted" effect */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 glass-card">
               <img 
                 src={profileImage} 
                 alt={portfolioData.name}
                 className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
               />
               
               {/* Overlay Gradient to blend bottom */}
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </div>

            {/* Floating Tech Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-4 glass-card rounded-xl border border-secondary/30 hidden md:block"
            >
              <div className="text-secondary font-display font-bold text-xl">2+ Years</div>
              <div className="text-xs text-white/60">Experience</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 p-4 glass-card rounded-xl border border-primary/30 hidden md:block"
            >
              <div className="text-primary font-display font-bold text-xl">Tech Support</div>
              <div className="text-xs text-white/60">Problem Solver</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

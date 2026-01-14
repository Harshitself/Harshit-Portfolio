import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { portfolioData } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        
        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-white/10 bg-black/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold mb-12">Get In Touch</h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-16">
              <a href={`mailto:${portfolioData.email}`} className="flex flex-col items-center gap-4 group">
                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <Mail className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <span className="text-white/80 group-hover:text-white">{portfolioData.email}</span>
              </a>
              
              <a href={`tel:${portfolioData.phone}`} className="flex flex-col items-center gap-4 group">
                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <Phone className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <span className="text-white/80 group-hover:text-white">{portfolioData.phone}</span>
              </a>
              
              <div className="flex flex-col items-center gap-4 group">
                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <MapPin className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <span className="text-white/80 group-hover:text-white">{portfolioData.location}</span>
              </div>
            </div>
            
            <p className="text-white/40 text-sm">
              © 2026 {portfolioData.name}. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

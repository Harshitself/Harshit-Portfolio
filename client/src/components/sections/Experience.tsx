import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
          {portfolioData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-primary border border-primary shadow-[0_0_10px_theme('colors.primary.DEFAULT')]" />

              <Card className="bg-card/40 border-white/5 backdrop-blur-sm hover:bg-card/60 transition-colors duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <CardTitle className="text-xl md:text-2xl text-white font-bold font-display">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      {job.dates}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

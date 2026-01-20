import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "WebAAC Solutions",
      position: "Web Development Intern",
      duration: "2024",
      description: [
        "Developed and maintained web applications using modern technologies",
        "Collaborated with the team on full-stack development projects",
        "Implemented responsive UI designs and API integrations",
        "Gained hands-on experience with React and Node.js",
      ],
    },
    {
      company: "RAS Software Solutions",
      position: "Web Development Intern",
      duration: "2024",
      description: [
        "Built travel and event booking websites with dynamic user interfaces",
        "Developed booking management features with calendar integration",
        "Created responsive layouts optimized for all device sizes",
        "Worked with modern frontend technologies and REST APIs",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">04. Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Where I've Worked</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow z-10" />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                <div className="p-6 rounded-xl glass hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-mono text-sm">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

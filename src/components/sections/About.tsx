import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Target, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "2025 Graduate",
      description: "B.E. Electronics & Communication Engineering",
    },
    {
      icon: Code2,
      title: "Full Stack Developer",
      description: "Building end-to-end web applications",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about innovative solutions",
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Adapting to new technologies rapidly",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">01. About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get to know me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="text-foreground font-semibold">Praveen Kumar S</span>, a passionate software developer with a strong foundation in full-stack web development. I recently graduated with a B.E. in Electronics and Communication Engineering in 2025.
              </p>
              <p className="text-lg leading-relaxed">
                My journey into programming started with curiosity about how applications work, and it has evolved into a deep passion for creating elegant, efficient solutions to real-world problems.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in building responsive web applications using modern technologies like React JS, Spring Boot, and Django. I'm constantly learning and staying updated with the latest industry trends to deliver cutting-edge solutions.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge my skills and creativity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl glass hover:border-primary/50 transition-all duration-300 group"
              >
                <item.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

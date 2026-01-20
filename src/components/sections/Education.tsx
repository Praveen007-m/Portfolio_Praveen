import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Award } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Background</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">
                Bachelor of Engineering
              </h3>
              <p className="text-xl text-primary mb-3">
                Electronics and Communication Engineering
              </p>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Class of 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-semibold mb-3">Key Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures",
                "Algorithms",
                "Object-Oriented Programming",
                "Database Management",
                "Web Development",
                "Machine Learning",
              ].map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-sm font-mono text-muted-foreground bg-muted rounded-full"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Hotel POS System",
      description:
        "A comprehensive Point of Sale system for hotels featuring billing management, GST calculation, role-based access control, and automated invoice PDF generation. Built with a focus on efficiency and user experience.",
      technologies: ["React", "Node.js", "SQLite"],
      github: "https://github.com/Praveen007-m/Hotel-POS",
      demo: "#",
      featured: true,
    },
    {
      title: "Earthquake Prediction System",
      description:
        "An ML-based prediction system that analyzes seismic data to forecast earthquakes. Features interactive maps for visualization and real-time data processing capabilities.",
      technologies: ["Python", "Machine Learning", "Django", "Maps API"],
      github: "https://github.com/Praveen007-m/EarthQuake-Prediction",
      demo: "#",
      featured: true,
    },
    {
      title: "Gym Management System",
      description:
        "A comprehensive gym management solution for member registration, subscription tracking, attendance management, and payment processing. Features an intuitive dashboard for gym owners.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/Praveen007-m/Gym-Management-SGA-Website-",
      demo: "#",
      featured: true,
    },
    {
      title: "FarmOS",
      description:
        "A web-based farm management platform deployed on Netlify that enables agricultural planning, crop tracking, and asset management. Built as a custom deployment tailored for automated farm data handling and operational efficiency.",
      technologies: ["React", "Netlify", "Farm Management"],
      github: "https://github.com/Praveen007-m/FarmOS", // replace with your repo
      demo: "https://farm-os.netlify.app",
      featured: false,
    },
    {
      title: "GoTravels",
      description:
        "A travel booking web application that allows users to explore destinations, view packages, and make travel reservations. Designed with a responsive UI and focused on smooth user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Praveen007-m/GoTravels",
      demo: "#",
      featured: false,
    },
    {
      title: "DivineFiesta",
      description:
        "A frontend event booking website designed for browsing events, viewing details, and booking event slots. Built using HTML, CSS, and JavaScript with a strong focus on responsive design, clean UI, and smooth user interactions.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Praveen007-m/DivineFiesta",
      demo: "#",
      featured: false,
    },
    

  ];

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Things I've Built</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {projects.filter((p) => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6 md:order-2" : ""
                }`}
              >
                <div className="p-6 rounded-xl glass hover:border-primary/50 transition-all duration-300 group h-full">
                  <span className="text-primary font-mono text-sm">Featured Project</span>
                  <h3 className="text-xl md:text-2xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {/* <a
                      href={project.demo}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.filter((p) => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl glass hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {/* <a
                      href={project.demo}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a> */}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { SplineScene } from "@/components/ui/spline-scene";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "http://github.com/ashmitkmishra",
  },
  {
    name: "LeetCode",
    icon: Code2,
    href: "https://leetcode.com/ashmit0702",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/ashmit-mishra",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ashmitkmishra@gmail.com",
  },
];

const skills = [
  {
    category: "Frontend",
    color: "from-cyan-500 to-blue-500",
    skills: [
      "Javascript", "React", "TypeScript", "Next.js",
      "TailwindCSS", "Vite"
    ]
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      "Node.js", "Express.js", "Python/Flask",
      "PostgreSQL", "Supabase", "RESTful APIs",
      "Async API Integration", "Postman"
    ]
  },
  {
    category: "ML/AI",
    color: "from-purple-500 to-pink-500",
    skills: [
      "TensorFlow", "Keras", "PyTorch", "OpenCV",
      "ResNet", "Scikit-Learn",
      "Retrieval-rAugmentation Generation (RAG)"
    ]
  },
  {
    category: "iOS / 3D Vision",
    color: "from-blue-500 to-indigo-500",
    skills: [
      "Swift", "Xcode", "ARKit",
      "SceneReconstruction API", "3D Mesh Rendering",
      "Open3D"
    ]
  },
  {
    category: "Networking & Embedded Systems",
    color: "from-orange-500 to-red-500",
    skills: [
      "4G/5G Network Protocols", "Software-Defined Radio (SDR)",
      "RF Signal Processing", "Raspberry Pi",
      "Data Encryption", "Wireshark"
    ]
  },
  {
    category: "DevOps & Cloud",
    color: "from-yellow-500 to-orange-500",
    skills: [
      "Docker", "AWS (EC2, S3, Lambda)", "Azure Pipelines",
      "CI/CD (GitHub Actions, Jenkins)", "Kubernetes"
    ]
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Spline Robot with Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8 relative pointer-events-none">
              <div className="pointer-events-auto w-full h-full">
                <SplineScene 
                  scene="https://prod.spline.design/Z1Ta-aCxUMq1depO/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 justify-center flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                  title={social.name}
                >
                  <social.icon className="h-6 w-6 text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <ul className="mb-4 space-y-2 list-none p-0 m-0">
              <li className="text-foreground text-lg leading-relaxed">
                Ex Software Developer Intern @ Robinhood Markets, Bentley Systems
              </li>
              <li className="text-foreground text-lg leading-relaxed">
                iOS Developer @ MSU's Department of CSE
              </li>
              <li className="text-foreground text-lg leading-relaxed">
                Hackathon Winner @ HackUTA7
              </li>
            </ul>

              

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="bg-card border border-border rounded-xl p-4 h-full card-glow-hover transition-all duration-300">
                    <div className={`inline-block bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent mb-3`}>
                      <h3 className="text-lg font-bold">{skillGroup.category}</h3>
                    </div>
                    <div className="space-y-1.5">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          className="text-muted-foreground text-xs flex items-center"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

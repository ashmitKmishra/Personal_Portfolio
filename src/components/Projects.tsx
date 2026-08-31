import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, ImageOff } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  category: string;
  summary: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageMaxWidth: string;
  github: string;
  demo: string;
  imageRotation: number;
};

const projects: Project[] = [
  {
    title: "Open-Source Contributor @ itwinjs-core",
    category: "OPEN SOURCE",
    summary:
      "A targeted schema-loading fix and regression tests that improve backend synchronization stability for iTwin digital twins.",
    description:
      "Contributed to the core open-source repository of Bentley Systems' iTwin platform (PR #8795). Diagnosed and patched an edge case in the schema loading engine that caused data inconsistencies during backend synchronization and wrote test suites to validate the fix and prevent regressions, improving the stability of 3D infrastructure digital twins for enterprise users.",
    tech: ["TypeScript", "Node.js", "Mocha", "GitHub Actions", "CI/CD"],
    image: "/projects/itwin.png",
    imageAlt: "iTwin digital twin project",
    imageWidth: 2608,
    imageHeight: 1252,
    imageMaxWidth: "95%",
    github: "https://github.com/iTwin/itwinjs-core/pull/8795",
    demo: "https://github.com/iTwin/itwinjs-core/pull/8795",
    imageRotation: 0.55,
  },
  {
    title: "Coverage Compass",
    category: "AI / INSURTECH",
    summary:
      "An AI insurance platform that parses policies, identifies coverage gaps, and generates personalized risk recommendations.",
    description:
      "Engineered an InsurTech platform using AWS Bedrock to parse unstructured policies, extracting coverage limits and gaps with high precision. Built a backend pipeline that processes user financial data to calculate personalized risk profiles and generate real-time coverage recommendations.",
    tech: ["AWS", "React", "Node.js", "Framer", "PostgreSQL"],
    image: "/projects/coverage-compass.png",
    imageAlt: "Coverage Compass insurance recommendation platform",
    imageWidth: 806,
    imageHeight: 422,
    imageMaxWidth: "84%",
    github: "https://github.com/ashmitKmishra/BullDawg-Hackers",
    demo: "https://github.com/ashmitKmishra/BullDawg-Hackers",
    imageRotation: -0.45,
  },
  {
    title: "HackFashion-AI",
    category: "AI / FASHION",
    summary:
      "A HackUTA7-winning wardrobe platform that uses computer vision, language, and voice to deliver personalized styling guidance.",
    description:
      "HackFashion-AI is an intelligent wardrobe management and styling platform that combines computer vision, natural language processing, and voice synthesis to revolutionize how you interact with your closet. Upload your clothes, chat with your AI stylist, and get personalized outfit recommendations—all powered by cutting-edge AI technology.",
    tech: ["Postman", "React", "Node.js", "Express", "TypeScript"],
    image: "/projects/hackfashion.png",
    imageAlt: "HackFashion-AI wardrobe and styling platform",
    imageWidth: 2992,
    imageHeight: 1702,
    imageMaxWidth: "92%",
    github: "https://github.com/ashmitKmishra/HackFashion-AI",
    demo: "https://github.com/ashmitKmishra/HackFashion-AI",
    imageRotation: 0.5,
  },
  {
    title: "Destinify",
    category: "AI / TRAVEL",
    summary:
      "An AI trip planner that turns a traveler’s preferences and destination into a customized, detailed itinerary.",
    description:
      "Destinify simplifies travel planning by creating customized itineraries for trips of any length—whether a weekend getaway or an extended vacation. Users can input their travel preferences and destinations, and Destinify generates a detailed plan with AI-driven suggestions.",
    tech: ["TypeScript", "Vite", "Supabase", "Tailwind CSS", "shadcn/ui"],
    image: "/projects/destinify.png",
    imageAlt: "Destinify AI trip planning application",
    imageWidth: 1446,
    imageHeight: 920,
    imageMaxWidth: "88%",
    github: "https://github.com/ashmitKmishra/Destinify_US_Trip_Planner",
    demo: "https://github.com/ashmitKmishra/Destinify_US_Trip_Planner",
    imageRotation: -0.55,
  },
  {
    title: "Real-Time ASL Recognition Engine",
    category: "AI / COMPUTER VISION",
    summary:
      "An end-to-end deep-learning system that recognizes American Sign Language gestures from a live webcam feed.",
    description:
      "An end-to-end solution for American Sign Language recognition using deep learning and web technologies with real-time webcam gesture recognition.",
    tech: ["TensorFlow 2.10", "Flask REST API", "Python", "OpenCV DNN", "Transfer Learning"],
    image: "/projects/asl-recognition.png",
    imageAlt: "Real-time American Sign Language recognition engine",
    imageWidth: 1920,
    imageHeight: 1080,
    imageMaxWidth: "90%",
    github: "https://github.com/ashmitKmishra/Detection-Model",
    demo: "https://github.com/ashmitKmishra/Detection-Model",
    imageRotation: 0.45,
  },
];

type ProjectCardProps = {
  project: Project;
  index: number;
  reduceMotion: boolean;
};

function ProjectCard({ project, index, reduceMotion }: ProjectCardProps) {
  const hasDistinctDemo = Boolean(project.demo && project.demo !== project.github);
  const imageStyle = {
    "--project-image-rotation": `${project.imageRotation}deg`,
    "--project-plate-rotation": `${project.imageRotation * -0.6}deg`,
    "--project-image-max-width": project.imageMaxWidth,
  } as CSSProperties;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: reduceMotion ? 0 : index * 0.1, duration: reduceMotion ? 0 : 0.45 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className={cn(
        "h-full min-w-0",
        index === projects.length - 1 && "md:col-span-2 md:w-[calc(50%-0.75rem)] md:justify-self-center",
      )}
    >
      <Card
        role="article"
        aria-labelledby={`project-title-${index}`}
        className="group flex h-full min-w-0 flex-col overflow-hidden border-border bg-card transition-[border-color,box-shadow] duration-300 card-glow-hover hover:border-primary/40"
      >
        <CardHeader className="pb-3">
          <p className="mb-1 text-xs font-semibold tracking-[0.18em] text-primary">{project.category}</p>
          <CardTitle
            id={`project-title-${index}`}
            className="text-xl leading-snug transition-colors duration-300 group-hover:text-primary sm:text-2xl"
          >
            {project.title}
          </CardTitle>
          <CardDescription className="pt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.summary}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4">
          <div
            role="img"
            aria-label={project.imageAlt}
            className={cn(
              "group/artifact relative isolate mx-auto my-1 w-[96%] max-w-full",
              "transition-transform duration-300 ease-out",
              "sm:w-[var(--project-image-max-width)] sm:rotate-[var(--project-image-rotation)]",
              "sm:group-hover:-translate-y-0.5 sm:group-hover:rotate-0 sm:group-hover:scale-[1.018]",
            )}
            style={imageStyle}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-2 z-0 rotate-[var(--project-plate-rotation)] border border-primary/25 bg-secondary shadow-[0_16px_36px_-18px_hsl(var(--card-glow)/0.6)] [clip-path:polygon(2%_7%,97%_0,100%_92%,5%_100%,0_16%)] transition-[transform,border-color,box-shadow] duration-300 group-hover/artifact:rotate-0 group-hover/artifact:border-primary/45 group-hover/artifact:shadow-[0_18px_42px_-16px_hsl(var(--card-glow)/0.75)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 flex items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground"
            >
              <div className="flex flex-col items-center justify-center gap-2 px-4 text-center">
                <ImageOff className="h-5 w-5 text-primary/70" />
                <span className="text-xs font-medium">Add {project.image.split("/").pop()}</span>
              </div>
            </div>
            <img
              src={project.image}
              alt=""
              width={project.imageWidth}
              height={project.imageHeight}
              loading="lazy"
              decoding="async"
              className="relative z-20 block h-auto w-full rounded-md border border-white/10 bg-secondary object-contain shadow-[0_12px_30px_-18px_rgba(0,0,0,0.9)] transition-opacity duration-200"
              onError={(event) => {
                event.currentTarget.style.opacity = "0";
              }}
            />
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border/80 bg-secondary/70 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/70 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
              >
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              {hasDistinctDemo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  aria-label={`View ${project.title} project (opens in a new tab)`}
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A showcase of my work in software engineering, AI, and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              reduceMotion={Boolean(shouldReduceMotion)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

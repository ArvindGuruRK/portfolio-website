import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import type { SVGProps } from "react";
import {
  SiFastapi,
  SiTailwindcss,
  SiShadcnui,
  SiLangchain,
  SiSupabase,
  SiRedis,
  SiPrisma,
  SiHtml5,
  SiCss,
  SiGit,
  SiJira,
  SiPostman,
} from "react-icons/si";

const brand = (
  Icon: React.ComponentType<{ color?: string; className?: string }>,
  color: string,
) =>
  (props: SVGProps<SVGSVGElement>) => (
    <Icon color={color} className={props.className} />
  );

export const DATA = {
  name: "Arvind R K",
  initials: "AR",
  url: "https://arvindrk.dev",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Full-Stack Developer building production-grade web apps and AI-powered systems. Currently shipping insurance portals at Trident Solutions and exploring LLMs, RAG, and voice agents.",
  summary:
    "I'm a Full-Stack Developer based in Chennai with hands-on experience building production web applications and AI-native systems. At [Trident Solutions](#work), I work on the [Vibe Insurance Broking](#work) platform — developing dynamic UI pages and API integrations across Employee, Corporate, and Admin portals using Next.js and React, and integrating third-party insurance APIs into the Vibe Policy Engine. On the side, I'm building [GradGear](#projects), an AI-powered EdTech platform featuring a voice tutor agent for Indian K-12 students, built on a three-tier monorepo with LangChain + Pinecone for RAG. I hold a BE in Computer Science from [Rajalakshmi Institute of Technology](#education). I'm passionate about shipping scalable, AI-native products and continuously evolving with modern dev practices.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "FastAPI", icon: brand(SiFastapi, "#009688") },
    { name: "Tailwind CSS", icon: brand(SiTailwindcss, "#06B6D4") },
    { name: "shadcn/ui", icon: brand(SiShadcnui, "#000000") },
    { name: "LangChain", icon: brand(SiLangchain, "#1C3C3C") },
    { name: "Supabase", icon: brand(SiSupabase, "#3ECF8E") },
    { name: "Redis", icon: brand(SiRedis, "#DC382D") },
    { name: "Prisma ORM", icon: brand(SiPrisma, "#2D3748") },
    { name: "HTML", icon: brand(SiHtml5, "#E34F26") },
    { name: "CSS", icon: brand(SiCss, "#1572B6") },
    { name: "Git", icon: brand(SiGit, "#F05032") },
    { name: "Jira", icon: brand(SiJira, "#0052CC") },
    { name: "Postman", icon: brand(SiPostman, "#FF6C37") },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arvindguru83@gmail.com",
    tel: "+918778901907",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ArvindGuruRK",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ArvindRK",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:arvindguru83@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Trident Solutions",
      href: "#",
      badges: [],
      location: "Chennai, India",
      title: "Associate Software Developer",
      logoUrl: "/trident.jpg",
      start: "Oct 2025",
      end: "Present",
      description:
        "Contributing to Vibe Insurance Broking — developing and maintaining dynamic UI pages and API integrations across three portals (Employee, Corporate, and Admin) using React and Next.js. Integrated third-party insurance provider APIs into the Vibe Policy Engine, enabling end-to-end purchase flows for car, bike, and life insurance. Identified and resolved frontend and backend bugs, contributed to new feature development, and collaborated with the team using Git and Agile practices to deliver production-ready modules.",
    },
    {
      company: "Trident Solutions",
      href: "#",
      badges: [],
      location: "Chennai, India",
      title: "Software Engineer Intern",
      logoUrl: "/trident.jpg",
      start: "Apr 2025",
      end: "Jun 2025",
      description:
        "Built an AI-powered file search engine using FastAPI, FAISS, and HuggingFace embeddings with the Ollama Mistral LLM — implementing hybrid search combining semantic, keyword, and metadata retrieval. Gained hands-on experience with RAG architecture, LLM integration, and multi-format document processing, strengthening foundational knowledge in applied AI development.",
    },
  ],
  education: [
    {
      school: "Rajalakshmi Institute of Technology",
      href: "https://ritchennai.org",
      degree: "Bachelor of Engineering in Computer Science — 8.2 CGPA",
      logoUrl: "/rit_logo.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "GradGear — AI-Powered EdTech Platform",
      href: "#",
      dates: "Apr 2026 - Present",
      active: true,
      description:
        "Building a comprehensive AI-driven student platform featuring **Miss Alissa**, a voice tutor agent for Indian K-12 students with an STT/TTS pipeline-aligned RAG. Architected a three-tier monorepo (Next.js frontend, NestJS API gateway, FastAPI AI service) with LangChain + Pinecone vector search for context-aware responses.",
      technologies: [
        "Next.js",
        "NestJS",
        "FastAPI",
        "TypeScript",
        "Python",
        "LangChain",
        "Pinecone",
        "PostgreSQL",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Student Attention Monitor — Real-Time Classroom AI Tool",
      href: "#",
      dates: "May 2026 - Present",
      active: true,
      description:
        "Real-time computer-vision tool that monitors student engagement during classroom sessions using head-pose estimation and eye-gaze tracking. Surfaces live attention analytics to teachers via a dashboard so they can adapt their delivery on the fly.",
      technologies: [
        "Python",
        "OpenCV",
        "MediaPipe",
        "FastAPI",
        "React",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI File Search Engine — RAG Architecture",
      href: "#",
      dates: "Apr 2025 - Jun 2025",
      active: true,
      description:
        "Developed a semantic file search engine supporting hybrid retrieval — combining keyword, semantic, and metadata-based search across multi-format documents. Integrated the Ollama Mistral LLM for natural-language document querying, enabling accurate AI-powered responses grounded in uploaded file content.",
      technologies: [
        "Python",
        "FastAPI",
        "FAISS",
        "HuggingFace",
        "Ollama",
        "LangChain",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "IBM Generative AI",
      dates: "",
      location: "IBM",
      description:
        "Certification covering generative AI foundations, prompt engineering, and applied LLM use cases.",
      image: "",
      links: [
        {
          title: "Issuer",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.ibm.com/training/badges",
        },
      ],
    },
    {
      title: "NPTEL Database Management Systems",
      dates: "",
      location: "NPTEL",
      description:
        "Course on relational database design, normalization, transactions, and SQL — completed via NPTEL (IIT).",
      image: "",
      links: [
        {
          title: "Issuer",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://nptel.ac.in",
        },
      ],
    },
    {
      title: "Python Development",
      dates: "",
      location: "SoloLearn",
      description:
        "Hands-on certification covering Python fundamentals, OOP, and applied scripting.",
      image: "",
      links: [],
    },
    {
      title: "Data Science",
      dates: "",
      location: "SoloLearn",
      description:
        "Certification covering data wrangling, statistics, and core ML workflows.",
      image: "",
      links: [],
    },
    {
      title: "Java",
      dates: "",
      location: "SoloLearn",
      description:
        "Certification covering Java fundamentals, OOP, and standard library usage.",
      image: "",
      links: [],
    },
    {
      title: "Final Year Project Certificate",
      dates: "2025",
      location: "Rajalakshmi Institute of Technology",
      description:
        "Awarded for successful completion and presentation of the final-year engineering project.",
      image: "",
      links: [],
    },
  ],
} as const;

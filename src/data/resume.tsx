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
) => {
  const BrandIconComponent = (props: SVGProps<SVGSVGElement>) => (
    <Icon color={color} className={props.className} />
  );
  BrandIconComponent.displayName = `BrandIcon(${Icon.displayName || Icon.name || "Icon"})`;
  return BrandIconComponent;
};

export const DATA = {
  name: "Arvind R K",
  initials: "AR",
  url: "https://arvindrk.dev",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Full-Stack Developer passionate about building elegant, responsive, and user-centric web applications.",
  summary:
    "I am a Full-Stack Developer dedicated to crafting clean, high-performance, and user-friendly web applications. I love turning complex problems into simple, elegant digital experiences, blending solid backend foundations with smooth, intuitive user interfaces. Passionate about modern development practices, continuous learning, and clean code, I am always excited to collaborate on building impactful software solutions that make a difference.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Python", icon: Python },
    { name: "FastAPI", icon: brand(SiFastapi, "#009688") },
    { name: "Typescript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
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
        url: "https://www.linkedin.com/in/arvind-rk-0a782a224/",
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
      school: "SRM Institute of Science and Technology",
      href: "https://www.srmist.edu.in",
      degree: "M.Tech in Data Science and Artificial Intelligence",
      logoUrl: "/srm_logo.png",
      start: "2026",
      end: "Present",
    },
    {
      school: "Rajalakshmi Institute of Technology",
      href: "https://ritchennai.org",
      degree: "Bachelor of Engineering in Computer Science — 8.2 CGPA",
      logoUrl: "/rit_logo.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "Velammal Vidhyashram",
      href: "https://velammal.org/velammal-vidhyashram-surapet/",
      degree: "CBSE — Class X & XII — 78%",
      logoUrl: "/velammal_logo-modified.png",
      start: "2008",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "GradGear — AI-Powered EdTech Platform",
      href: "#",
      dates: "Apr 2026 - Present",
      active: true,
      description:
        "Building a comprehensive **AI-driven student platform** featuring **Miss Alissa**, a voice tutor agent for Indian K-12 students with an **STT/TTS pipeline-aligned RAG**. Architected a **three-tier monorepo** (Next.js, NestJS, FastAPI) with **LangChain + Pinecone** vector search for context-aware responses.",
      technologies: [
        "Next.js",
        "FastAPI",
        "TypeScript",
        "Python",
        "LangChain",
        "Pinecone",
        "PostgreSQL",
      ],
      links: [],
      image: "/gradgear.png",
      video: "",
    },
    {
      title: "Student Attention Monitor — Real-Time Classroom AI Tool",
      href: "#",
      dates: "May 2026 - Present",
      active: true,
      description:
        "Developed a **real-time computer-vision tool** that monitors student engagement during classroom sessions using **head-pose estimation** and **eye-gaze tracking**. Surfaces **live attention analytics** to teachers via a dashboard so they can adapt their delivery on the fly.",
      technologies: [
        "Python",
        "OpenCV",
        "MediaPipe",
        "FastAPI",
        "React",
      ],
      links: [],
      image: "/attention_monitor.png",
      video: "",
    },
    {
      title: "AI File Search Engine — RAG Architecture",
      href: "#",
      dates: "Apr 2025 - Jun 2025",
      active: true,
      description:
        "Developed a **semantic file search engine** supporting **hybrid retrieval** — combining keyword, semantic, and metadata-based search across multi-format documents. Integrated the **Ollama Mistral LLM** for natural-language document querying, enabling **accurate AI-powered responses** grounded in uploaded file content.",
      technologies: [
        "Python",
        "FastAPI",
        "FAISS",
        "HuggingFace",
        "Ollama",
        "LangChain",
      ],
      links: [],
      image: "/file_search.png",
      video: "",
    },
    {
      title: "E-Commerce Platform",
      href: "#",
      dates: "Jan 2026 - Mar 2026",
      active: true,
      description:
        "Designed and built a modern, responsive full-stack e-commerce application. Integrated **Firebase** for secure user authentication and real-time Firestore database management, including cart state synchronization and order history tracking. Integrated **Cashfree Payments** gateway for seamless, secure checkout flows, and implemented automatic email transactional alerts (order confirmations, shipping updates) via the **Resend** mail transfer API.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Firebase Auth",
        "Firestore",
        "Cashfree SDK",
        "Resend API",
      ],
      links: [],
      image: "/ecommerce.png",
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

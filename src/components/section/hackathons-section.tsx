/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { BrainCircuit, Database, LineChart, Award, GraduationCap } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";

function getCertificateIcon(title: string) {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("ibm") || lowerTitle.includes("generative ai")) {
    return {
      icon: <BrainCircuit className="size-5 text-indigo-600 dark:text-indigo-400" />,
      className: "bg-gradient-to-br from-indigo-50/90 via-slate-50 to-indigo-100/50 border-indigo-200/60 ring-indigo-500/5 dark:from-indigo-950/80 dark:via-slate-900/90 dark:to-indigo-900/40 dark:border-indigo-500/40 dark:ring-indigo-500/10",
    };
  }
  if (lowerTitle.includes("database") || lowerTitle.includes("dbms") || lowerTitle.includes("nptel")) {
    return {
      icon: <Database className="size-5 text-blue-600 dark:text-blue-400" />,
      className: "bg-gradient-to-br from-blue-50/90 via-slate-50 to-blue-100/50 border-blue-200/60 ring-blue-500/5 dark:from-blue-950/80 dark:via-slate-900/90 dark:to-blue-900/40 dark:border-blue-500/40 dark:ring-blue-500/10",
    };
  }
  if (lowerTitle.includes("python")) {
    return {
      icon: <Python className="size-5" />,
      className: "bg-gradient-to-br from-sky-50/90 via-slate-50 to-amber-50/40 border-sky-200/50 ring-sky-500/5 dark:from-sky-950/80 dark:via-slate-900/90 dark:to-amber-950/30 dark:border-sky-500/30 dark:ring-sky-500/10",
    };
  }
  if (lowerTitle.includes("data science")) {
    return {
      icon: <LineChart className="size-5 text-emerald-600 dark:text-emerald-400" />,
      className: "bg-gradient-to-br from-emerald-50/90 via-slate-50 to-emerald-100/50 border-emerald-200/60 ring-emerald-500/5 dark:from-emerald-950/80 dark:via-slate-900/90 dark:to-emerald-900/40 dark:border-emerald-500/40 dark:ring-emerald-500/10",
    };
  }
  if (lowerTitle.includes("java")) {
    return {
      icon: <Java className="size-5" />,
      className: "bg-gradient-to-br from-amber-50/90 via-slate-50 to-sky-50/40 border-amber-200/50 ring-amber-500/5 dark:from-amber-950/80 dark:via-slate-900/90 dark:to-sky-950/30 dark:border-amber-500/30 dark:ring-amber-500/10",
    };
  }
  if (lowerTitle.includes("project") || lowerTitle.includes("final year")) {
    return {
      icon: <GraduationCap className="size-5 text-amber-600 dark:text-amber-400" />,
      className: "bg-gradient-to-br from-amber-50/90 via-slate-50 to-amber-100/50 border-amber-200/60 ring-amber-500/5 dark:from-amber-950/80 dark:via-slate-900/90 dark:to-amber-900/40 dark:border-amber-500/40 dark:ring-amber-500/10",
    };
  }

  return {
    icon: <Award className="size-5 text-muted-foreground" />,
    className: "bg-card border-border ring-border/50",
  };
}

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Certificates</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">I love learning new things</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              A collection of {DATA.hackathons.length} courses and certifications I&apos;ve completed to deepen my knowledge across full-stack engineering, databases, and AI.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon) => {
            const certIcon = getCertificateIcon(hackathon.title);
            return (
              <TimelineItem key={hackathon.title + hackathon.dates} className="w-full flex items-start justify-between gap-10">
                <TimelineConnectItem className="flex items-start justify-center">
                  {hackathon.image ? (
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                    />
                  ) : (
                    <div className={`size-10 z-10 shrink-0 rounded-full border shadow ring-2 flex items-center justify-center flex-none transition-all duration-300 hover:scale-110 ${certIcon.className}`}>
                      {certIcon.icon}
                    </div>
                  )}
                </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {hackathon.dates && (
                  <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
                )}
                {hackathon.title && (
                  <h3 className="font-semibold leading-none">{hackathon.title}</h3>
                )}
                {hackathon.location && (
                  <p className="text-sm text-muted-foreground">{hackathon.location}</p>
                )}
                {hackathon.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {hackathon.description}
                  </p>
                )}
                {hackathon.links && hackathon.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {hackathon.links.map((link, idx) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          );
          })}
        </Timeline>
      </div>
    </section>
  );
}

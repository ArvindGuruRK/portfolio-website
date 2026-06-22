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
    return <BrainCircuit className="size-4 md:size-5 text-indigo-600 dark:text-indigo-400" />;
  }
  if (lowerTitle.includes("database") || lowerTitle.includes("dbms") || lowerTitle.includes("nptel")) {
    return <Database className="size-4 md:size-5 text-blue-600 dark:text-blue-400" />;
  }
  if (lowerTitle.includes("python")) {
    return <Python className="size-4 md:size-5" />;
  }
  if (lowerTitle.includes("data science")) {
    return <LineChart className="size-4 md:size-5 text-emerald-600 dark:text-emerald-400" />;
  }
  if (lowerTitle.includes("java")) {
    return <Java className="size-4 md:size-5" />;
  }
  if (lowerTitle.includes("project") || lowerTitle.includes("final year")) {
    return <GraduationCap className="size-4 md:size-5 text-amber-600 dark:text-amber-400" />;
  }

  return <Award className="size-4 md:size-5 text-muted-foreground" />;
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
                      className="size-8 md:size-10 bg-background z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                    />
                  ) : (
                    <div className="size-8 md:size-10 z-10 shrink-0 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex items-center justify-center flex-none transition-all duration-300 hover:scale-110">
                      {certIcon}
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

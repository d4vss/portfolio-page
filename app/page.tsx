import { AtSignIcon } from "@/components/icons/at-sign-icon";
import { ChevronsLeftRightIcon } from "@/components/icons/chevrons-left-right-icon";
import { CoffeeIcon } from "@/components/icons/coffee-icon";
import { CursorClickIcon } from "@/components/icons/cursor-click-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { ModeToggle } from "@/components/toggle-mode-icon";
import { Badge } from "@/components/ui/badge";

import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { BookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TechnologyType {
  iconUrl: string;
  invertOnDarkMode?: boolean;
  filledBackground?: boolean;
}

interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

const technologies: TechnologyType[] = [
  { iconUrl: "/icons/nextjs.svg", invertOnDarkMode: true },
  { iconUrl: "/icons/react.svg" },
  { iconUrl: "/icons/tailwind.svg" },
  { iconUrl: "/icons/typescript.svg" },
  { iconUrl: "/icons/postgresql.svg" },
  { iconUrl: "/icons/sqlite.svg", invertOnDarkMode: true },
  { iconUrl: "/icons/prisma.svg", invertOnDarkMode: true },
  { iconUrl: "/icons/git.svg" },
  { iconUrl: "/icons/shadcnui.svg", invertOnDarkMode: true, filledBackground: true },
  { iconUrl: "/icons/parkui.svg" },
  { iconUrl: "/icons/gsap.svg" },
  { iconUrl: "/icons/framermotion.svg" },
  { iconUrl: "/icons/authjs.svg" },
  { iconUrl: "/icons/vuejs.svg" },
  { iconUrl: "/icons/csharp.svg" },
  { iconUrl: "/icons/python.svg" },
];

const projects: ProjectType[] = [
  {
    title: "Forza Mods Website",
    description:
      "Open source for the official Forza Mods website. Built with Next.js, Park UI and framer-motion.",
    technologies: ["Typescript", "Next.js", "Park UI", "Framer Motion"],
    githubUrl: "https://github.com/ForzaMods/Website",
    liveDemoUrl: "https://www.forzamods.dev/",
  },
  {
    title: "Discord Giveaway Bot",
    description: "A folder-based Python Discord Giveaway Bot built with Disnake and Aiosqlite. It features support for slash commands and utility functions.",
    technologies: ["Python", "SQLite"],
    githubUrl: "https://github.com/d4vss/discord-giveawaybot"
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between">
      <BlurFade yOffset={2} duration={0.3}>
        <div className="max-lg:flex justify-between gap-2">
          <div className="border w-fit bg-background">
            <Image
              priority
              className="w-56 h-56 aspect-square object-cover p-2"
              src="/cat-eating-shrimp.webp"
              alt="a cat eating a shrimp"
              width={224}
              height={224}
            />
          </div>
          <div className="lg:hidden">
            <ModeToggle />
          </div>
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">d4vss</h1>
        <p className="muted font-normal text-lg mb-2">
          Full Stack Developer
        </p>
        <div className="flex gap-2 items-center">
          <Link href="https://github.com/d4vss" target="_blank">
            <Button size="icon">
              <GithubIcon />
            </Button>
          </Link>
          <Link href="https://ko-fi.com/d4vss" target="_blank">
            <Button size="icon">
              <CoffeeIcon />
            </Button>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="opacity-50 cursor-default" size="icon">
                  <AtSignIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Available soon!</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="mt-5 font-semibold text-xl">About</p>
        <p className="max-w-xs text-muted-foreground">
          I have been developing web applications since 2021,
          specializing in both frontend and backend development while staying
          current with emerging technologies.
        </p>
        <h3 className="mt-5 mb-2">Technologies</h3>
        <div className="md:max-w-sm flex flex-wrap gap-2">
          {technologies.map((technology: TechnologyType, index: number) => (
            <div
              key={index}
              className="w-fit relative transition-all overflow-hidden rounded-md border p-4 border-border bg-stone-300/[.1] hover:bg-stone-300/[.50] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            >
              <Image
                priority
                className={cn(
                  "w-6 h-6 md:w-8 md:h-8",
                  technology.invertOnDarkMode ? "dark:invert" : null,
                  technology.filledBackground
                    ? "dark:bg-foreground p-2 rounded"
                    : null
                )}
                src={technology.iconUrl}
                alt="Technology Logo"
                width={32}
                height={32}
              />
            </div>
          ))}
        </div>
      </BlurFade>
      <BlurFade yOffset={2} duration={0.3}>
        <div className="max-lg:hidden flex justify-end items-start">
          <ModeToggle />
        </div>
        <h2 className="font-semibold">Projects</h2>
        <div className="mt-5 space-y-5">
          {projects.map((project, index) => (
            <div key={index} className="w-full group rounded-sm border p-4 transition-all border-border bg-stone-300/[.1] hover:bg-stone-300/[.50] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            >
              <div className="flex gap-2 items-center justify-between">
                <p className="flex items-center text-inherit bg-transparent font-semibold">
                  <BookIcon className="inline mr-2 w-4 h-4" /> {project.title}
                </p>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Link target="_blank" href={project.githubUrl}>
                      <Button size="icon">
                        <ChevronsLeftRightIcon />
                      </Button>
                    </Link>
                  )}
                  {project.liveDemoUrl && (
                    <Link target="_blank" href={project.liveDemoUrl}>
                      <Button size="icon">
                        <CursorClickIcon />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground my-3">
                {project.description}
              </p>
              <div className="flex gap-2 items-center flex-wrap">
                {project.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="rounded font-medium border bg-stone-300/[.1] hover:bg-stone-300/[.50] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  );
}

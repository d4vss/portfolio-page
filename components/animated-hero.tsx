"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Button } from "./ui/button";

const titles = ["Next.js Developer", "Nuxt3 Developer", "Astro Developer", "Angular 18 Developer"];

export default function AnimatedHero() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const shortDescriptionRef = useRef<HTMLParagraphElement | null>(null);
  const readMoreButtonRef = useRef<HTMLButtonElement | null>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    const tlTemp = gsap.timeline();

    const updateText = () => {
      currentIndex.current = (currentIndex.current + 1) % titles.length;
      if (textRef.current) {
        textRef.current!.textContent = titles[currentIndex.current] + ".";
      }
    };


    tlTemp
      .set(heroTextRef.current, { y: 75, opacity: 0 })
      .set(shortDescriptionRef.current, { y: 50, opacity: 0 })
      .set(readMoreButtonRef.current, { y: 25, opacity: 0 })
      .to(heroTextRef.current, {
        y: 0,
        ease: "sine.out",
        delay: 1.75,
        opacity: 1
      })
      .to(shortDescriptionRef.current, {
        y: 0,
        ease: "sine.out",
        opacity: 1
      })
      .to(readMoreButtonRef.current, {
        y: 0,
        ease: "sine.out",
        opacity: 1
      });

    tl
      .to(textRef.current, {
        yPercent: 100,
        duration: 1,
        delay: 1,
        ease: "power2.in",
        onComplete: updateText,
      })
      .set(textRef.current, { yPercent: -100 })
      .to(textRef.current, {
        yPercent: 0,
        duration: 1,
        ease: "power2.out",
      }, "<");
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 min-h-[calc(100vh-16rem)]">
        <div ref={heroTextRef}>
          <div className="flex mt-10 max-lg:hidden">
            <h1 className="inline-block">I&apos;m Davs, a&nbsp;</h1>
            <div className="relative inline">
              <div className="overflow-hidden h-[3.25rem]"> 
                <h1 ref={textRef} className="inline-block">
                  {titles[0]}.
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <h1>Hey, I&apos;m Davs.</h1>
          </div>
        </div>
        <p className="muted text-xl text-center" ref={shortDescriptionRef}>Tech Enthusiast and Web Developer from Central Europe.</p>
        <Button className="w-fit font-semibold p-0 underline" variant="link" size="lg" ref={readMoreButtonRef} asChild>
          <Link href="/about">
            Read more about me
          </Link>
        </Button>
      </div>
    </>
  );

}

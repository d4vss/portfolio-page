
import Landing from "@/components/landing";
import Technologies from "@/components/technologies";
import { FadeText } from "@/components/ui/fade-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex justify-center flex-col">
        <Landing />
      </section>
      
      <section className="width-regulator mt-4">
        <div>
          <h2>
            <FadeText text="Hey, I&apos;m Davs." />
          </h2>

          <div className="text-lg muted">
            <FadeText text="I&apos;m a 17-year-old full-stack web developer who enjoys turning ideas into practical solutions. I focus on creating clear, user-friendly interfaces and am involved in all stages of development, from design to deployment. My goal is to build reliable, scalable solutions that provide lasting value." />
          </div>
        </div>
        <Technologies />
      </section>
      
      <section className="my-20 text-center flex gap-10 items-center justify-center max-md:flex-col">
        <p className="large">Want to see some of my projects?</p>
        <Link href="https://github.com/d4vss" target="_blank">
          <RainbowButton>Visit my GitHub</RainbowButton>
        </Link>
      </section>
    </>
  );
}

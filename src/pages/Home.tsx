import Reveal from "@/components/Reveal";
import { profile, tools, frameworks } from "@/data/profile";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="border-b hero-bg">
        <div className="container-width py-16 md:py-24">
          <Reveal>
            <p className="text-brand-700 font-semibold">QA Automation Engineer</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-700 to-accent-600">
                {profile.fullName}
              </span>
            </h1>
            <p className="mt-5 prose text-slate-700 dark:text-neutral-300">
              {profile.summary}
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/contact" className="btn-primary">Contact Me</Link>
              <a href="/resume.pdf" className="btn-secondary">Download Resume</a>
            </div>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-neutral-400">
            {tools.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
            {frameworks.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



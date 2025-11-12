import Reveal from "@/components/Reveal";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <div className="container-width py-12 md:py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-6">
          {experience.map((exp) => (
            <article key={exp.title} className="card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{exp.title}</h3>
                <span className="text-sm text-slate-500">{exp.period}</span>
              </div>
              <p className="text-slate-700 dark:text-neutral-300">{exp.company}</p>
              <ul className="mt-3 list-disc pl-5 text-slate-700 dark:text-neutral-300">
                {exp.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </div>
  );
}




import Reveal from "@/components/Reveal";
import CodeEmbed from "@/components/CodeEmbed";
import { projects } from "@/data/profile";
import { useMemo, useState } from "react";

export default function Projects() {
  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tech))).sort(),
    []
  );
  const [active, setActive] = useState<string | null>(null);
  const filtered = useMemo(
    () => (active ? projects.filter((p) => p.tech.includes(active)) : projects),
    [active]
  );

  return (
    <div className="container-width py-12 md:py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <button onClick={() => setActive(null)} className={`chip ${!active ? "chip-active" : ""}`}>All</button>
          {allTags.map((t) => (
            <button key={t} onClick={() => setActive(t)} className={`chip ${active === t ? "chip-active" : ""}`}>{t}</button>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <article key={p.name} className="card p-5">
              <h3 className="text-lg font-medium">{p.name}</h3>
              <p className="mt-2 text-slate-700 dark:text-neutral-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-brand-50 text-brand-700 px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
              {p.rawCodeUrl && (
                <CodeEmbed rawUrl={p.rawCodeUrl} />
              )}
              <div className="mt-4 flex gap-3">
                {p.repoUrl && <a className="btn-primary" href={p.repoUrl} target="_blank" rel="noreferrer">View Repo</a>}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </div>
  );
}




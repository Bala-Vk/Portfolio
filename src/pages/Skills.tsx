import Reveal from "@/components/Reveal";
import { frameworks, languages, tools } from "@/data/profile";
import { FiSmartphone, FiMonitor, FiSettings, FiCloud } from "react-icons/fi";

export default function Skills() {
  return (
    <div className="container-width py-12 md:py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <SkillGroup title="Languages" items={languages} />
          <SkillGroup title="Frameworks" items={frameworks} />
          <SkillGroup title="Tools" items={tools} />
          <StrengthTiles />
        </div>
      </Reveal>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-medium text-slate-900 dark:text-neutral-100">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
    </div>
  );
}

function StrengthTiles() {
  const items = [
    {
      icon: <FiSmartphone className="text-brand-600" size={20} />,
      title: "Mobile Testing (Android/iOS)",
      desc: "Robust Appium suites, device labs, real cloud devices."
    },
    {
      icon: <FiMonitor className="text-brand-600" size={20} />,
      title: "Web UI Automation",
      desc: "Stable Selenium/WebdriverIO flows with resilient selectors."
    },
    {
      icon: <FiSettings className="text-brand-600" size={20} />,
      title: "Framework Design",
      desc: "Reusable BDD modules, reporting, data and driver layers."
    },
    {
      icon: <FiCloud className="text-brand-600" size={20} />,
      title: "CI/CD & Cloud",
      desc: "Parallel pipelines, Sauce Labs integration, artifacts."
    }
  ];
  return (
    <div className="md:col-span-2">
      <h3 className="font-medium text-slate-900 dark:text-neutral-100">Strengths</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.title}
            className="card p-4 flex items-start gap-3 hover:shadow-md transition"
            role="listitem"
          >
            <div className="shrink-0 rounded-md bg-brand-50 p-2 dark:bg-brand-900/20">
              {it.icon}
            </div>
            <div>
              <div className="font-medium">{it.title}</div>
              <div className="text-sm text-slate-600 dark:text-neutral-400">
                {it.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


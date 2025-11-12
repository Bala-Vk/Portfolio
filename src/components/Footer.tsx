import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container-width py-10 text-sm text-slate-600 dark:text-neutral-400 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.fullName}</p>
        <div className="flex gap-5">
          <a className="hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2 rounded-sm" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <FaLinkedin size={18} />
          </a>
          <a className="hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2 rounded-sm" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}



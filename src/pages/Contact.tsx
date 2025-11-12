import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="container-width py-12 md:py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-6 max-w-xl">
          <div className="card p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-brand-50 p-2 dark:bg-brand-900/20">
                <FiMail className="text-brand-600" />
              </div>
              <a href={`mailto:${profile.email}`} className="font-medium hover:underline" aria-label={`Email ${profile.fullName}`}>
                {profile.email}
              </a>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-md bg-brand-50 p-2 dark:bg-brand-900/20">
                <FiPhone className="text-brand-600" />
              </div>
              <a href={`tel:${profile.phone ?? ""}`} className="font-medium hover:underline" aria-label={`Call ${profile.fullName}`}>
                {profile.phone ?? "Add your phone in src/data/profile.ts"}
              </a>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-social btn-linkedin"
              aria-label="View LinkedIn profile"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-social btn-github"
              aria-label="View GitHub profile"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}



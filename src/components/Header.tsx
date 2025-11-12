import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/70">
      <div className="container-width h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-xl">
          <span className="text-brand-700">Bala</span> QA
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm">
          <NavItem to="/" label="Home" />
          <NavItem to="/skills" label="Skills" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/contact" label="Contact" />
        </nav>
        <button
          className="md:hidden p-2 rounded-md border"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container-width py-2 flex flex-col">
            <MobileItem to="/" label="Home" onClick={() => setOpen(false)} />
            <MobileItem to="/skills" label="Skills" onClick={() => setOpen(false)} />
            <MobileItem to="/projects" label="Projects" onClick={() => setOpen(false)} />
            <MobileItem to="/contact" label="Contact" onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `relative py-1 transition hover:text-brand-700 ${isActive ? "text-brand-700" : ""}`
      }
      aria-current={({ isActive }) => (isActive ? "page" : undefined)}
    >
      <span className="after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-600 after:transition-all after:duration-200 after:ease-out after:w-0 hover:after:w-full">{label}</span>
    </NavLink>
  );
}

function MobileItem({
  to,
  label,
  onClick
}: {
  to: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <NavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        `px-2 py-3 rounded-md transition hover:bg-slate-50 dark:hover:bg-neutral-900 ${isActive ? "text-brand-700" : ""}`
      }
      aria-current={({ isActive }) => (isActive ? "page" : undefined)}
    >
      {label}
    </NavLink>
  );
}



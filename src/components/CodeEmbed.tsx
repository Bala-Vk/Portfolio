import { useEffect, useState } from "react";

export default function CodeEmbed({ rawUrl }: { rawUrl?: string }) {
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      if (!rawUrl) return;
      try {
        const res = await fetch(rawUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        if (active) setCode(text.slice(0, 2000)); // trim preview
      } catch (e: any) {
        if (active) setError(e.message ?? "Failed to load code");
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [rawUrl]);

  if (!rawUrl) return null;
  if (error) return <div className="text-sm text-red-600">Failed to load code: {error}</div>;
  if (code == null) return <div className="text-sm text-slate-500">Loading code…</div>;

  return (
    <pre className="mt-3 overflow-auto rounded-lg border p-4 text-xs bg-slate-50 dark:bg-neutral-900 dark:border-neutral-800">
      <code>{code}</code>
    </pre>
  );
}




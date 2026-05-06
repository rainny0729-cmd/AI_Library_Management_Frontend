import { useEffect, useMemo, useState } from "react";
import { RadioTower } from "lucide-react";
import { cn } from "../utils/cn";

interface LogStreamProps {
  logs: string[];
  title?: string;
  compact?: boolean;
}

export default function LogStream({ logs, title = "Agent 实时日志流", compact }: LogStreamProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setOffset((current) => (current + 1) % logs.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [logs.length]);

  const visibleLogs = useMemo(() => {
    const arranged = [...logs.slice(offset), ...logs.slice(0, offset)];
    return arranged.slice(0, compact ? 5 : 8);
  }, [compact, logs, offset]);

  return (
    <section className="surface rounded-lg p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <RadioTower className="h-4 w-4 text-cyan-200" />
          {title}
        </h3>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-xs text-emerald-200">
          streaming
        </span>
      </div>
      <div className={cn("thin-scrollbar space-y-2 overflow-hidden", compact ? "max-h-56" : "max-h-80")}>
        {visibleLogs.map((log, index) => (
          <div
            key={`${log}-${index}`}
            className="rounded-md border border-white/10 bg-slate-950/46 px-3 py-2 font-mono text-xs text-slate-300"
          >
            {log}
          </div>
        ))}
      </div>
    </section>
  );
}

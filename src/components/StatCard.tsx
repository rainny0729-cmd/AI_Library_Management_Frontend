import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

const toneClasses: Record<string, string> = {
  aqua: "from-sky-400/20 to-cyan-400/5 text-sky-200",
  mint: "from-emerald-400/20 to-teal-400/5 text-emerald-200",
  amber: "from-amber-400/20 to-yellow-400/5 text-amber-200",
  blue: "from-blue-400/20 to-sky-400/5 text-blue-200",
  green: "from-green-400/20 to-emerald-400/5 text-green-200",
  purple: "from-violet-400/20 to-fuchsia-400/5 text-violet-200",
  cyan: "from-cyan-400/20 to-blue-400/5 text-cyan-200",
  rose: "from-rose-400/20 to-red-400/5 text-rose-200",
};

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  change?: string;
  icon?: LucideIcon;
  tone?: string;
  light?: boolean;
}

export default function StatCard({
  title,
  value,
  subtitle,
  change,
  icon: Icon,
  tone = "aqua",
  light,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group relative overflow-hidden rounded-lg p-4",
        light ? "surface-light" : "surface",
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-20 bg-gradient-to-br opacity-80",
          toneClasses[tone] ?? toneClasses.aqua,
        )}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className={cn("text-sm", light ? "text-slate-500" : "text-slate-400")}>{title}</p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "metric-number mt-2 text-2xl font-semibold tracking-normal",
              light ? "text-slate-950" : "text-white",
            )}
          >
            {value}
          </motion.p>
        </div>
        {Icon && (
          <div
            className={cn(
              "rounded-lg border p-2.5",
              light
                ? "border-slate-200 bg-white text-slate-700"
                : "border-white/10 bg-white/5 text-sky-200",
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>
      <div className="relative mt-4 flex items-center justify-between gap-3">
        <span className={cn("text-xs", light ? "text-slate-500" : "text-slate-500")}>
          {subtitle ?? "较昨日同口径统计"}
        </span>
        {change && (
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
              change.startsWith("-")
                ? "bg-emerald-400/10 text-emerald-300"
                : "bg-sky-400/10 text-sky-200",
            )}
          >
            <ArrowUpRight className="h-3 w-3" />
            {change}
          </span>
        )}
      </div>
    </motion.div>
  );
}

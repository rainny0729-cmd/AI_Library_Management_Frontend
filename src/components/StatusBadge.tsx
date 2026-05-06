import { cn } from "../utils/cn";

type StatusTone =
  | "running"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "disabled"
  | "syncing";

const toneMap: Record<StatusTone, string> = {
  running: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  success: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  warning: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  danger: "border-rose-400/30 bg-rose-400/10 text-rose-200",
  info: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  neutral: "border-slate-400/25 bg-slate-400/10 text-slate-200",
  disabled: "border-slate-500/20 bg-slate-700/30 text-slate-400",
  syncing: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
};

const textMap: Record<string, StatusTone> = {
  运行中: "running",
  可借: "success",
  成功: "success",
  已同步: "success",
  完成: "success",
  脱敏完成: "success",
  可取书: "success",
  预约中: "warning",
  排队中: "warning",
  紧张: "warning",
  临近到期: "warning",
  预警: "warning",
  观察: "info",
  增量中: "syncing",
  低频: "neutral",
  暂不可用: "disabled",
  正常: "success",
};

export function statusTone(label: string): StatusTone {
  return textMap[label] ?? "neutral";
}

interface StatusBadgeProps {
  label: string;
  tone?: StatusTone;
  pulse?: boolean;
  className?: string;
}

export default function StatusBadge({ label, tone, pulse, className }: StatusBadgeProps) {
  const resolvedTone = tone ?? statusTone(label);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium leading-none",
        toneMap[resolvedTone],
        className,
      )}
    >
      {pulse && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />}
      {label}
    </span>
  );
}

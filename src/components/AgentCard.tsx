import { motion } from "framer-motion";
import { Bot, Gauge, ListChecks, Timer } from "lucide-react";
import StatusBadge from "./StatusBadge";

interface AgentCardProps {
  agent: {
    name: string;
    status: string;
    calls: number;
    avgToken: number;
    success: number;
    task: string;
    queue: number;
    latency: string;
  };
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className="surface rounded-lg p-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-2 text-cyan-200">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{agent.name}</h3>
            <p className="mt-1 text-xs text-slate-400">{agent.task}</p>
          </div>
        </div>
        <StatusBadge label="运行中" pulse />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            <ListChecks className="h-3.5 w-3.5" />
            今日调用
          </p>
          <p className="metric-number mt-1 font-semibold text-white">{agent.calls.toLocaleString("zh-CN")}</p>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            <Gauge className="h-3.5 w-3.5" />
            成功率
          </p>
          <p className="metric-number mt-1 font-semibold text-emerald-200">{agent.success}%</p>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
          <p className="text-xs text-slate-500">平均 token</p>
          <p className="metric-number mt-1 font-semibold text-cyan-100">
            {agent.avgToken.toLocaleString("zh-CN")}
          </p>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            <Timer className="h-3.5 w-3.5" />
            队列 / 延迟
          </p>
          <p className="metric-number mt-1 font-semibold text-white">
            {agent.queue} / {agent.latency}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

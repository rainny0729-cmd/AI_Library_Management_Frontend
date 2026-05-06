import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  DatabaseZap,
  Layers3,
  LibraryBig,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import StatusBadge from "../components/StatusBadge";
import { agentHealth, capabilities, dataUpdateTime, homeMetrics } from "../data/mock";

const tags = ["内部系统", "AI Agent", "RAG 知识库", "智慧图书馆", "脱敏数据展示"];

const capabilityIcons = [BrainCircuit, LibraryBig, Layers3, Network, Sparkles, ShieldCheck];

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="surface hairline overflow-hidden rounded-xl">
        <div className="grid gap-6 p-6 xl:grid-cols-[1.45fr_.8fr] xl:p-8">
          <div className="relative">
            <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 max-w-4xl">
                <p className="text-sm text-slate-400">河南理工大学 AI 图书馆综合管理与知识服务平台</p>
                <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-normal text-white md:text-6xl">
                  面向 3.5 万名学生的 AI 图书馆知识与管理中枢
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                  整合图书借阅、馆藏管理、座位预约、入馆流量、知识问答、学习推荐和管理决策，
                  形成覆盖学生服务与管理运营的校内智慧图书馆能力体系。
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {homeMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-lg border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
                  >
                    <p className="text-sm text-slate-400">{metric.label}</p>
                    <p className="metric-number mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{metric.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-xl border border-cyan-300/20 bg-slate-950/62 p-5">
            <div className="absolute inset-0 digital-grid opacity-35" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">AI 中枢运行状态</p>
                  <h2 className="mt-1 text-xl font-semibold text-white">多 Agent 协作在线</h2>
                </div>
                <span className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-2 text-emerald-200">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {agentHealth.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-100">{agent.name}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        延迟 {agent.latency}，队列 {agent.queue}
                      </p>
                    </div>
                    <StatusBadge label="运行中" pulse />
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="flex items-center gap-2 text-sm font-medium text-white">
                  <DatabaseZap className="h-4 w-4 text-cyan-200" />
                  数据更新时间：{dataUpdateTime}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  系统面向河南理工大学约 3.5 万名学生的图书馆学习与管理场景，因涉及校内业务数据、借阅记录、
                  座位预约和内部管理接口，当前仅用于校内环境展示与部署，未上架 GitHub。
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">System Capability</p>
            <h2 className="mt-1 text-2xl font-semibold text-white">六个核心能力模块</h2>
          </div>
          <button className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white md:inline-flex">
            查看运行明细
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = capabilityIcons[index] ?? BrainCircuit;
            return (
              <motion.article
                key={item.title}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                className="surface rounded-xl p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    {item.metric}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

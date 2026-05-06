import { useState } from "react";
import { motion } from "framer-motion";
import { BookText, CheckCircle2, Database, FileSearch, GitBranch, Layers3, ScanSearch } from "lucide-react";
import ChartCard from "../components/ChartCard";
import KnowledgeSearch from "../components/KnowledgeSearch";
import StatusBadge from "../components/StatusBadge";
import {
  answerReferences,
  knowledgeGraphNodes,
  knowledgeSources,
  knowledgeUpdates,
  retrievalSteps,
} from "../data/mock";

export default function KnowledgeBase() {
  const [activeQuery, setActiveQuery] = useState("网安专业大一应该先借哪些入门书？");

  return (
    <div className="space-y-6">
      <KnowledgeSearch onAsk={setActiveQuery} />

      <section className="grid gap-4 xl:grid-cols-[.82fr_1.35fr_.9fr]">
        <ChartCard title="知识来源" subtitle="RAG 检索前置数据源与同步状态">
          <div className="space-y-3">
            {knowledgeSources.map((source) => (
              <div
                key={source.name}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-3 transition hover:border-cyan-300/25"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="flex items-center gap-2 text-sm font-medium text-white">
                      <Database className="h-4 w-4 text-cyan-200" />
                      {source.name}
                    </p>
                    <p className="metric-number mt-1 text-xs text-slate-500">
                      {source.count.toLocaleString("zh-CN")} 条 · {source.freshness}
                    </p>
                  </div>
                  <StatusBadge label={source.sync} />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <section className="surface rounded-lg p-5">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm text-slate-500">当前问题</p>
              <h2 className="mt-1 text-xl font-semibold text-white">{activeQuery}</h2>
            </div>
            <StatusBadge label="运行中" pulse />
          </div>

          <div className="mt-5 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
              <FileSearch className="h-4 w-4" />
              AI 回答摘要
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              建议先按“网络基础 → Linux 与脚本 → Web 安全 → CTF 题目复盘”的顺序学习。大一阶段重点不是直接堆题量，
              而是先把 HTTP、TCP/IP、数据库、命令行和 Python 脚本能力补齐。系统优先推荐馆内可借图书，并将预约等待较长的书放在第二阶段。
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {answerReferences.map((ref) => (
              <motion.article
                key={ref.callNo}
                whileHover={{ y: -3 }}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-white">{ref.title}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      索书号 {ref.callNo} · {ref.floor}
                    </p>
                  </div>
                  <StatusBadge label={ref.status} />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">{ref.reason}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
              <ScanSearch className="h-4 w-4 text-emerald-200" />
              检索链路
            </h3>
            <div className="grid gap-3 md:grid-cols-3">
              {retrievalSteps.map((step, index) => (
                <div key={step.step} className="rounded-lg border border-white/10 bg-slate-950/42 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                      {index + 1}
                    </span>
                    <span className="metric-number text-xs text-slate-500">{step.time}</span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-white">{step.step}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ChartCard title="知识图谱" subtitle="专业概念、课程资料与馆藏关联">
          <div className="relative h-[420px] overflow-hidden rounded-lg border border-white/10 bg-slate-950/54 digital-grid">
            <svg className="absolute inset-0 h-full w-full opacity-55">
              <line x1="48%" y1="24%" x2="18%" y2="48%" stroke="#38bdf8" strokeWidth="1" />
              <line x1="48%" y1="24%" x2="66%" y2="42%" stroke="#38bdf8" strokeWidth="1" />
              <line x1="66%" y1="42%" x2="78%" y2="68%" stroke="#4ade80" strokeWidth="1" />
              <line x1="51%" y1="62%" x2="24%" y2="74%" stroke="#4ade80" strokeWidth="1" />
              <line x1="51%" y1="62%" x2="66%" y2="42%" stroke="#fbbf24" strokeWidth="1" />
              <line x1="48%" y1="24%" x2="34%" y2="14%" stroke="#a78bfa" strokeWidth="1" />
            </svg>
            {knowledgeGraphNodes.map((node) => (
              <div
                key={node.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border border-cyan-300/20 bg-slate-900/90 px-3 py-2 text-center shadow-glow"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <p className="whitespace-nowrap text-xs font-medium text-white">{node.name}</p>
                <p className="mt-1 text-[10px] text-slate-500">Level {node.level}</p>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>

      <ChartCard
        title="最近知识库更新记录"
        subtitle="新增书目、教材章节、PDF 切片、索引刷新与质量治理"
        action={<StatusBadge label="已同步" />}
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {knowledgeUpdates.map((item) => (
            <div key={`${item.time}-${item.type}`} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <p className="flex items-center gap-2 text-sm font-medium text-white">
                {item.type.includes("索引") ? <GitBranch className="h-4 w-4 text-cyan-200" /> : item.type.includes("图书") ? <BookText className="h-4 w-4 text-emerald-200" /> : <Layers3 className="h-4 w-4 text-amber-200" />}
                {item.type}
              </p>
              <p className="mt-2 text-xs text-slate-500">{item.time}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.content}</p>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-emerald-200">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
}

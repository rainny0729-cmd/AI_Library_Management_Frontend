import { ArrowRight, Cpu, Network, Workflow, Zap } from "lucide-react";
import AgentCard from "../components/AgentCard";
import ChartCard from "../components/ChartCard";
import LogStream from "../components/LogStream";
import StatusBadge from "../components/StatusBadge";
import { agentLogs, agentStatuses, agentWorkflow } from "../data/mock";

export default function AgentCenter() {
  return (
    <div className="space-y-6">
      <section className="surface hairline rounded-xl p-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm text-cyan-100">
              <Workflow className="h-4 w-4" />
              Agent 调度中心
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-normal text-white">多 Agent 协作支撑高频长链路任务</h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400">
              系统每次自然语言问答会触发意图识别、检索、摘要、推荐、生成和审计；管理端还会定时执行流量预测、
              借阅分析、采购建议和系统日志巡检，因此需要稳定的 token 额度支撑完整链路。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs text-slate-500">今日 Agent 调用</p>
              <p className="metric-number mt-1 text-xl font-semibold text-white">491,960</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs text-slate-500">平均成功率</p>
              <p className="metric-number mt-1 text-xl font-semibold text-emerald-200">98.8%</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs text-slate-500">实时队列</p>
              <p className="metric-number mt-1 text-xl font-semibold text-cyan-100">155</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {agentStatuses.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>

        <aside className="space-y-4">
          <LogStream logs={agentLogs} />
          <ChartCard title="链路资源消耗" subtitle="单次完整问答链路估算">
            <div className="space-y-3">
              {[
                { label: "检索与重排", value: 24 },
                { label: "章节摘要", value: 32 },
                { label: "推荐排序", value: 16 },
                { label: "回答生成", value: 21 },
                { label: "审计检查", value: 7 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="metric-number text-slate-500">{item.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-cyan-300" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>
        </aside>
      </section>

      <ChartCard title="Agent 协作流程" subtitle="用户问题到最终结果的完整处理链路">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          {agentWorkflow.map((step, index) => (
            <div key={step} className="flex flex-1 items-center gap-3">
              <div className="min-h-[96px] w-full rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950/64 text-cyan-100">
                  {index === 0 ? <Zap className="h-4 w-4" /> : index === agentWorkflow.length - 1 ? <Cpu className="h-4 w-4" /> : <Network className="h-4 w-4" />}
                </div>
                <p className="mt-3 text-sm font-medium text-white">{step}</p>
                {index > 1 && index < agentWorkflow.length - 1 && (
                  <StatusBadge label="运行中" pulse className="mt-2" />
                )}
              </div>
              {index < agentWorkflow.length - 1 && <ArrowRight className="hidden h-5 w-5 shrink-0 text-slate-500 xl:block" />}
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
}

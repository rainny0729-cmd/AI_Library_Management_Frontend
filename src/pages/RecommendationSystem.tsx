import { BookOpen, GraduationCap, Sparkles, Star, Target } from "lucide-react";
import ChartCard from "../components/ChartCard";
import StatusBadge from "../components/StatusBadge";
import { recommendationStrategies, studentRecommendations } from "../data/mock";

const strategyIcons = [GraduationCap, BookOpen, Target, Star];

export default function RecommendationSystem() {
  return (
    <div className="space-y-6">
      <section className="surface hairline rounded-xl p-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" />
              推荐系统
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-normal text-white">面向课程、专业和学习阶段的馆藏推荐</h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400">
              推荐系统结合专业方向、课程资料、馆藏状态、借阅热度、预约等待和个人知识库收藏，生成可解释的书单与学习路线。
            </p>
          </div>
          <StatusBadge label="运行中" pulse />
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-4">
        {recommendationStrategies.map((strategy, index) => {
          const Icon = strategyIcons[index];
          return (
          <ChartCard key={strategy.name} title={strategy.name} subtitle={strategy.desc}>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-slate-400">覆盖率</span>
                  <span className="metric-number text-cyan-100">{strategy.coverage}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-cyan-300" style={{ width: `${strategy.coverage}%` }} />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-slate-400">点击转化</span>
                  <span className="metric-number text-emerald-200">{strategy.click}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-emerald-300" style={{ width: `${strategy.click * 3}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Icon className="h-4 w-4 text-cyan-200" />
                策略每日自动刷新
              </div>
            </div>
          </ChartCard>
          );
        })}
      </section>

      <ChartCard title="推荐书单示例" subtitle="面向大一网络空间安全专业 CTF 入门">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {studentRecommendations.map((book) => (
            <div key={book.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-white">{book.title}</h3>
                <StatusBadge label={book.status} />
              </div>
              <p className="mt-2 text-xs text-slate-500">{book.location}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{book.reason}</p>
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
}

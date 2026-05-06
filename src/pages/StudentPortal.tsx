import { Armchair, BookMarked, CalendarCheck, GraduationCap, MessageSquareText, Route, Star, UserRound } from "lucide-react";
import ChartCard from "../components/ChartCard";
import StatusBadge from "../components/StatusBadge";
import {
  studentActivity,
  studentBorrows,
  studentProfile,
  studentRecommendations,
  studentReservations,
  studentRoadmap,
} from "../data/mock";

const resourceIcons = [BookMarked, GraduationCap, CalendarCheck, Star, BookMarked];

export default function StudentPortal() {
  return (
    <div className="space-y-6">
      <section className="surface-light overflow-hidden rounded-xl p-6">
        <div className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm text-slate-500">学生端学习服务</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-normal text-slate-950">个人图书馆与 AI 学习助手</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              学生端与管理员后台区分展示，只保留个人可见的借阅、预约、推荐、学习路线和知识库收藏。
              所有页面数据均为脱敏模拟数据，不展示真实学生隐私信息。
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <UserRound className="h-4 w-4 text-sky-600" />
                  {studentProfile.name}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {studentProfile.college} · {studentProfile.major} · {studentProfile.grade}
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <Armchair className="h-4 w-4 text-emerald-600" />
                  当前座位
                </p>
                <p className="mt-2 text-sm text-slate-600">{studentProfile.currentSeat} · 信用分 {studentProfile.credit}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-950 p-5 text-slate-100">
            <p className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
              <MessageSquareText className="h-4 w-4" />
              AI 学习助手示例
            </p>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-slate-400">用户输入</p>
              <p className="mt-2 text-sm leading-6 text-white">我是大一网安专业，最近想打 CTF，图书馆里有什么书适合我？</p>
            </div>
            <div className="mt-3 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
              <p className="text-sm font-semibold text-cyan-100">AI 回答</p>
              <div className="mt-3 space-y-3">
                {studentRecommendations.map((book) => (
                  <div key={book.title} className="rounded-lg border border-white/10 bg-slate-950/50 p-3">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-medium text-white">{book.title}</p>
                      <StatusBadge label={book.status} />
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{book.location}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{book.reason}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                配套关键词：HTTP、SQL 注入、XSS、Linux、Python 脚本。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <ChartCard title="我的借阅" subtitle="当前在借与到期提醒">
          <div className="space-y-3">
            {studentBorrows.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-white">{item.title}</p>
                  <StatusBadge label={item.status} />
                </div>
                <p className="mt-2 text-sm text-slate-400">{item.location} · 到期 {item.due}</p>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="我的预约" subtitle="图书与座位预约状态">
          <div className="space-y-3">
            {studentReservations.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-white">{item.title}</p>
                  <StatusBadge label={item.status} />
                </div>
                <p className="mt-2 text-sm text-slate-400">{item.queue > 0 ? `前方等待 ${item.queue} 人` : "可按系统通知处理"}</p>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="个人学习概览" subtitle="最近浏览、到馆、收藏与提醒">
          <div className="space-y-3">
            {studentActivity.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{item.value}</p>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
        <ChartCard title="4 周专业学习路线" subtitle="面向大一网安专业 CTF 入门">
          <div className="grid gap-3 md:grid-cols-4">
            {studentRoadmap.map((week) => (
              <div key={week.week} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                  <Route className="h-4 w-4" />
                  {week.week}
                </p>
                <h3 className="mt-3 font-semibold text-white">{week.focus}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{week.tasks}</p>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="课程相关资源" subtitle="系统根据课程表与借阅偏好推荐">
          <div className="space-y-3">
            {["计算机网络课程章节", "Python 练习题册", "大学英语四级阅读", "信息安全数学基础", "个人知识库收藏"].map((item, index) => {
              const Icon = resourceIcons[index];
              return (
                <div key={item} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <p className="flex items-center gap-2 text-sm font-medium text-white">
                    <Icon className="h-4 w-4 text-cyan-200" />
                    {item}
                  </p>
                  <StatusBadge label={index === 4 ? "已同步" : "可借"} />
                </div>
              );
            })}
          </div>
        </ChartCard>
      </section>
    </div>
  );
}

import { useState } from "react";
import { AlertTriangle, Armchair, Clock3, DoorOpen } from "lucide-react";
import SeatMap from "../components/SeatMap";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { seatFloors, seatStats, timeSlots } from "../data/mock";
import { cn } from "../utils/cn";

export default function SeatReservation() {
  const [slot, setSlot] = useState(timeSlots[4]);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {seatStats.map((item, index) => (
          <StatCard
            key={item.label}
            title={item.label}
            value={item.value}
            subtitle="座位预约系统同步"
            icon={[Armchair, Clock3, DoorOpen, Armchair, AlertTriangle][index]}
            tone={["aqua", "purple", "mint", "green", "rose"][index]}
          />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          <div className="surface rounded-lg p-5">
            <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">按楼层展示座位热力图</h2>
                <p className="mt-1 text-sm text-slate-400">当前时间段：{slot}，颜色代表空闲、已预约、使用中和暂不可用状态</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSlot(item)}
                    className={cn(
                      "rounded-lg border px-3 py-2 text-xs transition",
                      slot === item
                        ? "border-cyan-300 bg-cyan-300 text-slate-950"
                        : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-[3px] bg-emerald-400" />空闲</span>
              <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-[3px] bg-amber-400" />已预约</span>
              <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-[3px] bg-sky-400" />使用中</span>
              <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-[3px] bg-slate-600" />暂不可用</span>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {seatFloors.map((floor) => (
              <SeatMap key={floor.name} floor={floor} />
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <section className="surface-light rounded-lg p-5">
            <p className="text-sm text-slate-500">AI 预测</p>
            <h2 className="mt-1 text-xl font-semibold text-slate-950">晚间座位压力研判</h2>
            <div className="mt-5 space-y-3">
              <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-rose-950">三楼与五楼压力最高</p>
                  <StatusBadge label="预警" />
                </div>
                <p className="mt-2 text-sm leading-6 text-rose-900/75">今日晚间三楼自习区和五楼考研专区预计占用率超过 90%。</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="font-semibold text-amber-950">考试周预约成功率降低</p>
                <p className="mt-2 text-sm leading-6 text-amber-900/75">五楼考研专区在考试周预约成功率预计降低 17%-22%。</p>
              </div>
              <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
                <p className="font-semibold text-sky-950">开放策略建议</p>
                <p className="mt-2 text-sm leading-6 text-sky-900/75">建议开放临时座位或延长部分区域开放时间，并在学生端提前推送可替代区域。</p>
              </div>
            </div>
          </section>

          <section className="surface rounded-lg p-5">
            <h3 className="font-semibold text-white">楼层压力排行</h3>
            <div className="mt-4 space-y-3">
              {seatFloors
                .slice()
                .sort((a, b) => b.pressure - a.pressure)
                .map((floor) => (
                  <div key={floor.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-300">{floor.name}</span>
                      <span className="metric-number text-slate-500">{floor.pressure}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-rose-300" style={{ width: `${floor.pressure}%` }} />
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </aside>
      </section>
    </div>
  );
}

import { SeatStatus } from "../data/mock";
import { cn } from "../utils/cn";

interface SeatMapProps {
  floor: {
    name: string;
    total: number;
    pressure: number;
    seats: Array<{ id: string; status: SeatStatus }>;
  };
}

const seatClass: Record<SeatStatus, string> = {
  free: "bg-emerald-400/75 shadow-[0_0_16px_rgba(74,222,128,.28)]",
  reserved: "bg-amber-400/80 shadow-[0_0_16px_rgba(251,191,36,.24)]",
  using: "bg-sky-400/80 shadow-[0_0_16px_rgba(56,189,248,.24)]",
  disabled: "bg-slate-600/70",
};

const labelMap: Record<SeatStatus, string> = {
  free: "空闲",
  reserved: "已预约",
  using: "使用中",
  disabled: "暂不可用",
};

export default function SeatMap({ floor }: SeatMapProps) {
  return (
    <section className="surface rounded-lg p-4">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-white">{floor.name}</h3>
          <p className="mt-1 text-sm text-slate-400">总座位 {floor.total}，预测压力 {floor.pressure}%</p>
        </div>
        <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10">
          <div
            className={cn(
              "h-full rounded-full",
              floor.pressure > 88 ? "bg-rose-400" : floor.pressure > 72 ? "bg-amber-400" : "bg-emerald-400",
            )}
            style={{ width: `${floor.pressure}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-1.5">
        {floor.seats.map((seat) => (
          <span
            key={seat.id}
            title={`${floor.name} ${seat.id} ${labelMap[seat.status]}`}
            className={cn(
              "aspect-square rounded-[3px] border border-white/10 transition-transform hover:scale-125",
              seatClass[seat.status],
            )}
          />
        ))}
      </div>
    </section>
  );
}

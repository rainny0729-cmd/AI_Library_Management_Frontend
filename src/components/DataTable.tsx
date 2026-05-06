import { ReactNode } from "react";
import { cn } from "../utils/cn";

export interface DataColumn {
  key: string;
  header: string;
  className?: string;
  render?: (row: Record<string, unknown>, index: number) => ReactNode;
}

interface DataTableProps {
  columns: DataColumn[];
  rows: Array<Record<string, unknown>>;
  light?: boolean;
  compact?: boolean;
}

export default function DataTable({ columns, rows, light, compact }: DataTableProps) {
  return (
    <div className="thin-scrollbar overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr className={cn("border-b", light ? "border-slate-200" : "border-white/10")}>
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  "whitespace-nowrap px-4 py-3 text-xs font-medium uppercase tracking-normal",
                  light ? "text-slate-500" : "text-slate-400",
                  column.className,
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`${String(row.title ?? row.endpoint ?? row.time ?? rowIndex)}-${rowIndex}`}
              className={cn(
                "border-b transition-colors last:border-0",
                light
                  ? "border-slate-100 hover:bg-slate-50"
                  : "border-white/10 hover:bg-white/[0.035]",
              )}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={cn(
                    compact ? "px-4 py-2.5" : "px-4 py-3.5",
                    "align-middle text-sm",
                    light ? "text-slate-700" : "text-slate-200",
                    column.className,
                  )}
                >
                  {column.render ? column.render(row, rowIndex) : String(row[column.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

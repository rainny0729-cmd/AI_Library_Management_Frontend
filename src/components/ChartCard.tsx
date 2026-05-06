import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export default function ChartCard({
  title,
  subtitle,
  action,
  children,
  className,
  light,
}: ChartCardProps) {
  return (
    <motion.section
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={cn("rounded-lg p-5", light ? "surface-light" : "surface", className)}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className={cn("text-base font-semibold", light ? "text-slate-950" : "text-white")}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn("mt-1 text-sm", light ? "text-slate-500" : "text-slate-400")}>
              {subtitle}
            </p>
          )}
        </div>
        {action}
      </div>
      {children}
    </motion.section>
  );
}

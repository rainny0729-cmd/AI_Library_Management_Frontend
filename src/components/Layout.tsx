import { ReactNode } from "react";
import { motion } from "framer-motion";
import AiAssistant from "./AiAssistant";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface LayoutProps {
  current: string;
  title: string;
  onNavigate: (key: string) => void;
  children: ReactNode;
}

export default function Layout({ current, title, onNavigate, children }: LayoutProps) {
  return (
    <div className="app-background min-h-screen text-slate-100">
      <div className="pointer-events-none fixed inset-0 digital-grid opacity-45" />
      <div className="pointer-events-none fixed left-0 right-0 top-0 h-px aurora-line opacity-80" />
      <Sidebar current={current} onNavigate={onNavigate} />
      <div className="relative lg:pl-72">
        <Topbar title={title} />
        <main className="mx-auto max-w-[1680px] px-4 pb-12 pt-5 sm:px-6 lg:px-8">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </main>
      </div>
      <AiAssistant />
    </div>
  );
}

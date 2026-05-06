import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Send, Sparkles } from "lucide-react";
import { exampleQuestions } from "../data/mock";

interface KnowledgeSearchProps {
  onAsk?: (query: string) => void;
}

export default function KnowledgeSearch({ onAsk }: KnowledgeSearchProps) {
  const [query, setQuery] = useState(exampleQuestions[0]);

  const ask = (nextQuery = query) => {
    setQuery(nextQuery);
    onAsk?.(nextQuery);
  };

  return (
    <div className="surface hairline rounded-xl p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="flex flex-1 items-center gap-3 rounded-lg border border-cyan-300/20 bg-slate-950/60 px-4 py-3 shadow-inner">
          <Search className="h-5 w-5 text-cyan-200" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="输入自然语言问题，系统会自动选择检索链路与馆藏引用"
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
          <Sparkles className="h-4 w-4 text-emerald-200" />
        </div>
        <button
          onClick={() => ask()}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          <Send className="h-4 w-4" />
          发起检索
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <AnimatePresence>
          {exampleQuestions.map((question) => (
            <motion.button
              key={question}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              onClick={() => ask(question)}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              {question}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

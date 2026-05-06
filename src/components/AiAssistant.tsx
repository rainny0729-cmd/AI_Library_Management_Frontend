import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("今晚三楼自习区座位压力怎么样？");

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="mb-3 w-[min(380px,calc(100vw-2rem))] rounded-xl border border-cyan-300/20 bg-slate-950/92 p-4 shadow-glow backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-cyan-300/12 p-2 text-cyan-200">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">全局 AI 助手</h3>
                  <p className="text-xs text-slate-400">连接知识库、座位、借阅与管理分析</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="关闭助手"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-200">
              <p className="text-slate-400">示例回答</p>
              <p className="mt-2 leading-6">
                三楼自习区今晚 19:30-21:00 预测占用率 91%，五楼考研专区 94%。建议优先预约四楼电子阅览区，
                或关注系统在 18:20 推送的临时座位释放提醒。
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900 px-3 py-2">
              <Sparkles className="h-4 w-4 text-emerald-200" />
              <input
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none"
              />
              <button className="rounded-md bg-cyan-300 p-2 text-slate-950 transition hover:bg-cyan-200" aria-label="发送问题">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen((current) => !current)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300 text-slate-950 shadow-glow"
        aria-label="展开全局 AI 助手"
      >
        <Bot className="h-6 w-6" />
      </motion.button>
    </div>
  );
}

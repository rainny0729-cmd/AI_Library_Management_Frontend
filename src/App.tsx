import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout";
import AgentCenter from "./pages/AgentCenter";
import AuditLogs from "./pages/AuditLogs";
import BookManagement from "./pages/BookManagement";
import BorrowManagement from "./pages/BorrowManagement";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import KnowledgeBase from "./pages/KnowledgeBase";
import LearningQA from "./pages/LearningQA";
import ProcurementAdvice from "./pages/ProcurementAdvice";
import RecommendationSystem from "./pages/RecommendationSystem";
import SeatReservation from "./pages/SeatReservation";
import StudentPortal from "./pages/StudentPortal";
import TokenUsage from "./pages/TokenUsage";
import TrafficAnalysis from "./pages/TrafficAnalysis";

type PageKey =
  | "home"
  | "dashboard"
  | "knowledge"
  | "books"
  | "borrow"
  | "seats"
  | "traffic"
  | "qa"
  | "recommend"
  | "purchase"
  | "agents"
  | "logs"
  | "tokens"
  | "student";

const pages: Record<PageKey, { title: string; element: JSX.Element }> = {
  home: { title: "系统首页 / 项目总览", element: <Home /> },
  dashboard: { title: "管理员数据指挥舱", element: <Dashboard /> },
  knowledge: { title: "AI 知识库", element: <KnowledgeBase /> },
  books: { title: "图书管理", element: <BookManagement /> },
  borrow: { title: "借阅管理", element: <BorrowManagement /> },
  seats: { title: "座位预约", element: <SeatReservation /> },
  traffic: { title: "入馆流量分析", element: <TrafficAnalysis /> },
  qa: { title: "学习问答", element: <LearningQA /> },
  recommend: { title: "推荐系统", element: <RecommendationSystem /> },
  purchase: { title: "采购建议", element: <ProcurementAdvice /> },
  agents: { title: "Agent 调度中心", element: <AgentCenter /> },
  logs: { title: "系统日志与审计", element: <AuditLogs /> },
  tokens: { title: "token 消耗与额度申请说明", element: <TokenUsage /> },
  student: { title: "学生端页面", element: <StudentPortal /> },
};

function readHash(): PageKey {
  const raw = window.location.hash.replace(/^#\/?/, "");
  return raw in pages ? (raw as PageKey) : "home";
}

export default function App() {
  const [current, setCurrent] = useState<PageKey>(() => readHash());

  useEffect(() => {
    const onHashChange = () => setCurrent(readHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const activePage = useMemo(() => pages[current] ?? pages.home, [current]);

  const navigate = (key: string) => {
    if (key in pages) {
      window.location.hash = `/${key}`;
      setCurrent(key as PageKey);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Layout current={current} title={activePage.title} onNavigate={navigate}>
      {activePage.element}
    </Layout>
  );
}

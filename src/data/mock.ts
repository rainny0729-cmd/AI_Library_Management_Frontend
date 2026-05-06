export const dataUpdateTime = "2026-05-04 09:30";

export const systemScale = {
  students: 35000,
  collectionItems: 1280000,
  monthlyAiRequests: 2400000,
  monthlyTokens: 500000000,
  avgAnswerSeconds: 2.8,
  knowledgeHitRate: 91.6,
};

export const homeMetrics = [
  { label: "服务学生规模", value: "约 35,000 人", detail: "覆盖本科、研究生与继续教育学习场景" },
  { label: "馆藏知识条目", value: "1,280,000+", detail: "书目、章节、论文、公告与课程资料" },
  { label: "月度 AI 请求", value: "2,400,000+", detail: "问答、摘要、推荐、审计和管理分析" },
  { label: "预计月 token 消耗", value: "约 5 亿", detail: "多 Agent 协作与长上下文任务" },
  { label: "平均问答响应", value: "2.8s", detail: "检索、重排、生成与审计全链路" },
  { label: "知识库命中率", value: "91.6%", detail: "向量召回与关键词混合检索统计" },
];

export const agentHealth = [
  { name: "检索 Agent", status: "running", latency: "486ms", queue: 8 },
  { name: "借阅 Agent", status: "running", latency: "522ms", queue: 4 },
  { name: "座位 Agent", status: "running", latency: "610ms", queue: 11 },
  { name: "推荐 Agent", status: "running", latency: "734ms", queue: 13 },
  { name: "管理 Agent", status: "running", latency: "918ms", queue: 6 },
  { name: "风险巡检 Agent", status: "running", latency: "705ms", queue: 5 },
];

export const capabilities = [
  {
    title: "AI 馆藏知识库",
    desc: "融合馆藏书目、教材目录、论文摘要、课程资料和图书馆公告，支持自然语言检索与引用溯源。",
    metric: "128 万+ 知识条目",
  },
  {
    title: "图书借阅智能管理",
    desc: "面向借阅、归还、续借、预约等待和逾期风险，形成可追踪的业务分析闭环。",
    metric: "今日 8,426 次流转",
  },
  {
    title: "座位预约与压力预测",
    desc: "按楼层、区域和时间段识别自习压力，辅助开放备用阅览室和调配管理人员。",
    metric: "5 层 4,860 座",
  },
  {
    title: "入馆流量分析",
    desc: "接入入口闸机、楼层热度和停留时长统计，识别高峰、异常和设备同步延迟。",
    metric: "峰值 6,920 人",
  },
  {
    title: "学习资源推荐",
    desc: "结合专业方向、课程阶段、借阅偏好和知识图谱，为学生生成书单和学习路径。",
    metric: "72 类推荐策略",
  },
  {
    title: "管理决策报告生成",
    desc: "自动汇总馆藏优化、采购建议、空间压力、问答热点和系统运行质量。",
    metric: "周报生成 18 份",
  },
];

export const dashboardStats = [
  { label: "今日入馆人数", value: "18,742", change: "+12.4%", tone: "aqua" },
  { label: "当前馆内人数", value: "5,618", change: "+8.1%", tone: "mint" },
  { label: "今日借阅次数", value: "4,386", change: "+6.7%", tone: "amber" },
  { label: "今日归还次数", value: "4,040", change: "+4.2%", tone: "blue" },
  { label: "当前座位占用率", value: "78.6%", change: "+9.3%", tone: "green" },
  { label: "今日 AI 问答次数", value: "82,614", change: "+18.8%", tone: "purple" },
  { label: "今日知识库检索次数", value: "126,490", change: "+21.5%", tone: "cyan" },
  { label: "异常预约数量", value: "73", change: "-5.2%", tone: "rose" },
];

export const traffic7Days = [
  { day: "04-28", 入馆人数: 14220, 当前馆内: 4380, AI问答: 60120 },
  { day: "04-29", 入馆人数: 15640, 当前馆内: 4890, AI问答: 68520 },
  { day: "04-30", 入馆人数: 16980, 当前馆内: 5360, AI问答: 72480 },
  { day: "05-01", 入馆人数: 13260, 当前馆内: 3920, AI问答: 54360 },
  { day: "05-02", 入馆人数: 14830, 当前馆内: 4210, AI问答: 61840 },
  { day: "05-03", 入馆人数: 17190, 当前馆内: 4980, AI问答: 77120 },
  { day: "05-04", 入馆人数: 18742, 当前馆内: 5618, AI问答: 82614 },
];

export const borrow7Days = [
  { day: "04-28", 借阅: 3220, 归还: 2960, 续借: 610 },
  { day: "04-29", 借阅: 3516, 归还: 3190, 续借: 702 },
  { day: "04-30", 借阅: 3824, 归还: 3324, 续借: 764 },
  { day: "05-01", 借阅: 2180, 归还: 2090, 续借: 438 },
  { day: "05-02", 借阅: 2938, 归还: 2510, 续借: 590 },
  { day: "05-03", 借阅: 3760, 归还: 3420, 续借: 820 },
  { day: "05-04", 借阅: 4386, 归还: 4040, 续借: 936 },
];

export const seatFloorUsage = [
  { floor: "一楼公共区", 占用率: 62, 预约率: 58 },
  { floor: "二楼中文图书区", 占用率: 71, 预约率: 64 },
  { floor: "三楼自习区", 占用率: 91, 预约率: 88 },
  { floor: "四楼电子阅览区", 占用率: 76, 预约率: 72 },
  { floor: "五楼考研专区", 占用率: 94, 预约率: 90 },
];

export const qaCategoryShare = [
  { name: "馆藏查询", value: 28 },
  { name: "课程学习", value: 24 },
  { name: "借阅规则", value: 17 },
  { name: "座位预约", value: 14 },
  { name: "论文资料", value: 10 },
  { name: "管理咨询", value: 7 },
];

export const hotKeywords = [
  { keyword: "CTF Web 入门", hits: 7682, trend: "+32%" },
  { keyword: "考研数学真题", hits: 7210, trend: "+28%" },
  { keyword: "人工智能导论", hits: 6490, trend: "+19%" },
  { keyword: "网络安全基础", hits: 6168, trend: "+24%" },
  { keyword: "大学英语六级", hits: 5520, trend: "+12%" },
  { keyword: "数据库系统概论", hits: 4986, trend: "+17%" },
];

export const hotBooks = [
  { title: "计算机网络：自顶向下方法", category: "计算机", borrows: 842, location: "三楼 A 区", wait: 37 },
  { title: "网络安全基础与实践", category: "网络安全", borrows: 798, location: "三楼 B 区", wait: 42 },
  { title: "高等数学辅导讲义", category: "考研数学", borrows: 772, location: "五楼考研专区", wait: 55 },
  { title: "数据库系统概论", category: "软件工程", borrows: 694, location: "三楼 A 区", wait: 23 },
  { title: "Linux 命令行与 Shell 脚本", category: "操作系统", borrows: 641, location: "四楼电子阅览区", wait: 29 },
];

export const peakPredictions = [
  { time: "10:00-11:00", area: "二楼中文图书区", pressure: "中高", confidence: 86 },
  { time: "15:30-17:00", area: "四楼电子阅览区", pressure: "中高", confidence: 82 },
  { time: "19:30-21:00", area: "三楼自习区", pressure: "高", confidence: 93 },
  { time: "19:00-21:30", area: "五楼考研专区", pressure: "高", confidence: 95 },
];

export const taskQueue = [
  { task: "2026 春季新增书目摘要生成", owner: "阅读摘要 Agent", progress: 72, status: "running" },
  { task: "三楼自习区压力预测刷新", owner: "座位预测 Agent", progress: 88, status: "running" },
  { task: "热门书采购建议汇总", owner: "采购建议 Agent", progress: 61, status: "warning" },
  { task: "知识库低质量切片清理", owner: "日志审计 Agent", progress: 46, status: "running" },
  { task: "本周借阅趋势报告生成", owner: "管理报告 Agent", progress: 94, status: "success" },
];

export const managementSuggestions = [
  "预计今晚 19:30 至 21:00 三楼自习区压力较高，建议开放备用阅览室。",
  "网络安全、人工智能、考研数学类书籍近 14 日借阅量增长明显，建议增加复本。",
  "部分热门图书预约等待人数超过阈值，系统已生成采购建议。",
  "期末周期临近，座位预约违约率上升，建议开启信用提醒策略。",
];

export const knowledgeSources = [
  { name: "馆藏书目", count: 612480, sync: "已同步", freshness: "09:18" },
  { name: "教材目录", count: 86420, sync: "已同步", freshness: "08:45" },
  { name: "学术论文", count: 214700, sync: "增量中", freshness: "09:27" },
  { name: "课程资料", count: 52480, sync: "已同步", freshness: "08:50" },
  { name: "借阅记录统计", count: 184900, sync: "脱敏完成", freshness: "09:22" },
  { name: "学习问答记录", count: 92140, sync: "脱敏完成", freshness: "09:28" },
  { name: "图书馆公告", count: 3620, sync: "已同步", freshness: "09:05" },
];

export const exampleQuestions = [
  "网安专业大一应该先借哪些入门书？",
  "帮我整理一条 CTF Web 入门学习路线。",
  "数据库系统概论这本书适合怎么复习？",
  "计算机网络和网络安全的学习顺序是什么？",
];

export const retrievalSteps = [
  { step: "问题理解", detail: "识别专业、年级、学习目标与馆藏约束", time: "86ms" },
  { step: "向量召回", detail: "从 128 万知识条目召回 48 个候选片段", time: "310ms" },
  { step: "关键词重排", detail: "结合索书号、课程标签和借阅热度重排", time: "142ms" },
  { step: "内容摘要", detail: "压缩 6 个章节与 4 条书目信息", time: "680ms" },
  { step: "多 Agent 校验", detail: "检索、推荐、审计 Agent 交叉确认", time: "510ms" },
  { step: "最终回答", detail: "生成带引用、馆藏状态和学习路径的回答", time: "1.07s" },
];

export const answerReferences = [
  {
    title: "计算机网络：自顶向下方法",
    callNo: "TP393/634.2",
    floor: "三楼 A 区 12 架",
    status: "可借",
    reason: "适合先建立网络协议与 HTTP 基础。",
  },
  {
    title: "网络安全基础与实践",
    callNo: "TP309/128.7",
    floor: "三楼 B 区 08 架",
    status: "可借",
    reason: "覆盖安全模型、攻防概念和常见漏洞。",
  },
  {
    title: "Web 安全攻防：渗透测试实战指南",
    callNo: "TP393.08/226",
    floor: "四楼电子阅览区 03 架",
    status: "预约中",
    reason: "适合进入 CTF Web 方向后的专项训练。",
  },
  {
    title: "Linux 命令行与 Shell 脚本编程大全",
    callNo: "TP316.85/418",
    floor: "四楼电子阅览区 06 架",
    status: "可借",
    reason: "补齐环境搭建、日志分析和脚本自动化能力。",
  },
];

export const knowledgeGraphNodes = [
  { name: "网络安全", x: 48, y: 24, level: 1 },
  { name: "密码学", x: 18, y: 48, level: 2 },
  { name: "Web 安全", x: 66, y: 42, level: 2 },
  { name: "数据库", x: 78, y: 68, level: 3 },
  { name: "Linux", x: 24, y: 74, level: 3 },
  { name: "CTF", x: 51, y: 62, level: 2 },
  { name: "人工智能", x: 34, y: 14, level: 3 },
];

export const knowledgeUpdates = [
  { time: "09:25", type: "新增图书", content: "网络空间安全导论等 38 条书目入库", status: "完成" },
  { time: "09:18", type: "新增教材章节", content: "计算机网络课程第 3-5 章目录解析完成", status: "完成" },
  { time: "09:06", type: "PDF 切片完成", content: "考研数学讲义 126 个片段完成质量检查", status: "完成" },
  { time: "08:52", type: "向量索引更新", content: "新增 18,420 个嵌入向量，索引版本 v2026.05.04-2", status: "完成" },
  { time: "08:31", type: "低质量片段清理", content: "清理重复页眉页脚与扫描噪声片段 3,604 条", status: "完成" },
];

export const bookSummary = [
  { label: "图书总量", value: "1,128,640" },
  { label: "可借数量", value: "742,380" },
  { label: "在借数量", value: "286,912" },
  { label: "预约数量", value: "38,642" },
  { label: "逾期数量", value: "1,286" },
];

export const bookRows = [
  {
    title: "计算机网络：自顶向下方法",
    category: "计算机网络",
    callNo: "TP393/634.2",
    location: "三楼 A 区 12 架",
    status: "可借",
    borrows: 842,
    aiIndex: 96,
  },
  {
    title: "网络安全基础与实践",
    category: "网络安全",
    callNo: "TP309/128.7",
    location: "三楼 B 区 08 架",
    status: "可借",
    borrows: 798,
    aiIndex: 94,
  },
  {
    title: "Web 安全攻防：渗透测试实战指南",
    category: "CTF/竞赛",
    callNo: "TP393.08/226",
    location: "四楼电子阅览区 03 架",
    status: "预约中",
    borrows: 731,
    aiIndex: 92,
  },
  {
    title: "高等数学辅导讲义",
    category: "考研数学",
    callNo: "O13/778.1",
    location: "五楼考研专区 15 架",
    status: "紧张",
    borrows: 772,
    aiIndex: 90,
  },
  {
    title: "数据库系统概论",
    category: "软件工程",
    callNo: "TP311.13/081",
    location: "三楼 A 区 09 架",
    status: "可借",
    borrows: 694,
    aiIndex: 88,
  },
  {
    title: "Python 编程：从入门到实践",
    category: "程序设计",
    callNo: "TP311.561/419",
    location: "四楼电子阅览区 01 架",
    status: "可借",
    borrows: 668,
    aiIndex: 87,
  },
  {
    title: "大学英语六级真题详解",
    category: "英语考试",
    callNo: "H319.6/902",
    location: "二楼语言学习区 05 架",
    status: "可借",
    borrows: 612,
    aiIndex: 84,
  },
  {
    title: "现代控制理论基础",
    category: "自动化",
    callNo: "TP13/228",
    location: "三楼 C 区 04 架",
    status: "低频",
    borrows: 68,
    aiIndex: 41,
  },
];

export const bookSuggestions = [
  { title: "复本不足", detail: "网络安全、考研数学、英语四六级方向近 14 日预约等待持续高于阈值。", level: "warning" },
  { title: "长期低频", detail: "自动化、采矿工程部分旧版教材 90 日借阅不足 3 次，建议进入复核清单。", level: "neutral" },
  { title: "增长明显", detail: "人工智能、数据安全、Python 自动化方向环比增长超过 24%。", level: "success" },
  { title: "新生书单", detail: "建议将计算机网络、Linux、Python、大学英语学习策略加入新生推荐书单。", level: "info" },
];

export const borrowStats = [
  { label: "今日借阅", value: "4,386", change: "+6.7%" },
  { label: "今日归还", value: "4,040", change: "+4.2%" },
  { label: "续借申请", value: "936", change: "+13.1%" },
  { label: "逾期风险", value: "286", change: "+3.6%" },
];

export const collegeDistribution = [
  { name: "信息工程学院", value: 28 },
  { name: "机械与动力工程学院", value: 16 },
  { name: "能源科学与工程学院", value: 13 },
  { name: "土木工程学院", value: 11 },
  { name: "安全科学与工程学院", value: 10 },
  { name: "经济管理学院", value: 9 },
  { name: "其他学院", value: 13 },
];

export const gradeDistribution = [
  { name: "大一", value: 24 },
  { name: "大二", value: 27 },
  { name: "大三", value: 21 },
  { name: "大四", value: 16 },
  { name: "研究生", value: 12 },
];

export const majorDistribution = [
  { name: "网络安全", value: 21 },
  { name: "人工智能", value: 16 },
  { name: "软件工程", value: 15 },
  { name: "采矿工程", value: 12 },
  { name: "机械设计", value: 11 },
  { name: "英语与考研", value: 25 },
];

export const bookCategoryDistribution = [
  { name: "计算机", value: 26 },
  { name: "考研资料", value: 22 },
  { name: "英语学习", value: 14 },
  { name: "工程技术", value: 18 },
  { name: "经管人文", value: 12 },
  { name: "论文写作", value: 8 },
];

export const borrowRiskAlerts = [
  { title: "逾期高风险用户", detail: "脱敏编号 U-21xx 群体中 37 人临近 3 日逾期阈值。", status: "warning" },
  { title: "热门书排队过长", detail: "考研数学与 Web 安全类 9 本图书预约等待超过 40 人。", status: "danger" },
  { title: "高频借阅方向变化", detail: "信息工程学院网络安全方向借阅占比本周上升 7.8%。", status: "info" },
];

export const weeklyBorrowSummary = [
  "本周计算机类、考研数学类、英语四六级类借阅增长明显，计算机类借阅量较上周提升 18.6%。",
  "网络安全相关书籍在信息工程学院学生中使用频率较高，CTF、Web 安全、Linux 运维关键词检索同步上升。",
  "晚间 19:00 后续借请求明显增加，系统建议在 18:30 前推送续借提醒，降低逾期概率。",
];

export type SeatStatus = "free" | "reserved" | "using" | "disabled";

function createSeats(total: number, offset: number) {
  return Array.from({ length: total }, (_, index) => {
    const marker = (index + offset) % 12;
    const status: SeatStatus =
      marker <= 3 ? "using" : marker <= 5 ? "reserved" : marker === 11 ? "disabled" : "free";
    return {
      id: `${offset}-${String(index + 1).padStart(3, "0")}`,
      status,
    };
  });
}

export const seatStats = [
  { label: "当前座位总数", value: "4,860" },
  { label: "已预约", value: "1,326" },
  { label: "使用中", value: "2,492" },
  { label: "空闲", value: "962" },
  { label: "违约数量", value: "80" },
];

export const timeSlots = ["08:00-10:00", "10:00-12:00", "14:00-16:00", "16:00-18:00", "19:00-21:00"];

export const seatFloors = [
  { name: "一楼公共区", total: 720, pressure: 62, seats: createSeats(84, 1) },
  { name: "二楼中文图书区", total: 920, pressure: 71, seats: createSeats(96, 2) },
  { name: "三楼自习区", total: 1240, pressure: 91, seats: createSeats(120, 3) },
  { name: "四楼电子阅览区", total: 780, pressure: 76, seats: createSeats(84, 4) },
  { name: "五楼考研专区", total: 1200, pressure: 94, seats: createSeats(120, 5) },
];

export const trafficStats = [
  { label: "今日入馆人数", value: "18,742", change: "+12.4%" },
  { label: "当前馆内人数", value: "5,618", change: "+8.1%" },
  { label: "峰值人数", value: "6,920", change: "+10.6%" },
  { label: "平均停留时长", value: "3.8h", change: "+0.4h" },
];

export const hourlyTraffic = [
  { hour: "08:00", 入馆: 820, 出馆: 180, 馆内: 640 },
  { hour: "09:00", 入馆: 1640, 出馆: 420, 馆内: 1860 },
  { hour: "10:00", 入馆: 2180, 出馆: 760, 馆内: 3280 },
  { hour: "11:00", 入馆: 1460, 出馆: 1120, 馆内: 3620 },
  { hour: "12:00", 入馆: 860, 出馆: 1540, 馆内: 2940 },
  { hour: "14:00", 入馆: 2210, 出馆: 890, 馆内: 4260 },
  { hour: "15:00", 入馆: 2460, 出馆: 940, 馆内: 5780 },
  { hour: "16:00", 入馆: 1980, 出馆: 1200, 馆内: 6560 },
  { hour: "17:00", 入馆: 1120, 出馆: 1880, 馆内: 5800 },
  { hour: "19:00", 入馆: 2520, 出馆: 780, 馆内: 7540 },
  { hour: "20:00", 入馆: 1640, 出馆: 1260, 馆内: 7920 },
  { hour: "21:00", 入馆: 420, 出馆: 2310, 馆内: 6030 },
];

export const entranceFlow = [
  { name: "东门入口", 入馆: 6420, 出馆: 5120, latency: "1.8s" },
  { name: "西门入口", 入馆: 3840, 出馆: 3260, latency: "2.1s" },
  { name: "南门入口", 入馆: 4920, 出馆: 4360, latency: "1.4s" },
  { name: "地下通道", 入馆: 3562, 出馆: 3020, latency: "3.6s" },
];

export const floorHeat = [
  { floor: "一楼公共区", heat: 62, stay: "2.1h" },
  { floor: "二楼中文图书区", heat: 71, stay: "3.2h" },
  { floor: "三楼自习区", heat: 91, stay: "4.6h" },
  { floor: "四楼电子阅览区", heat: 76, stay: "3.5h" },
  { floor: "五楼考研专区", heat: 94, stay: "5.1h" },
];

export const trafficAnomalies = [
  { title: "某时间段人流突增", detail: "19:00-19:20 入馆速率较均值高 38%，已标记为晚间高峰。", status: "warning" },
  { title: "某楼层停留人数异常", detail: "五楼考研专区停留人数连续 42 分钟高于容量建议线。", status: "danger" },
  { title: "某入口设备同步延迟", detail: "地下通道设备同步延迟 3.6s，暂未影响统计完整性。", status: "info" },
];

export const studentProfile = {
  name: "脱敏学生 S-2048",
  college: "信息工程学院",
  major: "网络空间安全",
  grade: "大一",
  credit: 96,
  currentSeat: "三楼自习区 C3-081",
};

export const studentBorrows = [
  { title: "计算机网络：自顶向下方法", due: "2026-05-18", status: "在借", location: "三楼 A 区" },
  { title: "Python 编程：从入门到实践", due: "2026-05-11", status: "在借", location: "四楼电子阅览区" },
  { title: "大学英语四级词汇", due: "2026-05-08", status: "临近到期", location: "二楼语言学习区" },
];

export const studentReservations = [
  { title: "Web 安全攻防：渗透测试实战指南", queue: 12, status: "排队中" },
  { title: "网络安全基础与实践", queue: 0, status: "可取书" },
  { title: "五楼考研专区 F5-116", queue: 0, status: "今晚 19:00" },
];

export const studentRecommendations = [
  { title: "计算机网络", location: "三楼 A 区 12 架", status: "可借", reason: "先掌握 TCP/IP、HTTP 与 DNS，后续学习 Web 安全更顺。" },
  { title: "网络安全基础", location: "三楼 B 区 08 架", status: "可借", reason: "建立安全模型、常见漏洞和攻防流程的整体认识。" },
  { title: "Web 安全攻防", location: "四楼电子阅览区 03 架", status: "预约中", reason: "配合 CTF Web 方向训练，适合第二阶段阅读。" },
  { title: "Linux 命令行与 Shell 脚本", location: "四楼电子阅览区 06 架", status: "可借", reason: "用于环境搭建、脚本处理和日志分析。" },
];

export const studentRoadmap = [
  { week: "第 1 周", focus: "计算机网络基础", tasks: "HTTP、DNS、TCP 三个主题，完成 2 章阅读与 20 道练习。" },
  { week: "第 2 周", focus: "Linux 与 Python 脚本", tasks: "熟悉文件、权限、管道、requests 与正则表达式。" },
  { week: "第 3 周", focus: "Web 漏洞入门", tasks: "理解 SQL 注入、XSS、文件上传，整理漏洞笔记。" },
  { week: "第 4 周", focus: "CTF 题目复盘", tasks: "按题型建立个人知识库，沉淀关键词和参考书页码。" },
];

export const studentActivity = [
  { label: "最近浏览", value: "网络安全、CTF、Linux、Python" },
  { label: "到馆记录", value: "近 7 日到馆 5 次，平均停留 3.6h" },
  { label: "课程相关资源", value: "计算机网络、程序设计基础、大学英语" },
  { label: "个人知识库收藏", value: "已收藏 46 条书摘与 12 个章节" },
  { label: "逾期提醒", value: "1 本图书 4 天后到期" },
  { label: "座位推荐", value: "三楼 C 区、四楼电子阅览区可用率较高" },
];

export const agentStatuses = [
  { name: "检索 Agent", status: "running", calls: 128640, avgToken: 1840, success: 99.1, task: "馆藏召回与知识片段定位", queue: 18, latency: "486ms" },
  { name: "阅读摘要 Agent", status: "running", calls: 82420, avgToken: 12600, success: 98.4, task: "教材章节摘要生成", queue: 26, latency: "1.8s" },
  { name: "借阅分析 Agent", status: "running", calls: 22180, avgToken: 4200, success: 99.0, task: "借阅趋势分析", queue: 7, latency: "920ms" },
  { name: "座位预测 Agent", status: "running", calls: 18490, avgToken: 3600, success: 97.8, task: "晚间压力预测", queue: 11, latency: "1.1s" },
  { name: "流量分析 Agent", status: "running", calls: 16240, avgToken: 3900, success: 98.2, task: "入口流量异常检测", queue: 6, latency: "1.0s" },
  { name: "推荐 Agent", status: "running", calls: 76480, avgToken: 5200, success: 98.7, task: "个性化书单排序", queue: 31, latency: "1.4s" },
  { name: "管理报告 Agent", status: "running", calls: 6920, avgToken: 26800, success: 97.6, task: "馆藏优化周报", queue: 4, latency: "3.2s" },
  { name: "风险巡检 Agent", status: "running", calls: 19880, avgToken: 4800, success: 99.3, task: "预约违约风险巡检", queue: 9, latency: "940ms" },
  { name: "采购建议 Agent", status: "running", calls: 8340, avgToken: 9300, success: 98.1, task: "热门书复本测算", queue: 12, latency: "1.7s" },
  { name: "学习路径规划 Agent", status: "running", calls: 42460, avgToken: 7800, success: 98.9, task: "CTF 入门路径规划", queue: 16, latency: "1.9s" },
  { name: "用户画像 Agent", status: "running", calls: 28420, avgToken: 5100, success: 99.2, task: "脱敏画像聚类", queue: 10, latency: "1.2s" },
  { name: "日志审计 Agent", status: "running", calls: 38490, avgToken: 2200, success: 99.6, task: "模型输出安全检查", queue: 5, latency: "680ms" },
];

export const agentWorkflow = [
  "用户问题",
  "意图识别",
  "检索 Agent",
  "知识库召回",
  "阅读 Agent 摘要",
  "推荐 Agent 排序",
  "问答 Agent 生成",
  "审计 Agent 检查",
  "返回结果",
];

export const agentLogs = [
  "[09:41] 检索 Agent 完成馆藏召回，命中 18 条",
  "[09:42] 阅读 Agent 完成 6 个章节摘要",
  "[09:42] 推荐 Agent 生成个性化书单",
  "[09:43] 审计 Agent 完成回答安全检查",
  "[09:44] 座位 Agent 更新三楼自习区压力预测",
  "[09:45] 管理报告 Agent 写入本周借阅摘要草稿",
  "[09:46] 采购建议 Agent 标记 9 本复本不足图书",
  "[09:47] 日志审计 Agent 完成 2,184 条调用抽检",
];

export const tokenStats = [
  { label: "月度预计 token", value: "约 5 亿" },
  { label: "日均 token", value: "约 1600 万" },
  { label: "高峰日 token", value: "约 2500 万" },
  { label: "月度请求量", value: "约 240 万次" },
  { label: "平均单次完整链路 token", value: "约 2,000-8,000" },
  { label: "文档处理任务平均 token", value: "约 50,000-200,000" },
];

export const tokenSources = [
  { name: "馆藏资料清洗与切片", value: 22 },
  { name: "PDF/教材/论文摘要", value: 18 },
  { name: "学生多轮问答", value: 24 },
  { name: "多 Agent 协作推理", value: 16 },
  { name: "个性化推荐", value: 8 },
  { name: "管理报告生成", value: 7 },
  { name: "日志审计与安全检查", value: 5 },
];

export const tokenDailyTrend = [
  { day: "04-28", token: 13.8, request: 188 },
  { day: "04-29", token: 15.6, request: 205 },
  { day: "04-30", token: 17.4, request: 224 },
  { day: "05-01", token: 11.2, request: 150 },
  { day: "05-02", token: 13.6, request: 178 },
  { day: "05-03", token: 18.9, request: 232 },
  { day: "05-04", token: 21.6, request: 246 },
];

export const auditLogs = [
  { time: "09:30:12", type: "知识库更新", content: "知识库索引更新完成，用时 18 分 42 秒", source: "向量索引服务", status: "成功" },
  { time: "09:28:46", type: "异常提醒", content: "检测到三楼预约违约率异常升高", source: "风险巡检 Agent", status: "预警" },
  { time: "09:25:31", type: "摘要生成", content: "已对 1264 条新入库书目完成摘要生成", source: "阅读摘要 Agent", status: "成功" },
  { time: "09:21:02", type: "报告生成", content: "已完成本周借阅趋势报告", source: "管理报告 Agent", status: "成功" },
  { time: "09:19:48", type: "数据同步", content: "已同步座位预约系统数据，延迟 2.1s", source: "座位预约接口", status: "成功" },
  { time: "09:17:14", type: "API 调用", content: "学生端自然语言检索链路完成，命中 12 条馆藏引用", source: "学习问答服务", status: "成功" },
  { time: "09:13:52", type: "权限检查", content: "管理员 A-07 访问采购建议报表，权限校验通过", source: "统一身份认证", status: "成功" },
  { time: "09:10:07", type: "脱敏检查", content: "借阅统计批处理完成，未输出可识别学生隐私字段", source: "数据治理任务", status: "成功" },
  { time: "09:08:23", type: "模型审计", content: "模型输出审计抽检 240 条，发现 0 条高风险内容", source: "日志审计 Agent", status: "成功" },
  { time: "09:04:16", type: "设备同步", content: "地下通道闸机同步延迟升至 3.6s，已进入观察队列", source: "入口设备网关", status: "观察" },
];

export const apiLogs = [
  { endpoint: "/api/knowledge/search", p95: "1.42s", calls: 126490, status: "正常" },
  { endpoint: "/api/borrow/summary", p95: "680ms", calls: 31840, status: "正常" },
  { endpoint: "/api/seat/predict", p95: "1.16s", calls: 18490, status: "正常" },
  { endpoint: "/api/agent/dispatch", p95: "2.84s", calls: 82460, status: "正常" },
  { endpoint: "/api/traffic/sync", p95: "3.60s", calls: 6420, status: "观察" },
];

export const recommendationStrategies = [
  { name: "新生入门书单", coverage: 92, click: 18.6, desc: "按专业方向、课程难度和可借状态生成阶段性书单。" },
  { name: "课程伴读推荐", coverage: 88, click: 21.4, desc: "匹配课程资料、教材章节和馆藏书目。" },
  { name: "竞赛训练路径", coverage: 76, click: 24.8, desc: "面向 CTF、数学建模、电子设计等场景组合资源。" },
  { name: "考研资料补齐", coverage: 81, click: 19.2, desc: "结合高频借阅与复习阶段推荐真题、讲义和辅导书。" },
];

export const purchaseSuggestions = [
  { title: "Web 安全攻防：渗透测试实战指南", category: "网络安全", current: 6, suggest: 14, wait: 42, reason: "预约等待高，竞赛关键词增长 36%。" },
  { title: "高等数学辅导讲义", category: "考研数学", current: 18, suggest: 36, wait: 55, reason: "期末与考研周期重叠，复本不足明显。" },
  { title: "人工智能导论", category: "人工智能", current: 9, suggest: 18, wait: 31, reason: "课程资料检索量持续上升。" },
  { title: "Linux 命令行与 Shell 脚本", category: "操作系统", current: 8, suggest: 16, wait: 29, reason: "网络安全、软件工程方向共同高频借阅。" },
  { title: "大学英语六级真题详解", category: "英语考试", current: 24, suggest: 34, wait: 26, reason: "考试周期前 30 日借阅显著增长。" },
];

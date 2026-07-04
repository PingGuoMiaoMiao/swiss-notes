export const NAV_LINKS = ["首页", "作品", "联系"];

export const MATRIX = [
  {
    header: "核心技术",
    items: ["分布式系统", "并发编程", "云架构"],
  },
  {
    header: "应用数学",
    items: ["图论", "概率建模", "时间复杂度分析"],
  },
  {
    header: "工具链",
    items: ["Docker / K8s", "Terraform", "Rust + Go"],
  },
];

export const PROJECTS = [
  {
    num: "01",
    name: "StarryOS",
    year: "2024",
    problem: "从零构建一个可运行在 RISC-V 上的 Rust 操作系统内核。",
    outcome: "实现进程管理、内存管理、文件系统等核心模块，支持宏内核架构。",
    url: "https://github.com/PingGuoMiaoMiao/StarryOS",
  },
  {
    num: "02",
    name: "MoonVision",
    year: "2024",
    problem: "MoonBit 生态缺乏可复用的图像处理与计算机视觉基础库。",
    outcome: "开发 MoonBit-native 轻量 CV 算法库，填补生态空白。",
    url: "https://github.com/PingGuoMiaoMiao/MoonVision",
  },
  {
    num: "03",
    name: "tpu-mlir",
    year: "2024",
    problem: "Sophgo TPU 需要高效的机器学习编译器来优化模型部署。",
    outcome: "基于 MLIR 框架构建机器学习编译器，实现 TPU 后端代码生成。",
    url: "https://github.com/PingGuoMiaoMiao/tpu-mlir",
  },
  {
    num: "04",
    name: "Pudplanet",
    year: "2024",
    problem: "需要构建一个类似 B 站的自研视频平台全栈应用。",
    outcome: "完成前后端全栈开发，支持视频上传、播放、用户交互等功能。",
    url: "https://github.com/PingGuoMiaoMiao/Pudplanet",
  },
  {
    num: "05",
    name: "rCore-Tutorial-v3",
    year: "2023",
    problem: "需要一个教程来学习如何用 Rust 从零编写 RISC-V 操作系统。",
    outcome: "完成完整 OS 教程，涵盖启动、内存管理、进程调度、设备驱动。",
    url: "https://github.com/PingGuoMiaoMiao/rCore-Tutorial-v3",
  },
];

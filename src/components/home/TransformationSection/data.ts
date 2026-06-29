import {
  AlertTriangle,
  Clock3,
  ShieldAlert,
  Database,
  Users,
  FileWarning,
  CheckCircle2,
  Cpu,
  Workflow,
  ShieldCheck,
  BrainCircuit,
  BarChart3,
} from "lucide-react";

export const comparison = {
  before: {
    title: "Without Virtual Galaxy",
    iconColor: "#E10600",

    items: [
      {
        icon: AlertTriangle,
        text: "Isolated business applications",
      },
      {
        icon: Database,
        text: "Scattered and inconsistent data",
      },
      {
        icon: ShieldAlert,
        text: "Security risks across systems",
      },
      {
        icon: Clock3,
        text: "Slow operational workflows",
      },
      {
        icon: Users,
        text: "Teams working in silos",
      },
      {
        icon: FileWarning,
        text: "Decisions based on incomplete information",
      },
    ],
  },

  after: {
    title: "With Virtual Galaxy",
    iconColor: "#10B981",

    items: [
      {
        icon: CheckCircle2,
        text: "Unified enterprise ecosystem",
      },
      {
        icon: Cpu,
        text: "AI-powered intelligent automation",
      },
      {
        icon: Workflow,
        text: "Streamlined business processes",
      },
      {
        icon: ShieldCheck,
        text: "Enterprise-grade security",
      },
      {
        icon: BrainCircuit,
        text: "Real-time insights & decision support",
      },
      {
        icon: BarChart3,
        text: "Scalable digital transformation",
      },
    ],
  },
};
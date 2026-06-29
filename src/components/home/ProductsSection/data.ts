import bankingBg from "@/assets/images/Products/e-banker-bg.png";
import autopsyBg from "@/assets/images/Products/e-autopsy-bg.png";
import cyberBg from "@/assets/images/Products/cyber-sentinel-bg.png";
import misBg from "@/assets/images/Products/i-mis-bg.png";

import bankerLogo from "@/assets/images/Products/e-banker-logo.png";
import autopsyLogo from "@/assets/images/Products/e-autopsy-logo.png";
import cyberLogo from "@/assets/images/Products/cyber-sentinel-logo.png";
import misLogo from "@/assets/images/Products/i-mis-logo.png";

export const products = [
  {
    id: "01",

    title: "Core Banking Solution",

    category: "Banking",

    image: bankingBg,

    logo: bankerLogo,

    accent: "#E10600",

    description:
      "Empower your financial institution with a secure, scalable and intelligent banking platform built for modern banking operations.",

    features: [
      "Real-Time Processing",
      "Secure Transactions",
      "Cloud Ready",
    ],
  },

  {
    id: "02",

    title: "Post-Mortem Management",

    category: "Healthcare",

    image: autopsyBg,

    logo: autopsyLogo,

    accent: "#0EA5E9",

    description:
      "Digitize forensic documentation, evidence tracking and post-mortem workflows through one secure platform.",

    features: [
      "Digital Workflow",
      "Evidence Tracking",
      "Chain of Custody",
    ],
  },

  {
    id: "03",

    title: "End-to-End Cyber Security",

    category: "Security",

    image: cyberBg,

    logo: cyberLogo,

    accent: "#2563EB",

    description:
      "Protect enterprise infrastructure with intelligent monitoring, threat detection and compliance-ready cybersecurity.",

    features: [
      "Threat Detection",
      "Real-Time Monitoring",
      "Compliance",
    ],
  },

  {
    id: "04",

    title: "MIS Solution",

    category: "Enterprise",

    image: misBg,

    logo: misLogo,

    accent: "#8B5CF6",

    description:
      "Transform enterprise data into actionable intelligence through dashboards, analytics and automated reporting.",

    features: [
      "Business Insights",
      "Automation",
      "Custom Dashboards",
    ],
  },
];
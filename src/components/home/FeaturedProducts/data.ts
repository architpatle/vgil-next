import bankingImg from "@/assets/images/Products/Product Core Banking@2x.png";
import autopsyImg from "@/assets/images/Products/Product Autopsy@2x.png";
import cyberImg from "@/assets/images/Products/Product Cyber security@2x.png";
import misImg from "@/assets/images/Products/Product MIS Solution@2x.png";

export const products = [
  {
    id: "01",
    title: "Core Banking Solution",
    category: "Banking",

    image: bankingImg,

    description:
      "Empower financial institutions with a secure, scalable and intelligent core banking ecosystem built for modern digital banking.",

    features: [
      "Real-Time Processing",
      "Secure Transactions",
      "Cloud Ready",
    ],

    accent: "#E10600",
  },

  {
    id: "02",
    title: "Post-Mortem Management",

    category: "Healthcare",

    image: autopsyImg,

    description:
      "Digitize forensic workflows through intelligent documentation, evidence tracking and secure case management.",

    features: [
      "Digital Workflow",
      "Evidence Tracking",
      "Chain of Custody",
    ],

    accent: "#10B981",
  },

  {
    id: "03",

    title: "Cyber Security Suite",

    category: "Security",

    image: cyberImg,

    description:
      "Enterprise-grade cybersecurity platform with continuous monitoring, vulnerability assessment and threat detection.",

    features: [
      "Threat Detection",
      "Real-Time Monitoring",
      "Compliance",
    ],

    accent: "#2563EB",
  },

  {
    id: "04",

    title: "MIS Solution",

    category: "Enterprise",

    image: misImg,

    description:
      "Transform operational data into actionable intelligence through custom dashboards and advanced reporting.",

    features: [
      "Custom Dashboards",
      "Automation",
      "Business Insights",
    ],

    accent: "#F59E0B",
  },
];
import { BarChart3, Brain, Eye, Compass, Zap, ArrowRight } from "lucide-react";

export const enhancedServices = [
  {
    id: "01",
    label: "Define",
    title: "Data Strategy",
    description: "Transform raw data into actionable business intelligence with comprehensive strategy development.",
    icon: BarChart3,
    color: "from-blue-500 to-blue-700",
    features: [
      "Data Assessment",
      "Strategy Development", 
      "Roadmap Planning",
      "Governance Framework"
    ]
  },
  {
    id: "02", 
    label: "Analyze",
    title: "Advanced Analytics",
    description: "Deep dive into data patterns and insights using cutting-edge analytical methodologies.",
    icon: Brain,
    color: "from-purple-500 to-purple-700",
    features: [
      "Predictive Analytics",
      "Statistical Modeling",
      "Data Mining",
      "Performance Metrics"
    ]
  },
  {
    id: "03",
    label: "Visualize", 
    title: "Data Visualization",
    description: "Create compelling visual narratives that make complex data understandable and actionable.",
    icon: Eye,
    color: "from-green-500 to-green-700",
    features: [
      "Dashboard Design",
      "Interactive Reports",
      "Custom Visualizations",
      "Real-time Analytics"
    ]
  },
  {
    id: "04",
    label: "Explore",
    title: "Data Discovery",
    description: "Uncover hidden patterns and opportunities through comprehensive data exploration techniques.",
    icon: Compass,
    color: "from-orange-500 to-orange-700", 
    features: [
      "Pattern Recognition",
      "Anomaly Detection",
      "Trend Analysis",
      "Insight Generation"
    ]
  },
  {
    id: "05",
    label: "AI-First Approach",
    title: "Intelligent Transformation",
    description: "IT to AI transformation, AI-native roles, and generative AI programs for enterprise teams.",
    icon: Zap,
    color: "from-red-500 to-red-700",
    features: [
      "IT to AI",
      "AI Native Roles", 
      "Gen AI",
      "Enterprise Programs"
    ]
  }
];

export const serviceCategories = [
  {
    title: "Data Foundation",
    services: ["01", "02"]
  },
  {
    title: "Intelligence Layer", 
    services: ["03", "04"]
  },
  {
    title: "AI Transformation",
    services: ["05"]
  }
];

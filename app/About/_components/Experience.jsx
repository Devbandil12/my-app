"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  Database,
  Shield,
  Zap,
  FileText,
  Workflow,
  CreditCard,
  UserCheck,
  Bot,
  Users,
  Server,
} from "lucide-react";

const milestones = [
  {
    icon: Server,
    title: "Multi-Tenant SaaS Platform",
    description:
      "Architected and developed a multi-tenant SaaS platform with strict tenant isolation, dynamic database management, and secure authentication, supporting enterprise customers on a shared infrastructure.",
    accent: "border-blue-500",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    dotBorder: "border-blue-500",
    glow: "shadow-blue-500/20",
  },
  {
    icon: Shield,
    title: "Dynamic RBAC & Permission Engine",
    description:
      "Designed a dynamic RBAC and permission engine enabling runtime role configuration, hierarchical access control, and fine-grained authorization across multiple business modules.",
    accent: "border-purple-500",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    dotBorder: "border-purple-500",
    glow: "shadow-purple-500/20",
  },
  {
    icon: Zap,
    title: "75% API Performance Boost",
    description:
      "Optimized backend APIs and MongoDB queries using indexing, aggregation optimization, caching, and pagination, reducing average response time by 75% while improving system throughput under concurrent load.",
    accent: "border-green-500",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    dotBorder: "border-green-500",
    glow: "shadow-green-500/20",
    stat: "2s → 500ms",
  },
  {
    icon: Database,
    title: "Redis Bulk Import Pipeline",
    description:
      "Built a Redis-powered asynchronous bulk import pipeline capable of processing thousands of Excel records without request timeouts, reducing import latency by 70%.",
    accent: "border-red-500",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
    dotBorder: "border-red-500",
    glow: "shadow-red-500/20",
    stat: "70% latency reduction",
  },
  {
    icon: FileText,
    title: "Centralized Audit Logging",
    description:
      "Engineered a centralized audit logging framework that captured all critical user and system activities, significantly improving debugging, compliance tracking, and operational visibility.",
    accent: "border-yellow-500",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
    dotBorder: "border-yellow-500",
    glow: "shadow-yellow-500/20",
  },
  {
    icon: Workflow,
    title: "Configurable Workflow Engine",
    description:
      "Developed a configurable workflow and approval engine supporting dynamic forms, conditional approvals, and customizable business processes without code changes.",
    accent: "border-orange-500",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    dotBorder: "border-orange-500",
    glow: "shadow-orange-500/20",
  },
  {
    icon: CreditCard,
    title: "Tenant-Aware Billing System",
    description:
      "Implemented tenant-aware billing and credit management, supporting recurring subscriptions and usage-based AI billing with automated credit deduction.",
    accent: "border-teal-500",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    dotBorder: "border-teal-500",
    glow: "shadow-teal-500/20",
  },
  {
    icon: UserCheck,
    title: "Secure User Impersonation",
    description:
      "Built secure user impersonation (Login-As) functionality for enterprise support teams, reducing customer issue resolution time by 40% while maintaining complete audit trails.",
    accent: "border-pink-500",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    dotBorder: "border-pink-500",
    glow: "shadow-pink-500/20",
    stat: "40% faster resolution",
  },
  {
    icon: Bot,
    title: "AI-Powered Feature Integration",
    description:
      "Integrated AI-powered features using LLM APIs with usage tracking, credit consumption, and scalable backend services for production workloads.",
    accent: "border-indigo-500",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    dotBorder: "border-indigo-500",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: Users,
    title: "Agile Feature Ownership",
    description:
      "Collaborated closely with product managers and designers in an Agile environment, owning features from architecture and implementation through testing, deployment, and production support.",
    accent: "border-cyan-500",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    dotBorder: "border-cyan-500",
    glow: "shadow-cyan-500/20",
  },
];

const cardVariants = {
  hidden: (dir) => ({ opacity: 0, x: dir === "left" ? -50 : 50 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const mobileCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section className="w-full py-16 px-4 text-white">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="w-fit mb-3">
          <h2 className="text-2xl md:text-5xl font-bold text-center">
            MY <span className="text-blue-500">Experience</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120%" }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.3 }}
            className="h-[5px] mt-1 bg-blue-500 md:-ml-[1.5rem] -ml-[0.7rem]"
          />
        </div>
        <p className="text-gray-400 mt-3 text-sm md:text-base text-center">
          1 year of building production-grade systems
        </p>
      </div>

      {/* Company Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-xl mx-auto mb-12 rounded-2xl border border-blue-500/40 bg-blue-500/5 p-5 shadow-lg shadow-blue-500/10"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-blue-500/10 shrink-0">
            <Building2 className="text-blue-400 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-snug">
              Full Stack Software Engineer
            </h3>
            <p className="text-blue-400 font-semibold text-sm mt-0.5">
              Digimonk Technology
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-xs mt-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>July 2025 – Present · 1 yr</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── MOBILE / TABLET timeline (< lg) ── */}
      <div className="lg:hidden max-w-2xl mx-auto">
        {milestones.map((m, i) => {
          const Icon = m.icon;
          const isLast = i === milestones.length - 1;
          return (
            <div key={i} className="flex gap-3 sm:gap-4">
              {/* Left rail: dot + connecting line */}
              <div className="flex flex-col items-center shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 ${m.dotBorder} ${m.iconBg} flex items-center justify-center shrink-0 z-10`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${m.iconColor}`} />
                </motion.div>
                {!isLast && (
                  <div className="w-px flex-1 mt-1 bg-gradient-to-b from-gray-600 to-gray-800 min-h-[1.5rem]" />
                )}
              </div>

              {/* Card */}
              <motion.div
                custom="right"
                variants={mobileCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="flex-1 mb-6"
              >
                <MilestoneCard m={m} Icon={Icon} />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP alternating timeline (lg+) ── */}
      <div className="hidden lg:block max-w-5xl mx-auto relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.05 }}
            style={{ originY: 0 }}
            className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-50"
          />
        </div>

        <div className="flex flex-col gap-8">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            const Icon = m.icon;
            return (
              <div key={i} className="grid grid-cols-[1fr_64px_1fr] items-center">
                {/* Left slot */}
                <div className="pr-6 flex justify-end">
                  {isLeft ? (
                    <motion.div
                      custom="left"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className="w-full max-w-md"
                    >
                      <MilestoneCard m={m} Icon={Icon} />
                    </motion.div>
                  ) : null}
                </div>

                {/* Center dot */}
                <div className="flex items-center justify-center z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={`w-10 h-10 rounded-full border-2 ${m.dotBorder} ${m.iconBg} flex items-center justify-center shadow-lg ${m.glow}`}
                  >
                    <Icon className={`w-4 h-4 ${m.iconColor}`} />
                  </motion.div>
                </div>

                {/* Right slot */}
                <div className="pl-6 flex justify-start">
                  {!isLeft ? (
                    <motion.div
                      custom="right"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className="w-full max-w-md"
                    >
                      <MilestoneCard m={m} Icon={Icon} />
                    </motion.div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MilestoneCard({ m, Icon }) {
  return (
    <div
      className={`rounded-xl border ${m.accent} bg-black-2/60 p-4 sm:p-5 shadow-md ${m.glow} hover:scale-[1.02] transition-transform duration-300 w-full`}
    >
      <div className="flex items-start gap-3 mb-2">
        <div className={`p-2 rounded-lg ${m.iconBg} shrink-0 mt-0.5`}>
          <Icon className={`w-4 h-4 ${m.iconColor}`} />
        </div>
        <h4 className="font-semibold text-white text-sm sm:text-base leading-snug">
          {m.title}
        </h4>
      </div>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
        {m.description}
      </p>
      {m.stat && (
        <div
          className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold ${m.iconBg} ${m.iconColor} border ${m.accent}`}
        >
          {m.stat}
        </div>
      )}
    </div>
  );
}

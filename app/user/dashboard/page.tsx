"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  CreditCard,
  Activity,
  ArrowRight,
} from "lucide-react";
import UserPageGate from "../../components/user/UserPageGate";
import { mockActivity, mockCases, mockPayments } from "../mockData";

function StatCard(
  props: Readonly<{
    label: string;
    value: string;
    hint: string;
    icon: React.ReactNode;
  }>
) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-gray-500">{props.label}</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">{props.value}</p>
          <p className="mt-1 text-xs text-gray-500">{props.hint}</p>
        </div>
        <div className="rounded-xl bg-blue-50 p-2.5 text-blue-700">{props.icon}</div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const openCases = mockCases.filter((c) => c.status !== "Closed").length;
  const pendingPay = mockPayments.filter((p) => p.status === "Pending").length;

  return (
    <UserPageGate>
      <div className="py-8 md:py-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-blue-900 mb-2">
              <LayoutDashboard className="h-9 w-9" aria-hidden />
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl">
              Your overview: recent activity, case progress, and payments in one place.
            </p>
          </div>
          <Link
            href="/lawyers-list"
            className="inline-flex items-center gap-2 self-start rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Find a lawyer <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          <StatCard
            label="Active cases"
            value={String(openCases)}
            hint="Excludes closed matters"
            icon={<Briefcase className="h-5 w-5" aria-hidden />}
          />
          <StatCard
            label="Pending payments"
            value={String(pendingPay)}
            hint="Complete payment to proceed"
            icon={<CreditCard className="h-5 w-5" aria-hidden />}
          />
          <StatCard
            label="This week"
            value={String(mockActivity.filter((a) => a.time.includes("days")).length)}
            hint="Recent actions in your account"
            icon={<Activity className="h-5 w-5" aria-hidden />}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-700" aria-hidden />
                Recent activity
              </h2>
            </div>
            <ul className="space-y-0 divide-y divide-gray-100">
              {mockActivity.map((item) => (
                <li key={item.id} className="py-4 first:pt-0">
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{item.detail}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                </li>
              ))}
            </ul>
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Quick links</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/user/cases" className="text-blue-600 hover:underline font-medium">
                    View all cases →
                  </Link>
                </li>
                <li>
                  <Link href="/user/payments" className="text-blue-600 hover:underline font-medium">
                    Payment history →
                  </Link>
                </li>
                <li>
                  <Link href="/user/help" className="text-blue-600 hover:underline font-medium">
                    Get help →
                  </Link>
                </li>
                <li>
                  <Link href="/user/faq" className="text-blue-600 hover:underline font-medium">
                    FAQs →
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/50 p-5 text-sm text-gray-700">
              <p className="font-medium text-blue-900 mb-1">Profile & documents</p>
              <p className="text-gray-600">
                Soon you can edit your profile and attach documents to cases from here.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </UserPageGate>
  );
}

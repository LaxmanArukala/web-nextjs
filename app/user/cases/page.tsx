"use client";

import { Briefcase } from "lucide-react";
import UserPageGate from "../../components/user/UserPageGate";
import { mockCases, type CaseStatus } from "../mockData";

function statusClass(status: CaseStatus): string {
  switch (status) {
    case "Open":
      return "bg-emerald-50 text-emerald-800 ring-emerald-600/20";
    case "In review":
      return "bg-amber-50 text-amber-800 ring-amber-600/20";
    case "Awaiting documents":
      return "bg-violet-50 text-violet-800 ring-violet-600/20";
    case "Closed":
      return "bg-gray-100 text-gray-700 ring-gray-600/15";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function MyCasesPage() {
  return (
    <UserPageGate>
      <div className="py-8 md:py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-blue-900 mb-2">
            <Briefcase className="h-9 w-9" aria-hidden />
            <h1 className="text-3xl font-bold tracking-tight">My Cases</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Matters linked to your account. Replace this list with API data from your backend.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Case ID</th>
                  <th className="px-4 py-3 font-semibold">Title</th>
                  <th className="px-4 py-3 font-semibold">Lawyer / firm</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Last updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockCases.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50/80">
                    <td className="px-4 py-3 font-mono text-gray-900">{row.id}</td>
                    <td className="px-4 py-3 text-gray-900">{row.title}</td>
                    <td className="px-4 py-3 text-gray-700">{row.lawyerOrFirm}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClass(row.status)}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.lastUpdated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </UserPageGate>
  );
}

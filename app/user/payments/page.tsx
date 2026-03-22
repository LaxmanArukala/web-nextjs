"use client";

import { CreditCard } from "lucide-react";
import UserPageGate from "../../components/user/UserPageGate";
import { mockPayments } from "../mockData";

function payStatusClass(s: (typeof mockPayments)[0]["status"]): string {
  switch (s) {
    case "Completed":
      return "bg-emerald-50 text-emerald-800 ring-emerald-600/20";
    case "Pending":
      return "bg-amber-50 text-amber-800 ring-amber-600/20";
    case "Failed":
      return "bg-red-50 text-red-800 ring-red-600/20";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function MyPaymentsPage() {
  return (
    <UserPageGate>
      <div className="py-8 md:py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-blue-900 mb-2">
            <CreditCard className="h-9 w-9" aria-hidden />
            <h1 className="text-3xl font-bold tracking-tight">My Payments</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Online payments made through LegalHub and who received them. Connect to your payment gateway
            records when ready.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Amount</th>
                  <th className="px-4 py-3 font-semibold">Paid to</th>
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                  <th className="px-4 py-3 font-semibold">Method</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockPayments.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50/80">
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{row.date}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.amount}</td>
                    <td className="px-4 py-3 text-gray-900">{row.paidTo}</td>
                    <td className="px-4 py-3 text-gray-600">{row.role}</td>
                    <td className="px-4 py-3 text-gray-700">{row.method}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${payStatusClass(row.status)}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{row.reference}</td>
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

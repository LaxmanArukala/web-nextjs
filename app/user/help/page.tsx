"use client";

import Link from "next/link";
import { HelpCircle, Mail, Phone, Clock, MessageSquare } from "lucide-react";
import UserPageGate from "../../components/user/UserPageGate";

export default function HelpPage() {
  return (
    <UserPageGate>
      <div className="py-8 md:py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-blue-900 mb-2">
            <HelpCircle className="h-9 w-9" aria-hidden />
            <h1 className="text-3xl font-bold tracking-tight">Help</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Get support using LegalHub. For legal advice on your matter, contact the lawyer handling your
            case.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-700" aria-hidden />
              Contact support
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Platform issues, login problems, payments on LegalHub, or general product questions.
            </p>
            <a
              href="mailto:support@legalhub.example"
              className="text-blue-600 font-medium hover:underline"
            >
              support@legalhub.example
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-700" aria-hidden />
              Phone
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gray-400" aria-hidden />
                Mon–Sat, 9:00–18:00 IST
              </span>
            </p>
            <a href="tel:+9118000000000" className="text-blue-600 font-medium hover:underline">
              1800-000-0000
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-700" aria-hidden />
              Before you write
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              <li>
                Check{" "}
                <Link href="/user/faq" className="text-blue-600 font-medium hover:underline">
                  FAQ
                </Link>{" "}
                for billing, cases, and account questions.
              </li>
              <li>Include your registered email and, if relevant, a case or payment reference.</li>
              <li>Do not share bank passwords or full card numbers by email.</li>
            </ul>
          </div>
        </div>
      </div>
    </UserPageGate>
  );
}

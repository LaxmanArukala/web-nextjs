"use client";

import { MessageCircleQuestion } from "lucide-react";
import UserPageGate from "../../components/user/UserPageGate";

const faqs = [
  {
    q: "How do I pay a lawyer through LegalHub?",
    a: "From a lawyer’s profile or after a consultation, use the payment option we provide. You will see the amount, payee name, and a transaction reference once the payment completes.",
  },
  {
    q: "Who receives my online payment?",
    a: "The lawyer or firm name shown on the receipt and in My Payments is the recipient. LegalHub processes the payment as shown in your transaction history.",
  },
  {
    q: "Where can I see my cases?",
    a: "Open My Cases in your account. Cases appear when they are linked to your profile after you engage a lawyer through the platform.",
  },
  {
    q: "How is my account secured?",
    a: "Use a strong password and sign out on shared devices. We recommend enabling any future two-factor option your administrator enables for this portal.",
  },
  {
    q: "Can LegalHub give legal advice?",
    a: "LegalHub is a platform to find lawyers and manage interactions. Legal advice comes from your lawyer, not from LegalHub support.",
  },
] as const;

export default function FaqPage() {
  return (
    <UserPageGate>
      <div className="py-8 md:py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-blue-900 mb-2">
            <MessageCircleQuestion className="h-9 w-9" aria-hidden />
            <h1 className="text-3xl font-bold tracking-tight">FAQ</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Short answers about your account, payments, and cases. Replace with your legal/compliance copy
            as needed.
          </p>
        </div>

        <div className="space-y-3 max-w-3xl">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="cursor-pointer list-none font-medium text-gray-900 flex items-center justify-between gap-3">
                <span>{item.q}</span>
                <span className="text-gray-400 text-xl leading-none group-open:rotate-45 transition-transform select-none" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </UserPageGate>
  );
}

/** Placeholder data until API wiring; replace with fetches from your backend. */

export type CaseStatus = "Open" | "In review" | "Closed" | "Awaiting documents";

export interface UserCaseRow {
  id: string;
  title: string;
  lawyerOrFirm: string;
  status: CaseStatus;
  lastUpdated: string;
}

export interface PaymentRow {
  id: string;
  date: string;
  amount: string;
  paidTo: string;
  role: string;
  method: string;
  status: "Completed" | "Pending" | "Failed";
  reference: string;
}

export interface ActivityItem {
  id: string;
  label: string;
  detail: string;
  time: string;
}

export const mockCases: UserCaseRow[] = [
  {
    id: "CASE-2401",
    title: "Property dispute — Phase 1",
    lawyerOrFirm: "Adv. Meera Krishnan",
    status: "In review",
    lastUpdated: "2025-03-18",
  },
  {
    id: "CASE-2388",
    title: "Employment contract review",
    lawyerOrFirm: "LegalEdge Partners",
    status: "Open",
    lastUpdated: "2025-03-12",
  },
  {
    id: "CASE-2310",
    title: "Consumer forum filing",
    lawyerOrFirm: "Adv. R. Sharma",
    status: "Closed",
    lastUpdated: "2025-02-02",
  },
];

export const mockPayments: PaymentRow[] = [
  {
    id: "pay_1",
    date: "2025-03-15",
    amount: "₹12,500",
    paidTo: "Adv. Meera Krishnan",
    role: "Counsel fee (online)",
    method: "UPI",
    status: "Completed",
    reference: "UPI/LH-903421",
  },
  {
    id: "pay_2",
    date: "2025-03-08",
    amount: "₹4,200",
    paidTo: "LegalEdge Partners",
    role: "Consultation",
    method: "Card",
    status: "Completed",
    reference: "CARD/LH-882110",
  },
  {
    id: "pay_3",
    date: "2025-03-20",
    amount: "₹8,000",
    paidTo: "Adv. R. Sharma",
    role: "Filing charges",
    method: "Netbanking",
    status: "Pending",
    reference: "NB/LH-PENDING-01",
  },
];

export const mockActivity: ActivityItem[] = [
  {
    id: "a1",
    label: "Payment received",
    detail: "₹12,500 toward Case CASE-2401 (Adv. Meera Krishnan)",
    time: "2 days ago",
  },
  {
    id: "a2",
    label: "Document uploaded",
    detail: "You added “Sale deed draft.pdf” to CASE-2401",
    time: "4 days ago",
  },
  {
    id: "a3",
    label: "Message",
    detail: "LegalEdge Partners sent an update on your employment review",
    time: "1 week ago",
  },
  {
    id: "a4",
    label: "Case opened",
    detail: "CASE-2388 created from your consultation request",
    time: "1 week ago",
  },
];

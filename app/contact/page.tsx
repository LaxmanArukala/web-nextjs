"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { ArrowRight, Mail, MapPin, MessageSquare, Phone, Sparkles } from "lucide-react";
import { InputField, TextAreaField } from "../components/common/FormFields";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  query: string;
  message: string;
}

export default function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number")
      .required("Phone number is required"),
    query: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      query: "",
      message: "",
    },
    validateOnMount: true,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  const requiredKeys = ["name", "email", "phone", "query", "message"] as const;
  const allRequiredFilled = requiredKeys.every(
    (key) => formik.values[key].trim().length > 0
  );
  const canSubmit = allRequiredFilled && formik.isValid && !formik.isSubmitting;

  const inputClass = (field: keyof ContactFormValues) =>
    `w-full rounded-xl border bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
      formik.touched[field] && formik.errors[field]
        ? "border-red-400 ring-1 ring-red-200"
        : "border-gray-200 hover:border-gray-300"
    }`;

  return (
    <div className="min-h-screen grid md:grid-cols-5 bg-white">
      <aside className="relative md:col-span-2 flex min-h-[36vh] md:min-h-screen flex-col justify-center items-center bg-linear-to-br from-blue-700 to-indigo-700 px-6 py-12 sm:px-10 text-center text-white">
        <div className="flex w-full max-w-md flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
              <Sparkles className="h-3.5 w-3.5" />
              LegalHub
            </div>
            <h1 className="text-3xl font-bold leading-tight">Get in touch</h1>
            <p className="mt-4 text-sm leading-6 text-blue-100">
              Questions about the platform, partnerships, or support—we read every message and reply as soon as we can.
            </p>
          </div>

          <ul className="w-full space-y-4 text-left text-sm">
            <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" aria-hidden />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:support@legalhub.example" className="text-blue-100 hover:text-white hover:underline">
                  support@legalhub.example
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" aria-hidden />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+9118000000000" className="text-blue-100 hover:text-white hover:underline">
                  1800-000-0000
                </a>
                <p className="mt-1 text-xs text-blue-200/90">Mon–Sat, 9:00–18:00 IST</p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" aria-hidden />
              <div>
                <p className="font-medium">Office</p>
                <p className="text-blue-100">Hyderabad, India</p>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <section className="md:col-span-3 flex items-center bg-linear-to-br from-blue-50 via-indigo-50 to-white px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto w-full max-w-xl">
          <div className="mb-8 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
              <MessageSquare className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Contact us</h2>
              <p className="mt-1 text-sm text-gray-600">
                Send us a message and we’ll get back to you shortly.
              </p>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <InputField
              id="name"
              name="name"
              type="text"
              label="Name"
              required
              placeholder="Your full name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name ? formik.errors.name : undefined}
              inputClassName={inputClass("name")}
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <InputField
                id="email"
                name="email"
                type="email"
                label="Email"
                required
                placeholder="you@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email ? formik.errors.email : undefined}
                inputClassName={inputClass("email")}
              />
              <InputField
                id="phone"
                name="phone"
                type="text"
                label="Phone"
                required
                placeholder="9876543210"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone ? formik.errors.phone : undefined}
                inputClassName={inputClass("phone")}
              />
            </div>

            <InputField
              id="query"
              name="query"
              type="text"
              label="Subject"
              required
              placeholder="What is this regarding?"
              value={formik.values.query}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.query ? formik.errors.query : undefined}
              inputClassName={inputClass("query")}
            />

            <TextAreaField
              id="message"
              name="message"
              rows={5}
              label="Message"
              required
              placeholder="Tell us more…"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message ? formik.errors.message : undefined}
              inputClassName={inputClass("message")}
            />

            <p className="text-xs leading-relaxed text-gray-500">
              By submitting this form, you agree to our Privacy Policy and Terms of Service.
            </p>

            <button
              type="submit"
              disabled={!canSubmit}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                canSubmit
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
                  : "cursor-not-allowed bg-gray-300 text-gray-600"
              }`}
            >
              Send message
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

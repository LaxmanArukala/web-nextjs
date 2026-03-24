"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { InputField } from "../components/common/FormFields";

function safeRedirectPath(from: string | null): string | null {
  if (!from || !from.startsWith("/") || from.startsWith("//")) return null;
  return from;
}

function LoginForm() {
  const { login, isAuthenticated, isHydrated } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isHydrated || !isAuthenticated) return;
    const next = safeRedirectPath(searchParams.get("from")) ?? "/user/dashboard";
    router.replace(next);
  }, [isHydrated, isAuthenticated, router, searchParams]);

  const postLoginPath = () =>
    safeRedirectPath(searchParams.get("from")) ?? "/user/dashboard";

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Dummy login
      if (values.email === "admin@example.com" && values.password === "123456") {
        login("dummy-token-123");
        router.push(postLoginPath());
      } else {
        alert("Invalid credentials");
      }
    },
  });

  const canSubmit =
    formik.values.email.trim().length > 0 &&
    formik.values.password.trim().length > 0 &&
    formik.isValid &&
    !formik.isSubmitting;

  return (
    <div className="min-h-screen grid md:grid-cols-5 bg-white">
      <aside className="relative md:col-span-2 flex min-h-[36vh] md:min-h-screen flex-col justify-center items-center bg-linear-to-br from-blue-700 to-indigo-700 px-6 py-12 sm:px-10 text-center text-white">
        <div className="flex w-full max-w-md flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
              <Sparkles className="h-3.5 w-3.5" />
              LegalHub Portal
            </div>
            <h1 className="text-3xl font-bold leading-tight">Welcome back</h1>
            <p className="mt-4 text-sm leading-6 text-blue-100">
              Sign in to continue managing your legal dashboard, cases, and payments in one place.
            </p>
          </div>
          <div className="w-full rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="flex items-center justify-center gap-2 text-sm font-medium">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Secure account access
            </p>
            <p className="mt-2 text-xs leading-relaxed text-blue-100">
              We use authenticated sessions to keep your profile and legal data private.
            </p>
          </div>
        </div>
      </aside>

      <section className="md:col-span-3 flex items-center bg-linear-to-br from-blue-50 via-indigo-50 to-white px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto w-full max-w-xl">
          <div className="mb-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Login</h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter your credentials to access your LegalHub account.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <InputField
              id="email"
              name="email"
              label="Email"
              type="email"
              required
              placeholder="you@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email ? formik.errors.email : undefined}
            />

            <InputField
              id="password"
              name="password"
              label="Password"
              type="password"
              required
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password ? formik.errors.password : undefined}
            />

            <button
              type="submit"
              disabled={!canSubmit}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                canSubmit
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
                  : "cursor-not-allowed bg-gray-300 text-gray-600"
              }`}
            >
              Login
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>

            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

const LoginPage = () => (
  <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
        <div className="h-10 w-64 rounded-lg bg-gray-200 animate-pulse" aria-hidden />
      </div>
    }
  >
    <LoginForm />
  </Suspense>
);

export default LoginPage;

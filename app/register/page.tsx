"use client";

import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { InputField, TextAreaField } from "../components/common/FormFields";

const SignupPage: React.FC = () => {
  const router = useRouter();

  // ✅ Validation schema
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Enter a valid 6-digit pincode")
      .required("Pincode is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      password: "",
      confirm_password: "",
    },
    validateOnMount: true,
    validationSchema,
    onSubmit: (values) => {
      console.log("Registration Data:", values);
      alert("Registration successful!");
      router.push("/login");
    },
  });

  const requiredKeys = [
    "first_name",
    "last_name",
    "email",
    "phone",
    "address",
    "city",
    "state",
    "country",
    "pincode",
    "password",
    "confirm_password",
  ] as const;

  const allRequiredFilled = requiredKeys.every(
    (key) => formik.values[key].trim().length > 0
  );
  const canSubmit = allRequiredFilled && formik.isValid && !formik.isSubmitting;

  const inputClass = (field: keyof typeof formik.values) =>
    `w-full rounded-xl border bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
      formik.touched[field] && formik.errors[field]
        ? "border-red-400 ring-1 ring-red-200"
        : "border-gray-200 hover:border-gray-300"
    }`;

  return (
    <div className="min-h-screen grid md:grid-cols-5 bg-white">
      <aside className="relative md:col-span-2 flex min-h-[40vh] md:min-h-screen flex-col justify-center items-center bg-linear-to-br from-blue-700 to-indigo-700 px-6 py-12 sm:px-10 text-center text-white">
        <div className="flex w-full max-w-md flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
              <Sparkles className="h-3.5 w-3.5" />
              LegalHub Portal
            </div>
            <h1 className="text-3xl font-bold leading-tight">
              Create your account and manage all legal actions in one place.
            </h1>
            <p className="mt-4 text-sm leading-6 text-blue-100">
              Track cases, pay online, and get support quickly with a secure dashboard experience.
            </p>
          </div>

          <div className="w-full rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="flex items-center justify-center gap-2 text-sm font-medium">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Privacy-first access
            </p>
            <p className="mt-2 text-xs leading-relaxed text-blue-100">
              Your account details and activity stay available only to authenticated users.
            </p>
          </div>
        </div>
      </aside>

      <section className="md:col-span-3 flex items-center bg-linear-to-br from-blue-50 via-indigo-50 to-white px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sign up</h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter your details to create your LegalHub account.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                id="first_name"
                name="first_name"
                type="text"
                label="First Name"
                required
                placeholder="John"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.first_name ? formik.errors.first_name : undefined}
                inputClassName={inputClass("first_name")}
              />

              <InputField
                id="last_name"
                name="last_name"
                type="text"
                label="Last Name"
                required
                placeholder="Doe"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.last_name ? formik.errors.last_name : undefined}
                inputClassName={inputClass("last_name")}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                id="email"
                name="email"
                type="email"
                label="Email"
                required
                placeholder="john@email.com"
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

            <TextAreaField
              id="address"
              name="address"
              rows={3}
              label="Address"
              required
              placeholder="House no, street, area"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address ? formik.errors.address : undefined}
              inputClassName={inputClass("address")}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <InputField
                id="city"
                name="city"
                type="text"
                label="City"
                required
                placeholder="Hyderabad"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city ? formik.errors.city : undefined}
                inputClassName={inputClass("city")}
              />

              <InputField
                id="state"
                name="state"
                type="text"
                label="State"
                required
                placeholder="Telangana"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.state ? formik.errors.state : undefined}
                inputClassName={inputClass("state")}
              />

              <InputField
                id="country"
                name="country"
                type="text"
                label="Country"
                required
                placeholder="India"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.country ? formik.errors.country : undefined}
                inputClassName={inputClass("country")}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                id="pincode"
                name="pincode"
                type="text"
                label="Pincode"
                required
                placeholder="500001"
                value={formik.values.pincode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.pincode ? formik.errors.pincode : undefined}
                inputClassName={inputClass("pincode")}
              />

              <div className="hidden sm:block" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                id="password"
                name="password"
                type="password"
                label="Password"
                required
                placeholder="Minimum 6 characters"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password ? formik.errors.password : undefined}
                inputClassName={inputClass("password")}
              />

              <InputField
                id="confirm_password"
                name="confirm_password"
                type="password"
                label="Confirm Password"
                required
                placeholder="Repeat password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.confirm_password ? formik.errors.confirm_password : undefined}
                inputClassName={inputClass("confirm_password")}
              />
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                canSubmit
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
                  : "cursor-not-allowed bg-gray-300 text-gray-600"
              }`}
            >
              Create account
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;

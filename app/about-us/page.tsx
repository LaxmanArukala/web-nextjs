"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white px-6">

        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Excellence in <span className="text-amber-400">Legal Practice</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 mb-6">
            Committed to protecting your rights with integrity and precision.
          </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href='/lawyers-list'
                className="bg-amber-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Find a Lawyer <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href={"/blog"}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
              >
                Read Legal Blog
              </Link>
            </div>
        </motion.div>
      </section>

      {/* ===== STORY ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Our Legacy
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            With decades of legal excellence, our firm has built a reputation
            for strategic thinking, courtroom expertise, and client-centered
            advocacy.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We represent individuals, corporations, and institutions with
            unwavering dedication.
          </p>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
          alt="Law Firm"
          className="rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* ===== COUNTERS ===== */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "25+", label: "Years of Experience" },
            { number: "1200+", label: "Cases Won" },
            { number: "300+", label: "Corporate Clients" },
            { number: "15+", label: "Legal Experts" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-amber-400">
                {item.number}
              </h3>
              <p className="mt-2 text-blue-200">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== AWARDS ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-900 text-center mb-12"
        >
          Recognized & Awarded
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            "Best Law Firm Award 2023",
            "Top Corporate Legal Advisors",
            "Excellence in Criminal Defense",
          ].map((award, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                🏆 {award}
              </h3>
              <p className="text-gray-600">
                Recognized for outstanding dedication and results in the
                legal profession.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16 text-center px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Let Us Represent You
          </h2>
          <Link
            href='/lawyers-list'
            className="bg-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
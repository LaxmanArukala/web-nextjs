
"use client";

import { LawyerResponseById } from "@/app/models/lawyersModel";
import { Award, CheckCircle, Shield, Star, ThumbsUp } from "lucide-react";
import { useState } from "react";

interface LawyerTabsProps {
  lawyerResponse: LawyerResponseById;
}

export default function LawyerTabs({ lawyerResponse }: LawyerTabsProps){
    const tabs = [
    { id: "overview", label: "Overview" },
    { id: "reviews", label: "Reviews" },
    { id: "experience", label: "Experience" },
  ];
  const lawyer = {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Criminal Law",
    location: "New York",
    rating: 4.9,
    reviews: 127,
    experience: 15,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Sarah Johnson is a highly experienced criminal defense attorney with over 15 years of practice. She specializes in white-collar crimes, DUI defense, and federal criminal cases. Sarah is known for her aggressive defense strategies and has successfully defended clients in high-profile cases.",
    hourlyRate: 450,
    languages: ["English", "Spanish"],
    education: "Harvard Law School, J.D. (2008)",
    barAdmissions: ["New York State Bar", "Federal District Court"],
    achievements: [
      "Top 100 Criminal Defense Attorneys - National Trial Lawyers",
      "ABA Criminal Justice Section Recognition",
      "Super Lawyers Rising Star (2015-2020)",
      "Martindale-Hubbell AV Preeminent Rating",
    ],
    practiceAreas: [
      "White Collar Crimes",
      "DUI/DWI Defense",
      "Federal Criminal Defense",
      "Drug Crimes",
      "Assault & Battery",
      "Domestic Violence",
    ],
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@lawfirm.com",
    website: "www.sarahjohnsonlaw.com",
    availability: "Available for consultations Mon-Fri 9AM-6PM EST",
    successRate: "94%",
    casesWon: 156,
    totalCases: 166,
  };

  const reviews = [
    {
      id: 1,
      author: "Michael R.",
      rating: 5,
      date: "2024-01-10",
      title: "Excellent representation",
      content:
        "Sarah provided exceptional legal representation for my case. Her attention to detail and aggressive defense strategy resulted in all charges being dropped. Highly recommended!",
      helpful: 12,
    },
    {
      id: 2,
      author: "Jennifer L.",
      rating: 5,
      date: "2024-01-05",
      title: "Professional and knowledgeable",
      content:
        "Very professional and knowledgeable attorney. She kept me informed throughout the entire process and achieved a better outcome than I expected.",
      helpful: 8,
    },
    {
      id: 3,
      author: "David K.",
      rating: 4,
      date: "2023-12-28",
      title: "Great communication",
      content:
        "Sarah was always available to answer my questions and explained complex legal matters in terms I could understand. Very satisfied with the service.",
      helpful: 6,
    },
  ];
  const [activeTab, setActiveTab] = useState("overview");
    return <div className="bg-white rounded-xl shadow-sm mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        About
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {lawyerResponse?.data?.data?.bio}
                      </p>
                    </div>

                    {lawyerResponse?.data?.data?.practiceareas?.length !==
                      0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Practice Areas
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {lawyerResponse?.data?.data?.practiceareas?.map(
                            (
                              area: any,
                              index: React.Key | null | undefined
                            ) => (
                              <div
                                key={index}
                                className="flex items-center text-gray-600"
                              >
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                {area}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Education & Bar Admissions
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Award className="h-4 w-4 text-blue-500 mr-2" />
                          {lawyerResponse?.data?.data?.education}
                        </div>
                        {lawyer.barAdmissions.map((bar, index) => (
                          <div
                            key={index}
                            className="flex items-center text-gray-600"
                          >
                            <Shield className="h-4 w-4 text-green-500 mr-2" />
                            {bar}
                          </div>
                        ))}
                        <div className="flex items-center text-gray-600">
                          <Shield className="h-4 w-4 text-green-500 mr-2" />
                          {lawyerResponse?.data?.data?.bar_asso_name} (
                          {lawyerResponse?.data?.data?.bar_councle_no})
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-6 last:border-b-0"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="font-medium text-gray-900">
                                {review.author}
                              </span>
                              <div className="flex ml-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-amber-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          {review.title}
                        </h4>
                        <p className="text-gray-600 mb-3">{review.content}</p>
                        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {lawyerResponse?.data?.data?.successrate}
                        </div>
                        <div className="text-sm text-gray-600">
                          Success Rate
                        </div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {lawyerResponse?.data?.data?.caseswon}
                        </div>
                        <div className="text-sm text-gray-600">Cases Won</div>
                      </div>
                      <div className="text-center p-4 bg-amber-50 rounded-lg">
                        <div className="text-2xl font-bold text-amber-600">
                          {lawyerResponse?.data?.data?.totalcases}
                        </div>
                        <div className="text-sm text-gray-600">Total Cases</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Achievements & Recognition
                      </h3>
                      <div className="space-y-2">
                        {lawyerResponse?.data?.data?.achievements.map(
                          (achievement, index) => (
                            <div
                              key={index}
                              className="flex items-center text-gray-600"
                            >
                              <Award className="h-4 w-4 text-amber-500 mr-2" />
                              {achievement}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
}

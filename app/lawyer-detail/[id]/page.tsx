import BreadcrumbsNav from "@/app/components/Breadcrumb";
import { getLawyerById } from "@/app/services/lawyersService";
import { Calendar, Clock, Globe, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import LawyerTabs from "./DetailsTab";

export default async function LawyerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lawyerResponse = await getLawyerById(id);
  if (lawyerResponse?.error) {
    throw new Error(lawyerResponse?.message || "Failed to load blog");
  }

    
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <BreadcrumbsNav
            items={[
              { label: "Home", to: "/" },
              { label: "All Lawyers", to: "/lawyers-list" },
              { label: lawyerResponse?.data?.data?.first_name || "Lawyer Details" },
              
            ]}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Lawyer Header */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={lawyerResponse?.data?.data?.image}
                  alt={lawyerResponse?.data?.data?.first_name}
                  className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {lawyerResponse?.data?.data?.first_name}{" "}
                    {lawyerResponse?.data?.data?.last_name}
                  </h1>
                  <p className="text-xl text-blue-600 font-medium mb-3">
                    {Array.isArray(lawyerResponse?.data?.data?.specilization)
                      ? lawyerResponse.data?.data?.specilization.join(", ")
                      : lawyerResponse?.data?.data?.specilization}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {lawyerResponse?.data?.data?.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {lawyerResponse?.data?.data?.experience} years experience
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {lawyerResponse?.data?.data?.languages.join(", ")}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i <
                              Math.floor(
                                Number(lawyerResponse?.data?.data?.rating)
                              )
                                ? "text-amber-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 font-medium">
                        {lawyerResponse?.data?.data?.rating}
                      </span>
                      <span className="text-gray-500 ml-1">
                        ({lawyerResponse?.data?.data?.reviews} reviews)
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      ₹{lawyerResponse?.data?.data?.pricing}/hour
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <button
                    //   onClick={() => setShowBookingModal(true)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Consultation
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <LawyerTabs lawyerResponse={lawyerResponse}/>
            {/* <div className="bg-white rounded-xl shadow-sm mb-8">
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
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-blue-500" />
                  <span>{lawyerResponse?.data?.data?.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-blue-500" />
                  <span>{lawyerResponse?.data?.data?.email}</span>
                </div>
                {lawyerResponse?.data?.data?.website && (
                  <div className="flex items-center text-gray-600">
                    <Globe className="h-5 w-5 mr-3 text-blue-500" />
                    <span>{lawyerResponse?.data?.data?.website}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Availability
              </h3>
              <p className="text-gray-600 mb-4">
                {lawyerResponse?.data?.data?.availability}
              </p>
              <button
                // onClick={() => setShowBookingModal(true)}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Lawyer } from "../models/lawyersModel";
import Link from "next/link";
import { MapPin, Star, Award, Clock, Phone, Eye } from "lucide-react";


export default function LawyerList({ lawyers }: { lawyers: Lawyer[] }) {
  if (!lawyers.length) {
    return <p className="text-center mt-10">No lawyers found</p>;
  }

  // ========== Navigating to Details ==============

  // ========== Navigating to Details ==============
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {lawyers.map((lawyer) => {
        const specializations = Array.isArray(lawyer.specilization)
          ? lawyer.specilization.join(", ")
          : lawyer.specilization;

        const categories = Array.isArray(lawyer.category)
          ? lawyer.category.join(", ")
          : lawyer.category;
        return <div
          key={lawyer.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <img
                src={lawyer.image || ""}
                alt={lawyer.first_name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {lawyer.first_name} {lawyer.last_name}
                    </h3>
                    {lawyer.specilization.length > 0 && (
                      <p className="text-blue-600 font-medium">
                        {/* {lawyer.specilization.join(",")} */}
                        {specializations}
                      </p>
                    )}
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {lawyer.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="ml-1 font-medium">{lawyer.rating}</span>
                      {/* <span className="text-gray-500 text-sm ml-1">
                        ({lawyer.reviews ?? 0})
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mt-4">{lawyer.bio}</p>

            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-1" />
                {lawyer.experience} years exp.
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="h-4 w-4 mr-1" />
                {lawyer.qualification}
              </div>
              <div className="text-blue-600 font-semibold">
                ₹{lawyer.pricing}/hour
              </div>
            </div>

            <div className="mt-4">
              <div className="text-sm text-gray-600 mb-2">
                Languages: {lawyer.languages.join(", ")}
              </div>
              {/* <div className="text-sm text-gray-600">
                    Achievements: {lawyer.achievements.join(', ')}
                  </div> */}
            </div>
            <div className="mt-4">
              <div className="text-sm text-blue-600 mb-2">
                Category: {categories}
                 {/* {lawyer.category.join(", ")} */}
              </div>
              {/* <div className="text-sm text-gray-600">
                    Achievements: {lawyer.achievements.join(', ')}
                  </div> */}
            </div>

            <div className="flex gap-3 mt-6">
              <Link
                href={`/lawyer-detail/${lawyer.id}`}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Details about {lawyer.first_name}
              </Link>
              <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </button>
            </div>
          </div>
        </div>
})}
    </div>
  );
}

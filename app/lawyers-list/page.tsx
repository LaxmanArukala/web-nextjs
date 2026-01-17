
import { getAllLawyers } from "../services/lawyersService";
import { LawyerResponse } from "../models/lawyersModel";
import { Lawyer } from "../models/lawyersModel";
import SearchFilters from "./SearchFilters";
import LawyerList from "./LawyerList";


export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{
    search?: string;
    category?: string;
    location?: string;
    minExp?: string;
  }>;
}
export default async function Lawyers({ searchParams }: Props) {
  const params = await searchParams;
  const res: LawyerResponse = await getAllLawyers(params);

  if (res.error) {
    throw new Error(res.message);
  }

  const lawyers: Lawyer[] = res.data.data;

  // 🔥 SERVER-SIDE FILTERING LOGIC
  

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Expert Lawyers
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Connect with qualified legal professionals for online
              consultations and expert advice
            </p>
          </div>
        </div>
      </div>
      {/* Search and Filter Section */}
      <div className="bg-white shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <SearchFilters />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <LawyerList lawyers={lawyers} />
      </div>
    </div>
  );
}


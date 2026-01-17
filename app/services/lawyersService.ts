import axiosInstance from '../api/axiosInstance';
import { LawyerResponseById } from '../models/lawyersModel';


export const getAllLawyers = async (filters?: {
  search?: string;
  category?: string;
  location?: string;
  minExp?: string;
}) => {
  try {
    const response = await axiosInstance.get("lawyers", {
      params: {
        ...(filters?.search && { search: filters.search }),
        ...(filters?.category && { category: filters.category }),
        ...(filters?.location && { location: filters.location }),
        ...(filters?.minExp && { minExp: filters.minExp }),
      },
    });

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: { data: [] }, // 🔥 always return valid structure
      error: true,
      message:
        error?.response?.data?.message ||
        error?.message ||
        "Network error",
    };
  }
};


// export const getLawyerById = async (id:string)=>{
//     try{
//         console.log("id", id)
//        const response = await axiosInstance.get(`lawyers/${id}`)
//        return response?.data
//     }catch (error: any) {
//     return {
//       success: false,
//       data: { data: [] }, // 🔥 always return valid structure
//       error: true,
//       message:
//         error?.response?.data?.message ||
//         error?.message ||
//         "Network error",
//     };
//   }
// }
export const getLawyerById = async (
  id: string
): Promise<LawyerResponseById> => {
  try {
    const response = await axiosInstance.get<LawyerResponseById>(
      `lawyers/${id}`
    );

    return response.data;

  } catch (error: any) {
    return {
      success: false,
      data: { data: {
        id: '',
        auth_id: '',
        username: '',
        first_name: '',
        last_name: '',
        full_name: '',
        email: '',
        phone: '',
        rating: '',
        location: '',
        address: '',
        pin_code: 0,
        certification: '',
        qualification: '',
        experience: 0,
        education: '',
        bar_councle_no: '',
        bar_asso_name: '',
        category: '',
        specilization: '',
        pricing: 0,
        duration: 0,
        bio: '',
        languages: [],
        feedback: '',
        image: '',
        achievements: [],
        availability: '',
        practiceareas: [],
        successrate: '',
        caseswon: '',
        totalcases: '',
        review_users: '',
        reviews: '',
        website: ''
      } },
      error: true,
      message:
        error?.response?.data?.message ||
        error?.message ||
        "Network error",
    };
  }
};

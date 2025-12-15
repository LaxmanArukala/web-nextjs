import axiosInstance from '../api/axiosInstance';
import type { BlogResponse } from "@/app/models/blogModel";
import { BlogResponseByID } from "@/app/models/blogModel";


export const getAllBlogs = async (): Promise<
  BlogResponse & { error?: boolean; message?: string }
> => {
  try {
    const response = await axiosInstance.get("blogs");
    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: { data: [] },      // 🔥 always return valid structure
      error: true,
      message: error?.response?.data?.message ||error?.message || "Network error",
    };
  }
};

export const getBlogById = async (
  id: number
): Promise<BlogResponseByID & { error?: boolean; message?: string }> => {
  try {
    const response = await axiosInstance.get(`blogs/${id}`);
    return response.data;
  } catch (error: any) {
    

    return {
      success: false,
      data: { data: null as any },   // Maintain structure
      error: true,
      message: error?.response?.data?.message || error.message || "Failed to load blog",
    };
  }
};


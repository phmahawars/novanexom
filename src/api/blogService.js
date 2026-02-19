import axiosInstance from "./axios";

export const getAllBlogs = async () => {
    const response = await axiosInstance.get("/blogs");
    return response.data;
};

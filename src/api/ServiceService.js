import axiosInstance from "./axios";

export const getAllServices = async () => {
    const response = await axiosInstance.get("/services");
    return response.data;
};
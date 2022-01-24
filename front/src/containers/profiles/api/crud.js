import { apiClient } from "../../../config/axios";

export const getUser = async (profileId) => {
    return apiClient.get("/profiles/"+profileId);
}

export const getUsers = async () => {
    return apiClient.get("/profiles");
}
import { callAPI } from "./axios.service";
const apiService = async (endPoint, method, data) => {
    const response = await callAPI({
        url: endPoint,
        method,
        data,
    });
    return response.data;
};

export { apiService };

import { apiService } from "../services/api.service";
import { USER_LOGIN } from "../constants/endPoints";

const loginApi = async (data) => {
    const response = await apiService(USER_LOGIN, 'POST', data);
    return response;
};

export { loginApi };

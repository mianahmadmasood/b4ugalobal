import { apiService } from "../services/api.service";
import { GET_LIST_GROUP_NAME, SHOW_GROUP_NAME, ADD_GROUP_NAME, DELETE_GROUP_NAME, UPDATE_GROUP_NAME } from "../constants/endPoints";


const getGroupNameListApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${GET_LIST_GROUP_NAME}?page=${data.page}`, 'GET');
    return response;
};


const showGroupNameApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${SHOW_GROUP_NAME}/${data}`, 'GET', data);
    return response;
};

const addGroupNameApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${ADD_GROUP_NAME}`, 'POST', data);
    return response;
};

const deleteGroupNameApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${DELETE_GROUP_NAME}/${data}`, 'GET', data);
    return response;
};

const updateGroupNameApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(UPDATE_GROUP_NAME, 'POST', data);
    return response;
};



export { getGroupNameListApi, showGroupNameApi, addGroupNameApi, deleteGroupNameApi, updateGroupNameApi };

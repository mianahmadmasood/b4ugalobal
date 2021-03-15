import { apiService } from "../services/api.service";
import { GET_LIST_GROUP_CRITERIA, SHOW_GROUP_CRITERIA, ADD_GROUP_CRITERIA, DELETE_GROUP_CRITERIA, UPDATE_GROUP_CRITERIA } from "../constants/endPoints";


const getGroupCriteriaListApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(GET_LIST_GROUP_CRITERIA, 'GET', data);
    return response;
};


const showGroupCriteriaApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${SHOW_GROUP_CRITERIA}/${data}`, 'GET', data);
    return response;
};

const addGroupCriteriaApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${ADD_GROUP_CRITERIA}`, 'POST', data);
    return response;
};

const deleteGroupCriteriaApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${DELETE_GROUP_CRITERIA}/${data}`, 'GET', data);
    return response;
};

const updateGroupCriteriaApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(UPDATE_GROUP_CRITERIA, 'POST', data);
    return response;
};



export { getGroupCriteriaListApi, showGroupCriteriaApi, addGroupCriteriaApi, deleteGroupCriteriaApi, updateGroupCriteriaApi };

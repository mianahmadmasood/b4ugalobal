import { apiService } from "../services/api.service";
import { GET_LIST_MESSAGE_TEMPLATE, SHOW_MESSAGE_TEMPLATE, ADD_MESSAGE_TEMPLATE, DELETE_MESSAGE_TEMPLATE, UPDATE_MESSAGE_TEMPLATE } from "../constants/endPoints";


const getMessageTemplateListApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(GET_LIST_MESSAGE_TEMPLATE, 'GET', data);
    return response;
};

const showMessageTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${SHOW_MESSAGE_TEMPLATE}/${data}`, 'GET', data);
    return response;
};

const addMessageTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${ADD_MESSAGE_TEMPLATE}`, 'POST', data);
    return response;
};

const deleteMessageTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${DELETE_MESSAGE_TEMPLATE}/${data}`, 'GET', data);
    return response;
};

const updateMessageTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(UPDATE_MESSAGE_TEMPLATE, 'POST', data);
    return response;
};



export { getMessageTemplateListApi, showMessageTemplateApi, addMessageTemplateApi, deleteMessageTemplateApi, updateMessageTemplateApi };

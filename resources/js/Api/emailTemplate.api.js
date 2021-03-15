import { apiService } from "../services/api.service";
import { GET_LIST_EMAIL_TEMPLATE, SHOW_EMAIL_TEMPLATE, ADD_EMAIL_TEMPLATE, DELETE_EMAIL_TEMPLATE, UPDATE_EMAIL_TEMPLATE } from "../constants/endPoints";


const getEmailTemplateListApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(GET_LIST_EMAIL_TEMPLATE, 'GET', data);
    return response;
};

const showEmailTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${SHOW_EMAIL_TEMPLATE}/${data}`, 'GET', data);
    return response;
};

const addEmailTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${ADD_EMAIL_TEMPLATE}`, 'POST', data);
    return response;
};

const deleteEmailTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${DELETE_EMAIL_TEMPLATE}/${data}`, 'GET', data);
    return response;
};

const updateEmailTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(UPDATE_EMAIL_TEMPLATE, 'POST', data);
    return response;
};



export { getEmailTemplateListApi, showEmailTemplateApi, addEmailTemplateApi, deleteEmailTemplateApi, updateEmailTemplateApi };

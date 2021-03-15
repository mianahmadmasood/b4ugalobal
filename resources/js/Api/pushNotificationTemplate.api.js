import { apiService } from "../services/api.service";
import { GET_PUSH_NOTIFICATION_TEMPLATE_LIST, SHOW_PUSH_NOTIFICATION_TEMPLATE, ADD_PUSH_NOTIFICATION_TEMPLATE, DELETE_PUSH_NOTIFICATION_TEMPLATE, UPDATE_PUSH_NOTIFICATION_TEMPLATE } from "../constants/endPoints";


const getPushNotificationTemplateListApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(GET_PUSH_NOTIFICATION_TEMPLATE_LIST, 'GET', data);
    return response;
};

const showPushNotificationTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${SHOW_PUSH_NOTIFICATION_TEMPLATE}/${data}`, 'GET', data);
    return response;
};

const addPushNotificationTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${ADD_PUSH_NOTIFICATION_TEMPLATE}`, 'POST', data);
    return response;
};

const deletePushNotificationTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${DELETE_PUSH_NOTIFICATION_TEMPLATE}/${data}`, 'GET', data);
    return response;
};

const updatePushNotificationTemplateApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(UPDATE_PUSH_NOTIFICATION_TEMPLATE, 'POST', data);
    return response;
};



export { getPushNotificationTemplateListApi, showPushNotificationTemplateApi, addPushNotificationTemplateApi, deletePushNotificationTemplateApi, updatePushNotificationTemplateApi };

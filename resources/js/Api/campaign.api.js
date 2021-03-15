import { apiService } from "../services/api.service";
import { GET_LIST_CAMPAIGN, SHOW_CAMPAIGN, ADD_CAMPAIGN, DELETE_CAMPAIGN, UPDATE_CAMPAIGN } from "../constants/endPoints";


const getCampaignListApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${GET_LIST_CAMPAIGN}?page=${data.page}`, 'GET');
    return response;
};

const showCampaignApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${SHOW_CAMPAIGN}/${data}`, 'GET', data);
    return response;
};

const addCampaignApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${ADD_CAMPAIGN}`, 'POST', data);
    return response;
};

const deleteCampaignApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(`${DELETE_CAMPAIGN}/${data}`, 'GET', data);
    return response;
};

const updateCampaignApi = async (data) => {
    console.log("data in api", data);
    const response = await apiService(UPDATE_CAMPAIGN, 'POST', data);
    return response;
};



export { getCampaignListApi, showCampaignApi, addCampaignApi, deleteCampaignApi, updateCampaignApi };

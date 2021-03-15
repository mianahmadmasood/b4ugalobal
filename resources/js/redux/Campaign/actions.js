import {
  GET_CAMPAIGN_LIST,
  GET_CAMPAIGN_LIST_SUCCESS,
  GET_CAMPAIGN_LIST_ERROR,
  ADD_CAMPAIGN,
  ADD_CAMPAIGN_SUCCESS,
  ADD_CAMPAIGN_ERROR,
  DELETE_CAMPAIGN,
  DELETE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_ERROR,
  UPDATE_CAMPAIGN,
  UPDATE_CAMPAIGN_SUCCESS,
  UPDATE_CAMPAIGN_ERROR,
  SHOW_CAMPAIGN,
  SHOW_CAMPAIGN_SUCCESS,
  SHOW_CAMPAIGN_ERROR
} from "../../constants/actionTypes";

export const getCampaignListRequest = (payload) => ({
  type: GET_CAMPAIGN_LIST,
  payload,
});
export const getCampaignListRequestSuccess = (payload) => ({
  type: GET_CAMPAIGN_LIST_SUCCESS,
  payload,
});
export const getCampaignListRequestError = (error) => ({
  type: GET_CAMPAIGN_LIST_ERROR,
  error,
});


// Show campaign
export const showCampaignRequest = (payload) => ({
  type: SHOW_CAMPAIGN,
  payload,
});
export const showCampaignRequestSuccess = (payload) => ({
  type: SHOW_CAMPAIGN_SUCCESS,
  payload,
});
export const showCampaignRequestError = (error) => ({
  type: SHOW_CAMPAIGN_ERROR,
  error,
});

// add department
export const addCampaignRequest = (payload) => ({
  type: ADD_CAMPAIGN,
  payload,
});
export const addCampaignRequestSuccess = (payload) => ({
  type: ADD_CAMPAIGN_SUCCESS,
  payload,
});
export const addCampaignRequestError = (error) => ({
  type: ADD_CAMPAIGN_ERROR,
  error,
});


// delete department
export const deleteCampaignRequest = (payload) => ({
  type: DELETE_CAMPAIGN,
  payload,
});
export const deleteCampaignRequestSuccess = (payload) => ({
  type: DELETE_CAMPAIGN_SUCCESS,
  payload,
});
export const deleteCampaignRequestError = (error) => ({
  type: DELETE_CAMPAIGN_ERROR,
  error,
});

// update department
export const updateCampaignRequest = (payload) => ({
  type: UPDATE_CAMPAIGN,
  payload,
});
export const updateCampaignRequestSuccess = (payload) => ({
  type: UPDATE_CAMPAIGN_SUCCESS,
  payload,
});
export const updateCampaignRequestError = (error) => ({
  type: UPDATE_CAMPAIGN_ERROR,
  error,
});

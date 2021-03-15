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

const INIT_STATE = {
  error: null,
  loadingCampaignListButton: false,
  campaignList: null,
  loadingShowCampaignButton: false,
  showCampaign: null,
  loadingCampaignAddButton: false,
  addedCampaign: null,
  loadingCampaignRemoveButton: false,
  deleteCampaign: null,
  updatedCampaign: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CAMPAIGN_LIST:
      return {
        ...state,
        error: null,
        loadingCampaignListButton: true,
      };
    case GET_CAMPAIGN_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loadingCampaignListButton: false,
        campaignList: action.payload.data,
        totalPages: action.payload.total
      };
    case GET_CAMPAIGN_LIST_ERROR:
      return {
        ...state,
        loadingCampaignListButton: false,
        error: action.payload,
      };

    // SHOW CAMPAIGN

    case SHOW_CAMPAIGN:
      return {
        ...state,
        error: null,
        loadingShowCampaignButton: true,
      };
    case SHOW_CAMPAIGN_SUCCESS:
      return {
        ...state,
        error: null,
        loadingShowCampaignButton: false,
        showCampaign: action.payload,
      };
    case SHOW_CAMPAIGN_ERROR:
      return {
        ...state,
        loadingShowCampaignButton: false,
        error: action.payload,
      };

    // ADD CAMPAIGN REDUCER
    case ADD_CAMPAIGN:
      return {
        ...state,
        error: null,
        loadingCampaignAddButton: true,
        addedCampaign: null
      };
    case ADD_CAMPAIGN_SUCCESS:
      return {
        ...state,
        error: null,
        loadingCampaignAddButton: false,
        addedCampaign: action.payload
      };
    case ADD_CAMPAIGN_ERROR:
      return {
        ...state,
        loadingCampaignAddButton: false,
        error: action.payload,
        addedCampaign: null
      };

    // ADD CAMPAIGN REDUCER
    case DELETE_CAMPAIGN:
      return {
        ...state,
        error: null,
        loadingCampaignRemoveButton: true,
        deleteCampaign: null
      };
    case DELETE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        error: null,
        loadingCampaignRemoveButton: false,
        deleteCampaign: action.payload
      };
    case DELETE_CAMPAIGN_ERROR:
      return {
        ...state,
        loadingCampaignRemoveButton: false,
        error: action.payload,
        deleteCampaign: null
      };

    // UPDATE CAMPAIGN REDUCER
    case UPDATE_CAMPAIGN:
      return {
        ...state,
        error: null,
        loadingCampaignAddButton: true,
        updatedCampaign: null
      };
    case UPDATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        error: null,
        loadingCampaignAddButton: false,
        updatedCampaign: action.payload
      };
    case UPDATE_CAMPAIGN_ERROR:
      return {
        ...state,
        loadingCampaignAddButton: false,
        error: action.payload,
        updatedCampaign: null
      };

    default:
      return { ...state };
  }
};

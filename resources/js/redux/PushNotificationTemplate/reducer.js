import {
  GET_PUSH_NOTIFICATION_TEMPLATE_LIST,
  GET_PUSH_NOTIFICATION_TEMPLATE_LIST_SUCCESS,
  GET_PUSH_NOTIFICATION_TEMPLATE_LIST_ERROR,
  ADD_PUSH_NOTIFICATION_TEMPLATE,
  ADD_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  ADD_PUSH_NOTIFICATION_TEMPLATE_ERROR,
  DELETE_PUSH_NOTIFICATION_TEMPLATE,
  DELETE_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  DELETE_PUSH_NOTIFICATION_TEMPLATE_ERROR,
  UPDATE_PUSH_NOTIFICATION_TEMPLATE,
  UPDATE_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  UPDATE_PUSH_NOTIFICATION_TEMPLATE_ERROR,
  SHOW_PUSH_NOTIFICATION_TEMPLATE,
  SHOW_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  SHOW_PUSH_NOTIFICATION_TEMPLATE_ERROR,
} from "../../constants/actionTypes";

const INIT_STATE = {
  error: null,
  loadingPushNotificationTemplateListButton: false,
  pushNotificationTemplateList: null,
  loadingPushNotificationTemplateAddButton: false,
  addedPushNotificationTemplate: null,
  loadingPushNotificationTemplateRemoveButton: false,
  deletePushNotificationTemplate: null,
  updatedPushNotificationTemplate: null,
  loadingPushNotificationTemplateShowButton: false,
  showPushNotificationTemplate: null

};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PUSH_NOTIFICATION_TEMPLATE_LIST:
      return {
        ...state,
        error: null,
        loadingPushNotificationTemplateListButton: true,
      };
    case GET_PUSH_NOTIFICATION_TEMPLATE_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loadingPushNotificationTemplateListButton: false,
        pushNotificationTemplateList: action.payload.data,
        totalPages: action.payload.total

      };
    case GET_PUSH_NOTIFICATION_TEMPLATE_LIST_ERROR:
      return {
        ...state,
        loadingPushNotificationTemplateListButton: false,
        error: action.payload,
      };

    // ADD PUSH_NOTIFICATION_TEMPLATE REDUCER
    case ADD_PUSH_NOTIFICATION_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingPushNotificationTemplateAddButton: true,
        addedPushNotificationTemplate: null
      };
    case ADD_PUSH_NOTIFICATION_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingPushNotificationTemplateAddButton: false,
        addedPushNotificationTemplate: action.payload
      };
    case ADD_PUSH_NOTIFICATION_TEMPLATE_ERROR:
      return {
        ...state,
        loadingPushNotificationTemplateAddButton: false,
        error: action.payload,
        addedPushNotificationTemplate: null
      };

    // SHOW PUSH_NOTIFICATION_TEMPLATE REDUCER
    case SHOW_PUSH_NOTIFICATION_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingPushNotificationTemplateShowButton: true,
        showPushNotificationTemplate: null
      };
    case SHOW_PUSH_NOTIFICATION_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingPushNotificationTemplateShowButton: false,
        showPushNotificationTemplate: action.payload
      };
    case SHOW_PUSH_NOTIFICATION_TEMPLATE_ERROR:
      return {
        ...state,
        loadingPushNotificationTemplateShowButton: false,
        error: action.payload,
        addedPushNotificationTemplate: null
      };


    // DELETE PUSH_NOTIFICATION_TEMPLATE REDUCER
    case DELETE_PUSH_NOTIFICATION_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingPushNotificationTemplateRemoveButton: true,
        deletePushNotificationTemplate: null
      };
    case DELETE_PUSH_NOTIFICATION_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingPushNotificationTemplateRemoveButton: false,
        deletePushNotificationTemplate: action.payload
      };
    case DELETE_PUSH_NOTIFICATION_TEMPLATE_ERROR:
      return {
        ...state,
        loadingPushNotificationTemplateRemoveButton: false,
        error: action.payload,
        deletePushNotificationTemplate: null
      };

    // UPDATE PUSH_NOTIFICATION_TEMPLATE REDUCER
    case UPDATE_PUSH_NOTIFICATION_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingPushNotificationTemplateAddButton: true,
        updatedPushNotificationTemplate: null
      };
    case UPDATE_PUSH_NOTIFICATION_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingPushNotificationTemplateAddButton: false,
        updatedPushNotificationTemplate: action.payload
      };
    case UPDATE_PUSH_NOTIFICATION_TEMPLATE_ERROR:
      return {
        ...state,
        loadingPushNotificationTemplateAddButton: false,
        error: action.payload,
        updatedPushNotificationTemplate: null
      };

    default:
      return { ...state };
  }
};

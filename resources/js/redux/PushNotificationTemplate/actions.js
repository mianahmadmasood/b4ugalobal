import {
  GET_PUSH_NOTIFICATION_TEMPLATE_LIST,
  GET_PUSH_NOTIFICATION_TEMPLATE_LIST_SUCCESS,
  GET_PUSH_NOTIFICATION_TEMPLATE_LIST_ERROR,
  SHOW_PUSH_NOTIFICATION_TEMPLATE,
  SHOW_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  SHOW_PUSH_NOTIFICATION_TEMPLATE_ERROR,
  ADD_PUSH_NOTIFICATION_TEMPLATE,
  ADD_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  ADD_PUSH_NOTIFICATION_TEMPLATE_ERROR,
  DELETE_PUSH_NOTIFICATION_TEMPLATE,
  DELETE_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  DELETE_PUSH_NOTIFICATION_TEMPLATE_ERROR,
  UPDATE_PUSH_NOTIFICATION_TEMPLATE,
  UPDATE_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  UPDATE_PUSH_NOTIFICATION_TEMPLATE_ERROR
} from "../../constants/actionTypes";

export const getPushNotificationTemplateListRequest = (payload) => ({
  type: GET_PUSH_NOTIFICATION_TEMPLATE_LIST,
  payload,
});
export const getPushNotificationTemplateListRequestSuccess = (payload) => ({
  type: GET_PUSH_NOTIFICATION_TEMPLATE_LIST_SUCCESS,
  payload,
});
export const getPushNotificationTemplateListRequestError = (error) => ({
  type: GET_PUSH_NOTIFICATION_TEMPLATE_LIST_ERROR,
  error,
});

// add message template
export const addPushNotificationTemplateRequest = (payload) => ({
  type: ADD_PUSH_NOTIFICATION_TEMPLATE,
  payload,
});
export const addPushNotificationTemplateRequestSuccess = (payload) => ({
  type: ADD_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  payload,
});
export const addPushNotificationTemplateRequestError = (error) => ({
  type: ADD_PUSH_NOTIFICATION_TEMPLATE_ERROR,
  error,
});


// show message template
export const showPushNotificationTemplateRequest = (payload) => ({
  type: SHOW_PUSH_NOTIFICATION_TEMPLATE,
  payload,
});
export const showPushNotificationTemplateRequestSuccess = (payload) => ({
  type: SHOW_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  payload,
});
export const showPushNotificationTemplateRequestError = (error) => ({
  type: SHOW_PUSH_NOTIFICATION_TEMPLATE_ERROR,
  error,
});


// delete department
export const deletePushNotificationTemplateRequest = (payload) => ({
  type: DELETE_PUSH_NOTIFICATION_TEMPLATE,
  payload,
});
export const deletePushNotificationTemplateRequestSuccess = (payload) => ({
  type: DELETE_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  payload,
});
export const deletePushNotificationTemplateRequestError = (error) => ({
  type: DELETE_PUSH_NOTIFICATION_TEMPLATE_ERROR,
  error,
});

// update department
export const updatePushNotificationTemplateRequest = (payload) => ({
  type: UPDATE_PUSH_NOTIFICATION_TEMPLATE,
  payload,
});
export const updatePushNotificationTemplateRequestSuccess = (payload) => ({
  type: UPDATE_PUSH_NOTIFICATION_TEMPLATE_SUCCESS,
  payload,
});
export const updatePushNotificationTemplateRequestError = (error) => ({
  type: UPDATE_PUSH_NOTIFICATION_TEMPLATE_ERROR,
  error,
});

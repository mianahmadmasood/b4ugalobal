import {
  GET_MESSAGE_TEMPLATE_LIST,
  GET_MESSAGE_TEMPLATE_LIST_SUCCESS,
  GET_MESSAGE_TEMPLATE_LIST_ERROR,
  SHOW_MESSAGE_TEMPLATE,
  SHOW_MESSAGE_TEMPLATE_SUCCESS,
  SHOW_MESSAGE_TEMPLATE_ERROR,
  ADD_MESSAGE_TEMPLATE,
  ADD_MESSAGE_TEMPLATE_SUCCESS,
  ADD_MESSAGE_TEMPLATE_ERROR,
  DELETE_MESSAGE_TEMPLATE,
  DELETE_MESSAGE_TEMPLATE_SUCCESS,
  DELETE_MESSAGE_TEMPLATE_ERROR,
  UPDATE_MESSAGE_TEMPLATE,
  UPDATE_MESSAGE_TEMPLATE_SUCCESS,
  UPDATE_MESSAGE_TEMPLATE_ERROR
} from "../../constants/actionTypes";

export const getMessageTemplateListRequest = (payload) => ({
  type: GET_MESSAGE_TEMPLATE_LIST,
  payload,
});
export const getMessageTemplateListRequestSuccess = (payload) => ({
  type: GET_MESSAGE_TEMPLATE_LIST_SUCCESS,
  payload,
});
export const getMessageTemplateListRequestError = (error) => ({
  type: GET_MESSAGE_TEMPLATE_LIST_ERROR,
  error,
});

// add message template
export const addMessageTemplateRequest = (payload) => ({
  type: ADD_MESSAGE_TEMPLATE,
  payload,
});
export const addMessageTemplateRequestSuccess = (payload) => ({
  type: ADD_MESSAGE_TEMPLATE_SUCCESS,
  payload,
});
export const addMessageTemplateRequestError = (error) => ({
  type: ADD_MESSAGE_TEMPLATE_ERROR,
  error,
});


// show message template
export const showMessageTemplateRequest = (payload) => ({
  type: SHOW_MESSAGE_TEMPLATE,
  payload,
});
export const showMessageTemplateRequestSuccess = (payload) => ({
  type: SHOW_MESSAGE_TEMPLATE_SUCCESS,
  payload,
});
export const showMessageTemplateRequestError = (error) => ({
  type: SHOW_MESSAGE_TEMPLATE_ERROR,
  error,
});


// delete department
export const deleteMessageTemplateRequest = (payload) => ({
  type: DELETE_MESSAGE_TEMPLATE,
  payload,
});
export const deleteMessageTemplateRequestSuccess = (payload) => ({
  type: DELETE_MESSAGE_TEMPLATE_SUCCESS,
  payload,
});
export const deleteMessageTemplateRequestError = (error) => ({
  type: DELETE_MESSAGE_TEMPLATE_ERROR,
  error,
});

// update department
export const updateMessageTemplateRequest = (payload) => ({
  type: UPDATE_MESSAGE_TEMPLATE,
  payload,
});
export const updateMessageTemplateRequestSuccess = (payload) => ({
  type: UPDATE_MESSAGE_TEMPLATE_SUCCESS,
  payload,
});
export const updateMessageTemplateRequestError = (error) => ({
  type: UPDATE_MESSAGE_TEMPLATE_ERROR,
  error,
});

import {
  GET_EMAIL_TEMPLATE_LIST,
  GET_EMAIL_TEMPLATE_LIST_SUCCESS,
  GET_EMAIL_TEMPLATE_LIST_ERROR,
  ADD_EMAIL_TEMPLATE,
  ADD_EMAIL_TEMPLATE_SUCCESS,
  ADD_EMAIL_TEMPLATE_ERROR,
  DELETE_EMAIL_TEMPLATE,
  DELETE_EMAIL_TEMPLATE_SUCCESS,
  DELETE_EMAIL_TEMPLATE_ERROR,
  UPDATE_EMAIL_TEMPLATE,
  UPDATE_EMAIL_TEMPLATE_SUCCESS,
  UPDATE_EMAIL_TEMPLATE_ERROR,
  SHOW_EMAIL_TEMPLATE,
  SHOW_EMAIL_TEMPLATE_ERROR,
  SHOW_EMAIL_TEMPLATE_SUCCESS
} from "../../constants/actionTypes";

export const getEmailTemplateListRequest = (payload) => ({
  type: GET_EMAIL_TEMPLATE_LIST,
  payload,
});
export const getEmailTemplateListRequestSuccess = (payload) => ({
  type: GET_EMAIL_TEMPLATE_LIST_SUCCESS,
  payload,
});
export const getEmailTemplateListRequestError = (error) => ({
  type: GET_EMAIL_TEMPLATE_LIST_ERROR,
  error,
});


// Show email template
export const showEmailTemplateRequest = (payload) => ({
  type: SHOW_EMAIL_TEMPLATE,
  payload,
});
export const showEmailTemplateRequestSuccess = (payload) => ({
  type: SHOW_EMAIL_TEMPLATE_SUCCESS,
  payload,
});
export const showEmailTemplateRequestError = (error) => ({
  type: SHOW_EMAIL_TEMPLATE_ERROR,
  error,
});

// add department
export const addEmailTemplateRequest = (payload) => ({
  type: ADD_EMAIL_TEMPLATE,
  payload,
});
export const addEmailTemplateRequestSuccess = (payload) => ({
  type: ADD_EMAIL_TEMPLATE_SUCCESS,
  payload,
});
export const addEmailTemplateRequestError = (error) => ({
  type: ADD_EMAIL_TEMPLATE_ERROR,
  error,
});


// delete department
export const deleteEmailTemplateRequest = (payload) => ({
  type: DELETE_EMAIL_TEMPLATE,
  payload,
});
export const deleteEmailTemplateRequestSuccess = (payload) => ({
  type: DELETE_EMAIL_TEMPLATE_SUCCESS,
  payload,
});
export const deleteEmailTemplateRequestError = (error) => ({
  type: DELETE_EMAIL_TEMPLATE_ERROR,
  error,
});

// update department
export const updateEmailTemplateRequest = (payload) => ({
  type: UPDATE_EMAIL_TEMPLATE,
  payload,
});
export const updateEmailTemplateRequestSuccess = (payload) => ({
  type: UPDATE_EMAIL_TEMPLATE_SUCCESS,
  payload,
});
export const updateEmailTemplateRequestError = (error) => ({
  type: UPDATE_EMAIL_TEMPLATE_ERROR,
  error,
});

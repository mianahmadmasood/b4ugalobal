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

const INIT_STATE = {
  error: null,
  loadingEmailTemplateListButton: false,
  templateList: null,
  loadingEmailTemplateAddButton: false,
  addedEmailTemplate: null,
  loadingEmailTemplateRemoveButton: false,
  deleteEmailTemplate: null,
  updatedEmailTemplate: null,
  loadingEmailTemplateShowButton: false,
  showEmailTemplate: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_EMAIL_TEMPLATE_LIST:
      return {
        ...state,
        error: null,
        loadingEmailTemplateListButton: true,
      };
    case GET_EMAIL_TEMPLATE_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loadingEmailTemplateListButton: false,
        templateList: action.payload.data,
        totalPages: action.payload.total
      };
    case GET_EMAIL_TEMPLATE_LIST_ERROR:
      return {
        ...state,
        loadingEmailTemplateListButton: false,
        error: action.payload,
      };


    // SHOW EMAIL_TEMPLATE

    case SHOW_EMAIL_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingEmailTemplateShowButton: true,
      };
    case SHOW_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingEmailTemplateShowButton: false,
        showEmailTemplate: action.payload,
      };
    case SHOW_EMAIL_TEMPLATE_ERROR:
      return {
        ...state,
        loadingEmailTemplateShowButton: false,
        error: action.payload,
      };

    // ADD EMAIL_TEMPLATE REDUCER
    case ADD_EMAIL_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingEmailTemplateAddButton: true,
        addedEmailTemplate: null
      };
    case ADD_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingEmailTemplateAddButton: false,
        addedEmailTemplate: action.payload
      };
    case ADD_EMAIL_TEMPLATE_ERROR:
      return {
        ...state,
        loadingEmailTemplateAddButton: false,
        error: action.payload,
        addedEmailTemplate: null
      };

    // ADD EMAIL_TEMPLATE REDUCER
    case DELETE_EMAIL_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingEmailTemplateRemoveButton: true,
        deleteEmailTemplate: null
      };
    case DELETE_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingEmailTemplateRemoveButton: false,
        deleteEmailTemplate: action.payload
      };
    case DELETE_EMAIL_TEMPLATE_ERROR:
      return {
        ...state,
        loadingEmailTemplateRemoveButton: false,
        error: action.payload,
        deleteEmailTemplate: null
      };

    // UPDATE EMAIL_TEMPLATE REDUCER
    case UPDATE_EMAIL_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingEmailTemplateAddButton: true,
        updatedEmailTemplate: null
      };
    case UPDATE_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingEmailTemplateAddButton: false,
        updatedEmailTemplate: action.payload
      };
    case UPDATE_EMAIL_TEMPLATE_ERROR:
      return {
        ...state,
        loadingEmailTemplateAddButton: false,
        error: action.payload,
        updatedEmailTemplate: null
      };

    default:
      return { ...state };
  }
};

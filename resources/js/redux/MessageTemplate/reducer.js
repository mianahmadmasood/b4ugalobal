import {
  GET_MESSAGE_TEMPLATE_LIST,
  GET_MESSAGE_TEMPLATE_LIST_SUCCESS,
  GET_MESSAGE_TEMPLATE_LIST_ERROR,
  ADD_MESSAGE_TEMPLATE,
  ADD_MESSAGE_TEMPLATE_SUCCESS,
  ADD_MESSAGE_TEMPLATE_ERROR,
  DELETE_MESSAGE_TEMPLATE,
  DELETE_MESSAGE_TEMPLATE_SUCCESS,
  DELETE_MESSAGE_TEMPLATE_ERROR,
  UPDATE_MESSAGE_TEMPLATE,
  UPDATE_MESSAGE_TEMPLATE_SUCCESS,
  UPDATE_MESSAGE_TEMPLATE_ERROR,
  SHOW_MESSAGE_TEMPLATE,
  SHOW_MESSAGE_TEMPLATE_SUCCESS,
  SHOW_MESSAGE_TEMPLATE_ERROR,
} from "../../constants/actionTypes";

const INIT_STATE = {
  error: null,
  loadingMessageTemplateListButton: false,
  messageTemplateList: null,
  loadingMessageTemplateAddButton: false,
  addedMessageTemplate: null,
  loadingMessageTemplateRemoveButton: false,
  deleteMessageTemplate: null,
  updatedMessageTemplate: null,
  loadingMessageTemplateShowButton: false,
  showMessageTemplate: null

};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGE_TEMPLATE_LIST:
      return {
        ...state,
        error: null,
        loadingMessageTemplateListButton: true,
      };
    case GET_MESSAGE_TEMPLATE_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loadingMessageTemplateListButton: false,
        messageTemplateList: action.payload.data,
        totalPages: action.payload.total


      };
    case GET_MESSAGE_TEMPLATE_LIST_ERROR:
      return {
        ...state,
        loadingMessageTemplateListButton: false,
        error: action.payload,
      };

    // ADD MESSAGE_TEMPLATE REDUCER
    case ADD_MESSAGE_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingMessageTemplateAddButton: true,
        addedMessageTemplate: null
      };
    case ADD_MESSAGE_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingMessageTemplateAddButton: false,
        addedMessageTemplate: action.payload
      };
    case ADD_MESSAGE_TEMPLATE_ERROR:
      return {
        ...state,
        loadingMessageTemplateAddButton: false,
        error: action.payload,
        addedMessageTemplate: null
      };

    // SHOW MESSAGE_TEMPLATE REDUCER
    case SHOW_MESSAGE_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingMessageTemplateShowButton: true,
        showMessageTemplate: null
      };
    case SHOW_MESSAGE_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingMessageTemplateShowButton: false,
        showMessageTemplate: action.payload
      };
    case SHOW_MESSAGE_TEMPLATE_ERROR:
      return {
        ...state,
        loadingMessageTemplateShowButton: false,
        error: action.payload,
        addedMessageTemplate: null
      };


    // DELETE MESSAGE_TEMPLATE REDUCER
    case DELETE_MESSAGE_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingMessageTemplateRemoveButton: true,
        deleteMessageTemplate: null
      };
    case DELETE_MESSAGE_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingMessageTemplateRemoveButton: false,
        deleteMessageTemplate: action.payload
      };
    case DELETE_MESSAGE_TEMPLATE_ERROR:
      return {
        ...state,
        loadingMessageTemplateRemoveButton: false,
        error: action.payload,
        deleteMessageTemplate: null
      };

    // UPDATE MESSAGE_TEMPLATE REDUCER
    case UPDATE_MESSAGE_TEMPLATE:
      return {
        ...state,
        error: null,
        loadingMessageTemplateAddButton: true,
        updatedMessageTemplate: null
      };
    case UPDATE_MESSAGE_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        loadingMessageTemplateAddButton: false,
        updatedMessageTemplate: action.payload
      };
    case UPDATE_MESSAGE_TEMPLATE_ERROR:
      return {
        ...state,
        loadingMessageTemplateAddButton: false,
        error: action.payload,
        updatedMessageTemplate: null
      };

    default:
      return { ...state };
  }
};

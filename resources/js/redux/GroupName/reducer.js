import {
  GET_GROUP_NAME_LIST,
  GET_GROUP_NAME_LIST_SUCCESS,
  GET_GROUP_NAME_LIST_ERROR,
  ADD_GROUP_NAME,
  ADD_GROUP_NAME_SUCCESS,
  ADD_GROUP_NAME_ERROR,
  DELETE_GROUP_NAME,
  DELETE_GROUP_NAME_SUCCESS,
  DELETE_GROUP_NAME_ERROR,
  UPDATE_GROUP_NAME,
  UPDATE_GROUP_NAME_SUCCESS,
  UPDATE_GROUP_NAME_ERROR,
  SHOW_GROUP_NAME,
  SHOW_GROUP_NAME_SUCCESS,
  SHOW_GROUP_NAME_ERROR
} from "../../constants/actionTypes";

const INIT_STATE = {
  error: null,
  loadingGroupNameListButton: false,
  groupNameList: null,
  loadingShowGroupNameButton: false,
  showGroupName: null,
  loadingGroupNameAddButton: false,
  addedGroupName: null,
  loadingGroupNameRemoveButton: false,
  deleteGroupName: null,
  updatedGroupName: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_GROUP_NAME_LIST:
      return {
        ...state,
        error: null,
        loadingGroupNameListButton: true,
      };
    case GET_GROUP_NAME_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loadingGroupNameListButton: false,
        groupNameList: action.payload.data,
        totalPages: action.payload.total
      };
    case GET_GROUP_NAME_LIST_ERROR:
      return {
        ...state,
        loadingGroupNameListButton: false,
        error: action.payload,
      };



    // SHOW group name

    case SHOW_GROUP_NAME:
      return {
        ...state,
        error: null,
        loadingShowGroupNameButton: true,
      };
    case SHOW_GROUP_NAME_SUCCESS:
      return {
        ...state,
        error: null,
        loadingShowGroupNameButton: false,
        showGroupName: action.payload,
      };
    case SHOW_GROUP_NAME_ERROR:
      return {
        ...state,
        loadingShowGroupNameButton: false,
        error: action.payload,
      };

    // ADD GROUP_NAME REDUCER
    case ADD_GROUP_NAME:
      return {
        ...state,
        error: null,
        loadingGroupNameAddButton: true,
        addedGroupName: null
      };
    case ADD_GROUP_NAME_SUCCESS:
      return {
        ...state,
        error: null,
        loadingGroupNameAddButton: false,
        addedGroupName: action.payload
      };
    case ADD_GROUP_NAME_ERROR:
      return {
        ...state,
        loadingGroupNameAddButton: false,
        error: action.payload,
        addedGroupName: null
      };

    // DELETE GROUP_NAME REDUCER
    case DELETE_GROUP_NAME:
      return {
        ...state,
        error: null,
        loadingGroupNameRemoveButton: true,
        deleteGroupName: null
      };
    case DELETE_GROUP_NAME_SUCCESS:
      return {
        ...state,
        error: null,
        loadingGroupNameRemoveButton: false,
        deleteGroupName: action.payload
      };
    case DELETE_GROUP_NAME_ERROR:
      return {
        ...state,
        loadingGroupNameRemoveButton: false,
        error: action.payload,
        deleteGroupName: null
      };

    // UPDATE GROUP_NAME REDUCER
    case UPDATE_GROUP_NAME:
      return {
        ...state,
        error: null,
        loadingGroupNameAddButton: true,
        updatedGroupName: null
      };
    case UPDATE_GROUP_NAME_SUCCESS:
      return {
        ...state,
        error: null,
        loadingGroupNameAddButton: false,
        updatedGroupName: action.payload
      };
    case UPDATE_GROUP_NAME_ERROR:
      return {
        ...state,
        loadingGroupNameAddButton: false,
        error: action.payload,
        updatedGroupName: null
      };

    default:
      return { ...state };
  }
};

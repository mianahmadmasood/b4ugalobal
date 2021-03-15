import {
  GET_GROUP_CRITERIA_LIST,
  GET_GROUP_CRITERIA_LIST_SUCCESS,
  GET_GROUP_CRITERIA_LIST_ERROR,
  ADD_GROUP_CRITERIA,
  ADD_GROUP_CRITERIA_SUCCESS,
  ADD_GROUP_CRITERIA_ERROR,
  DELETE_GROUP_CRITERIA,
  DELETE_GROUP_CRITERIA_SUCCESS,
  DELETE_GROUP_CRITERIA_ERROR,
  UPDATE_GROUP_CRITERIA,
  UPDATE_GROUP_CRITERIA_SUCCESS,
  UPDATE_GROUP_CRITERIA_ERROR,
  SHOW_GROUP_CRITERIA,
  SHOW_GROUP_CRITERIA_SUCCESS,
  SHOW_GROUP_CRITERIA_ERROR
} from "../../constants/actionTypes";

const INIT_STATE = {
  error: null,
  loadingGroupCriteriaListButton: false,
  groupCriteriaList: null,
  loadingShowGroupCriteriaButton: false,
  showGroupCriteria: null,
  loadingGroupCriteriaAddButton: false,
  addedGroupCriteria: null,
  loadingGroupCriteriaRemoveButton: false,
  deleteGroupCriteria: null,
  updatedGroupCriteria: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_GROUP_CRITERIA_LIST:
      return {
        ...state,
        error: null,
        loadingGroupCriteriaListButton: true,
      };
    case GET_GROUP_CRITERIA_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loadingGroupCriteriaListButton: false,
        groupCriteriaList: action.payload.data,
        totalPages: action.payload.total

      };
    case GET_GROUP_CRITERIA_LIST_ERROR:
      return {
        ...state,
        loadingGroupCriteriaListButton: false,
        error: action.payload,
      };



    // SHOW group name

    case SHOW_GROUP_CRITERIA:
      return {
        ...state,
        error: null,
        loadingShowGroupCriteriaButton: true,
      };
    case SHOW_GROUP_CRITERIA_SUCCESS:
      return {
        ...state,
        error: null,
        loadingShowGroupCriteriaButton: false,
        showGroupCriteria: action.payload,
      };
    case SHOW_GROUP_CRITERIA_ERROR:
      return {
        ...state,
        loadingShowGroupCriteriaButton: false,
        error: action.payload,
      };

    // ADD GROUP_CRITERIA REDUCER
    case ADD_GROUP_CRITERIA:
      return {
        ...state,
        error: null,
        loadingGroupCriteriaAddButton: true,
        addedGroupCriteria: null
      };
    case ADD_GROUP_CRITERIA_SUCCESS:
      return {
        ...state,
        error: null,
        loadingGroupCriteriaAddButton: false,
        addedGroupCriteria: action.payload
      };
    case ADD_GROUP_CRITERIA_ERROR:
      return {
        ...state,
        loadingGroupCriteriaAddButton: false,
        error: action.payload,
        addedGroupCriteria: null
      };

    // DELETE GROUP_CRITERIA REDUCER
    case DELETE_GROUP_CRITERIA:
      return {
        ...state,
        error: null,
        loadingGroupCriteriaRemoveButton: true,
        deleteGroupCriteria: null
      };
    case DELETE_GROUP_CRITERIA_SUCCESS:
      return {
        ...state,
        error: null,
        loadingGroupCriteriaRemoveButton: false,
        deleteGroupCriteria: action.payload
      };
    case DELETE_GROUP_CRITERIA_ERROR:
      return {
        ...state,
        loadingGroupCriteriaRemoveButton: false,
        error: action.payload,
        deleteGroupCriteria: null
      };

    // UPDATE GROUP_CRITERIA REDUCER
    case UPDATE_GROUP_CRITERIA:
      return {
        ...state,
        error: null,
        loadingGroupCriteriaAddButton: true,
        updatedGroupCriteria: null
      };
    case UPDATE_GROUP_CRITERIA_SUCCESS:
      return {
        ...state,
        error: null,
        loadingGroupCriteriaAddButton: false,
        updatedGroupCriteria: action.payload
      };
    case UPDATE_GROUP_CRITERIA_ERROR:
      return {
        ...state,
        loadingGroupCriteriaAddButton: false,
        error: action.payload,
        updatedGroupCriteria: null
      };

    default:
      return { ...state };
  }
};

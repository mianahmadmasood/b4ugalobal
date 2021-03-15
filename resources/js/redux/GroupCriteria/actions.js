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

export const getGroupCriteriaListRequest = (payload) => ({
  type: GET_GROUP_CRITERIA_LIST,
  payload,
});
export const getGroupCriteriaListRequestSuccess = (payload) => ({
  type: GET_GROUP_CRITERIA_LIST_SUCCESS,
  payload,
});
export const getGroupCriteriaListRequestError = (error) => ({
  type: GET_GROUP_CRITERIA_LIST_ERROR,
  error,
});


// Show group
export const showGroupCriteriaRequest = (payload) => ({
  type: SHOW_GROUP_CRITERIA,
  payload,
});
export const showGroupCriteriaRequestSuccess = (payload) => ({
  type: SHOW_GROUP_CRITERIA_SUCCESS,
  payload,
});
export const showGroupCriteriaRequestError = (error) => ({
  type: SHOW_GROUP_CRITERIA_ERROR,
  error,
});


// add group name
export const addGroupCriteriaRequest = (payload) => ({
  type: ADD_GROUP_CRITERIA,
  payload,
});
export const addGroupCriteriaRequestSuccess = (payload) => ({
  type: ADD_GROUP_CRITERIA_SUCCESS,
  payload,
});
export const addGroupCriteriaRequestError = (error) => ({
  type: ADD_GROUP_CRITERIA_ERROR,
  error,
});


// delete group
export const deleteGroupCriteriaRequest = (payload) => ({
  type: DELETE_GROUP_CRITERIA,
  payload,
});
export const deleteGroupCriteriaRequestSuccess = (payload) => ({
  type: DELETE_GROUP_CRITERIA_SUCCESS,
  payload,
});
export const deleteGroupCriteriaRequestError = (error) => ({
  type: DELETE_GROUP_CRITERIA_ERROR,
  error,
});

// update group
export const updateGroupCriteriaRequest = (payload) => ({
  type: UPDATE_GROUP_CRITERIA,
  payload,
});
export const updateGroupCriteriaRequestSuccess = (payload) => ({
  type: UPDATE_GROUP_CRITERIA_SUCCESS,
  payload,
});
export const updateGroupCriteriaRequestError = (error) => ({
  type: UPDATE_GROUP_CRITERIA_ERROR,
  error,
});

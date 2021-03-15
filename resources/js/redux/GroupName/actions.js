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

export const getGroupNameListRequest = (payload) => ({
  type: GET_GROUP_NAME_LIST,
  payload,
});
export const getGroupNameListRequestSuccess = (payload) => ({
  type: GET_GROUP_NAME_LIST_SUCCESS,
  payload,
});
export const getGroupNameListRequestError = (error) => ({
  type: GET_GROUP_NAME_LIST_ERROR,
  error,
});


// Show group
export const showGroupNameRequest = (payload) => ({
  type: SHOW_GROUP_NAME,
  payload,
});
export const showGroupNameRequestSuccess = (payload) => ({
  type: SHOW_GROUP_NAME_SUCCESS,
  payload,
});
export const showGroupNameRequestError = (error) => ({
  type: SHOW_GROUP_NAME_ERROR,
  error,
});


// add group name
export const addGroupNameRequest = (payload) => ({
  type: ADD_GROUP_NAME,
  payload,
});
export const addGroupNameRequestSuccess = (payload) => ({
  type: ADD_GROUP_NAME_SUCCESS,
  payload,
});
export const addGroupNameRequestError = (error) => ({
  type: ADD_GROUP_NAME_ERROR,
  error,
});


// delete group
export const deleteGroupNameRequest = (payload) => ({
  type: DELETE_GROUP_NAME,
  payload,
});
export const deleteGroupNameRequestSuccess = (payload) => ({
  type: DELETE_GROUP_NAME_SUCCESS,
  payload,
});
export const deleteGroupNameRequestError = (error) => ({
  type: DELETE_GROUP_NAME_ERROR,
  error,
});

// update group
export const updateGroupNameRequest = (payload) => ({
  type: UPDATE_GROUP_NAME,
  payload,
});
export const updateGroupNameRequestSuccess = (payload) => ({
  type: UPDATE_GROUP_NAME_SUCCESS,
  payload,
});
export const updateGroupNameRequestError = (error) => ({
  type: UPDATE_GROUP_NAME_ERROR,
  error,
});

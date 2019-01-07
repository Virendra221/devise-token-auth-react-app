import { getRequest, postRequest, patchRequest, deleteRequest,putRequest } from "./helper"
import { getRequestWithoutSession, postRequestWithoutSession, patchRequestWithoutSession, deleteRequestWithoutSession,putRequestWithoutSession } from "./helper-without-session"

export const getSignInUser = (data) => postRequest(`functions/getUserInfo/`,data);
export const signInUser = (data) => postRequestWithoutSession(`auth/sign_in`, data);
export const signUpUser = (data) => postRequestWithoutSession(`auth`, data);
export const getAllUserList = (data) => postRequest('functions/viewUsers',data);
export const signOutUser = (data) => deleteRequest('auth/sign_out',data);
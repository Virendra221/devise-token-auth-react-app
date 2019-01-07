
import { getRequest, postRequest, patchRequest, deleteRequest,putRequest } from "./helper"

export const createProfile = (data) => postRequest('profile',data);
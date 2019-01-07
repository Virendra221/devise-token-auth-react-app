
import { getRequest, postRequest, patchRequest, deleteRequest,putRequest } from "./helper"

export const createAddress = (data) => postRequest('address',data);
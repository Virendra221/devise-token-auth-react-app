import axios from "axios"
import { appConstants } from '../_constants/constants';
export const request = (path, data, method) => {
      return axios({
        method: method,
        url: `${appConstants.WEB_SERVICE_URL}/${path}`,
          headers: {
                    
          },
        data:data
      })
}
export const getRequestWithoutSession = (path, data) => request(path, data, "GET")
export const postRequestWithoutSession = (path, data) => request(path, data, "POST")
export const patchRequestWithoutSession = (path, data) => request(path, data, "PATCH")
export const deleteRequestWithoutSession = (path, data) => request(path, data, "DELETE")
export const putRequestWithoutSession = (path, data) => request(path, data, "PUT")
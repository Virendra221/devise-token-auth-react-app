import axios from "axios";
import { appConstants } from '../_constants/constants';
export const request = (path, data, method) => {

  const authentication = JSON.parse(localStorage.getItem('authentication'));
  if(authentication != null){
    if (data.data == "logout") {
        return axios({
          method: method,
          url: `${appConstants.WEB_SERVICE_URL}/${path}`,
            headers: {
              'Content-Type': 'application/json',
              'access-token': authentication.accessToken,
              'uid': authentication.uid,
              'client': authentication.client,
              'token-type': authentication.tokenType,
              'expiry' : authentication.expiry
            }
        })
    }else{
        return axios({
          method: method,
          url: `${appConstants.WEB_SERVICE_URL}/${path}`,
            headers: {
              'Content-Type': 'application/json',
              'access-token': authentication.accessToken,
              'uid': authentication.uid,
              'client': authentication.client,
              'token-type': authentication.tokenType,
              'expiry' : authentication.expiry
            },
          data: data
        })
    }

  }


}

export const getRequest = (path, data) => request(path, data, "GET")
export const postRequest = (path, data) => request(path, data, "POST")
export const patchRequest = (path, data) => request(path, data, "PATCH")
export const deleteRequest = (path, data) => request(path, data, "DELETE")
export const putRequest = (path, data) => request(path, data, "PUT")

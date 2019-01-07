import * as actionTypes from './actionTypes'
import * as API from '../api/profile'

export const createRequest = () => ({
    type: actionTypes.CREATE_PROFILE_REQUEST
})

export const createSuccess = (response) => ({
    type: actionTypes.CREATE_PROFILE_SUCCESS,
    payload: {
        response,
    }
})

export const createError = (error) => ({
    type: actionTypes.CREATE_PROFILE_ERROR,
    payload: {
        error
    }
})

export const createProfileAction = (data) => {
    return dispatch => {
        dispatch(createRequest())
        return API.createProfile(data)
            .then(response => {
                dispatch(createSuccess(response.data))
            })
            .catch(error => {
                debugger
                dispatch(createError(error))
            })
    }

}
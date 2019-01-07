import * as actionTypes from './actionTypes'
import * as API from '../api/address'

export const createRequest = () => ({
    type: actionTypes.CREATE_ADDRESS_REQUEST
})

export const createSuccess = (response) => ({
    type: actionTypes.CREATE_ADDRESS_SUCCESS,
    payload: {
        response,
    }
})

export const createError = (error) => ({
    type: actionTypes.CREATE_ADDRESS_ERROR,
    payload: {
        error
    }
})

export const createAddressAction = (data) => {
    return dispatch => {
        dispatch(createRequest())
        return API.createAddress(data)
            .then(response => {
                dispatch(createSuccess(response.data))
            })
            .catch(error => {
                dispatch(createError(error))
            })
    }

}
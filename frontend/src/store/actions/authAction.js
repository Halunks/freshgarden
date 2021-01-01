import {LOGOUT_UNSET_TOKEN, SET_TOKEN} from '../../helpers/constants'
import baseUrl from "../../helpers/baseUrl";

// action creator
export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token,
    }
}
export const unSetToken = () => {
    return {
        type: LOGOUT_UNSET_TOKEN,
        payload: null,
    }
}

export const authAction = (email, password, type) => async (dispatch, getState) => {
    if (type === LOGOUT_UNSET_TOKEN) return dispatch(unSetToken())

    const url = `${baseUrl}auth/token/`;
    const config = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({email, password})
    };

    const response = await fetch(url, config)
    const data = await response.json();
    dispatch(setToken(data.access)); //token
    localStorage.setItem("token", data.access);
    return data
};



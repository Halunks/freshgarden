// action creator
import baseUrl from "../../helpers/baseUrl";
import {SET_PRODUCTS_SUBSET} from "../../helpers/constants";

export const setProductData = (type, payload) => {
    return {
        type: type,
        payload: payload,
    }
}

export const productAction = (urlPath, method, type, body, payload) => async (dispatch, getState) => {
    if (type === SET_PRODUCTS_SUBSET) {
        return dispatch(setProductData(type, payload))
    }
    const { authReducer:{ token } } = getState();
    const url = baseUrl + urlPath;
    // creating fetch config header depending on request type
    const createConfig = () => {
        if (method !== 'GET') {
            return {
                method: method,
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }),
                body: body
            }
        } else {
            return {
                method: method,
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                body: body
            }
        }
    }
    const config = createConfig();

    const response = await fetch(url, config);
    const data = await response.json();
    dispatch(setProductData(type, data));
};

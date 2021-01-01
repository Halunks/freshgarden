// action creator
import baseUrl from "../../helpers/baseUrl";
import {NOT_LOGGED_IN, RESET_NOT_LOGGED_IN, TOGGLE_CART_VIEW} from "../../helpers/constants";

export const setCartData = (type, data) => {

    return {
        type: type,
        payload: data,
    }
}

export const cartAction = (urlPath, method, type, body) => {
    return async (dispatch, getState) => {
        const url = baseUrl + urlPath;
        const config = {
            method: method,
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Credentials': true
            }),
            // body: body
        };
        // config.headers.append("Cookie", "sessionid=.eJxljDkOwyAURO8yNTKxLRrq3CP6YnE-AuywFJbluyfUaaZ482YuGCoN-oIa0asrbKFzj1HgKLvtpr0GUQKZkoMGBU97dYE9V_Z1fiwQ-HTKjdsJvYwdm2HO67pMSv1qTrQNIpOzTPL_Qj4LmbfLcS92CseG-76_pO0zug:1kf9bf:_x-6WGS1Or8yk3O8Yb-YBee3mVCefTUS4-OqFaYuhaE");
        // console.log("cartAction-----HEADERS", config.headers['Content-Type'])

        if (type === TOGGLE_CART_VIEW) {
            dispatch(setCartData(type));
        } else if (type === RESET_NOT_LOGGED_IN) {
            dispatch(setCartData(type));
        } else {
            const response = await fetch(url, config).catch((error) => console.log('in cart fetch:', error));
            const data = await response.json();

            if (data.code === 'token_not_valid') {
                dispatch(setCartData(NOT_LOGGED_IN));
            } else {
                dispatch(setCartData(type, data));
            }
        }
    };
};

import baseUrl from "../../helpers/baseUrl";


export const valiAction = (code, email, username, first_name, last_name, password) => async (dispatch, getState) => {
    const url = `${baseUrl}auth/registration/validate/`;
    const config = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({code, email, username, first_name, last_name, password})
    };

    const response = await fetch(url, config)
    const data = await response.json();
    return data
};

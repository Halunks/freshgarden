import baseUrl from "../../helpers/baseUrl";


export const regAction = (email) => async (dispatch, getState) => {
    const url = `${baseUrl}auth/registration/`;
    const config = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({email})
    };

    const response = await fetch(url, config)
    const data = await response.json();
    return data
};


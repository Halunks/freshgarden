

export const locationAction = (locationInput) => async (dispatch, getState) => {
    const mapBoxToken = 'pk.eyJ1IjoiYWxleC1tYWVkZXIiLCJhIjoiY2toZ3Y3bnJhMGJuMTMzbzE3Mm42M3Y4bCJ9.DND92jKjd68QlS3CGSF6zA.'
    const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    const middleUrl = '.json?access_token='
    const settingsUrl = '.JM5ZeqwEEm-Tonrk5wOOMw&cachebuster=1605362275771&autocomplete=true&types=country%2Cregion%2Cdistrict%2Cpostcode%2Clocality%2Cplace&proximity=8.538481152895201%2C47.377902551520975&language=de%2Cen'
    const url = baseUrl + locationInput + middleUrl + mapBoxToken + settingsUrl;

    const config = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    };

    const response = await fetch(url, config)
    const data = await response.json();

    if (data.message === "Not Found" || data.features.length < 1) return false
    return data
};

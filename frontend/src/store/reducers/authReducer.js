import { SET_TOKEN, LOGOUT_UNSET_TOKEN } from '../../helpers/constants'

const initialState = {
    token: localStorage.getItem("token"),

    // TODO change to true for doing a demo storytelling
    demo: false,
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN: {
            const newState = {...state}
            newState.token = action.payload
            return newState
        }
        case LOGOUT_UNSET_TOKEN: {
            const newState = {...state}
            newState.token = null
            localStorage.removeItem('token');
            return newState
        }
        default: {
            return state
        }
    }
}

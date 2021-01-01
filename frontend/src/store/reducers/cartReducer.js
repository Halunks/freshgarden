import {ADD_TO_CART, NOT_LOGGED_IN, RESET_NOT_LOGGED_IN, SET_CART, TOGGLE_CART_VIEW} from '../../helpers/constants'

const initialState = {
    cartDetails: [],
    viewCart: false,
    redirectFlag: false,
    cartTotal: 0.00,
}

export default function cartReducer (state = initialState, action) {
    switch (action.type) {
        case SET_CART: {
            const newState = {...state}
            newState.cartDetails = action.payload
            // const subTotal = (item) => {
            //     return item.price * item.quantity
            // }
            // let newCartTotal =+ action.payload.map(item => subTotal(item))
            // newState.cartTotal = newCartTotal
            return newState
        }
        case TOGGLE_CART_VIEW: {
            const newState = {...state}
            newState.viewCart = !state.viewCart
            return newState
        }
        case NOT_LOGGED_IN: {
            const newState = {...state}
            newState.redirectFlag = true;
            return newState
        }
        case RESET_NOT_LOGGED_IN: {
            const newState = {...state}
            newState.redirectFlag = false;
            return newState
        }

        default: {
            return state
        }
    }
}

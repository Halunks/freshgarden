import { combineReducers } from 'redux'
import authReducer from './authReducer'
import productReducer from './productReducer'
import cartReducer from "./cartReducer";
import {userProfileReducer} from './userProfileReducer';


const rootReducer = combineReducers({ authReducer, productReducer, cartReducer, userProfileReducer });

export default rootReducer
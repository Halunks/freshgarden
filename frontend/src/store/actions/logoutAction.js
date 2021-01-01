import { USER_LOGOUT } from '../../helpers/constants';

export const logoutAction = () => {
    localStorage.clear();
    return {
        type: USER_LOGOUT,
        payload: ''
    };
};

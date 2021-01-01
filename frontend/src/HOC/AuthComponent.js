import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import baseUrl from "../helpers/baseUrl";


export default WrappedComponent => (props) => {
        const history = useHistory();
        const location = useLocation();
        const tokenLocal = localStorage.getItem("token");
        const tokenRedux = useSelector(state => state.authReducer.token)

        useEffect(() => {
            const userRedirect = async () => {
                const path = location.pathname;
                const url = `${baseUrl}auth/token/verify/`;
                const token = tokenRedux ? tokenRedux : tokenLocal ? tokenLocal : "null"
                const config = {
                    method: 'POST',
                    headers: new Headers({
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }),
                    body: JSON.stringify({token})
                };
                const response = await fetch(url, config);
                const data = await response.json();
                const evaluateData = (arg) => {
                    return Object.keys(arg).length === 0;
                };
                const verified = evaluateData(data);
                if (path.includes('/user/profile') && !verified) {
                    history.push('/user/login');
                } else if (path.includes('/user/login') && verified) {
                    history.push('/user/profile');
                } else if (!verified) {
                    history.push('/user/login');
                }
            };
            userRedirect()
            return function cleanup() {};

        }, [tokenRedux, tokenLocal, history, location]);

        return <WrappedComponent {...props} />
}

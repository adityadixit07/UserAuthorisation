import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser, userLogout } from '../actions/userActions';

function useRememberMe() {
    const dispatch = useDispatch();

    const rememberHistory = localStorage.getItem("remember");
    const authToken = localStorage.getItem("auth_token");

    useEffect(() => {
        if (rememberHistory === 'true' && authToken !== '' && location.pathname !== '/user/login') {
            dispatch(loadUser());
        }
    }, [rememberHistory, authToken]);

    useEffect(() => {
        if (rememberHistory === 'false') {
            dispatch(userLogout());
        }
    }, [rememberHistory]);
}

export default useRememberMe;

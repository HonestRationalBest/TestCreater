import React from "react";

const storageName = 'userData'

export const useAuth = () => {

    const [token, setToken] = React.useState('');
    const [ready, setReady] = React.useState(false);
    const [userId, setUserId] = React.useState('');

    const login = React.useCallback((jwtToken, id) => {
        setToken(jwtToken);
        setUserId(id);

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))
    }, [])

    const logout = React.useCallback(() => {
        setToken("");
        setUserId("");

        localStorage.setItem(storageName, " ")
    }, [])

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId)
        }
        setReady(true);
    })

    return { login, logout, token, userId, ready }
}
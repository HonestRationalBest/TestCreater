import React from "react";

const storageName = 'userData'

export const useAuth = () => {
    const [ready, setReady] = React.useState(false);
    const [userId, setUserId] = React.useState();

    const login = React.useCallback((id) => {
        setUserId(id);

        localStorage.setItem(storageName, JSON.stringify({
            userId: id
        }))
    }, [])

    const logout = React.useCallback(() => {
        setUserId(null);
        localStorage.setItem(storageName)
    }, [])

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token, data.userId)
        }
        setReady(true);
    }, [])

    return { login, logout, userId }
}
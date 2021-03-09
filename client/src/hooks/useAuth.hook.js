import React from "react";

const storageName = 'userId'

export const useAuth = () => {
    const [ready, setReady] = React.useState(false);
    const [userId, setUserId] = React.useState();

    const login = React.useCallback((id) => {
        setUserId(id);

        localStorage.setItem(storageName, id)
    }, [])

    const logout = React.useCallback(() => {
        setUserId(null);
        localStorage.setItem(storageName)
    }, [])

    React.useEffect(() => {
        const data = localStorage.getItem(storageName)
        if (data) {
            login(data.userId)
        }
        setReady(true);
    }, [])

    return { login, logout, userId }
}
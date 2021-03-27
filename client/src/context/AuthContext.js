import { createContext } from "react";

function noop() { }

export const AuthContext = createContext({
    login: noop,
    logout: noop,
    isAuth: false,
    userId: undefined,
    token: undefined
})
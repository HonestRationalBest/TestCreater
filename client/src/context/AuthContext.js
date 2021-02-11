import { createContext } from "react";

function noop(a) { }

export const AuthContext = createContext({
    login: noop,
    logout: noop,
    isAuth: false,
    userId: undefined
})
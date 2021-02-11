import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthTeacher from "./pages/AuthTeacher";
import AuthUser from "./pages/AuthUser";
import Home from "./pages/Home";
import TestCreater from "./pages/TestCreater";

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/test_creater" render={() => <TestCreater />} />
                <Redirect to="/test_creater" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/teacher" render={() => <AuthTeacher />} />
                <Route exact path="/student" render={() => <AuthUser />} />
            </Switch>
        )
    }
} 
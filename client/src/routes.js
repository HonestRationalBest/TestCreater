import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthTeacher from "./pages/AuthTeacher";
import AuthUser from "./pages/AuthUser";
import Home from "./pages/Home";
import None from "./pages/None";
import TestCreater from "./pages/TestCreater";
import Testing from "./pages/Testing";

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/test_creater" render={() => <TestCreater />} />
                <Route path="/testing" render={() => <Testing />} />
                <Route path="/theory" render={() => <None />} />
                <Route path="/practice" render={() => <None />} />
                <Route path="/data_base" render={() => <None />} />
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
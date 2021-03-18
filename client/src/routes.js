import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AddSectionTheory from "./pages/AddSectionTheory";
import AuthTeacher from "./pages/AuthTeacher";
import AuthUser from "./pages/AuthUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import None from "./pages/None";
import Register from "./pages/Register";
import TestCreater from "./pages/TestCreater";
import TestingEdit from "./pages/TestingEdit";
import TheoryEdit from "./pages/TheoryEdit";
import TheoryWatch from "./pages/TheoryWatch";

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/test_creater" render={() => <TestCreater />} />

                <Route path="/testingedit" render={() => <TestingEdit />} />
                <Route path="/testingwatch" render={() => <TestingEdit />} />

                <Route path="/theoryedit" render={() => <TheoryEdit />} />
                <Route path="/theorywatch" render={() => <TheoryWatch />} />
                <Route path="/add_section_theory" render={()=><AddSectionTheory/>  }/>

                <Route path="/practice" render={() => <None />} />
                <Route path="/data_base" render={() => <None />} />
                <Redirect to="/test_creater" />
                <Redirect to="/theoryedit" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/login" render={() => <Login />} />
                <Route exact path="/student_register" render={() => <Register />} />
                <Route exact path="/teacher_register" render={() => <Register />} />
            </Switch>
        )
    }
} 
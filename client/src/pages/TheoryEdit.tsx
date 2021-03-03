import React from "react";

// import Book from "./book/book";
// import Lab from "./lab/lab";

import style from "../static/style/Theory.module.sass"

import add from "../static/img/add_button.svg"
import { NavLink } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";
import TopNavBarAdmin from "../components/TopNavBarAdmin";
import TopicEdit from "../components/TopicEdit";

// import Topic from "./topics/topic";

const TheoryEdit = () => {



    return (
        <div className={style.wrapper}>
            <NavBarAdmin />
            <div className={style.content_wrapper}>
                <TopNavBarAdmin />
                <div className={style.materials_wrapper}>
                <TopicEdit />
                <TopicEdit />
                <TopicEdit />
                <TopicEdit />
                </div>
            </div>
        </div>
    );
}

export default TheoryEdit;